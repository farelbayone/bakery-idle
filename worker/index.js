// Cloudflare Worker: global leaderboard + anonymous cloud save (no login).
// The random player ID created in the browser acts as the save key.
const H = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET,PUT,POST,OPTIONS',
  'access-control-allow-headers': 'content-type',
  'content-type': 'application/json'
};
const J = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: H });
const ID = /^[\w-]{8,40}$/;
const pub = t => t.map(({ name, score }) => ({ name, score }));

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: H });
    const p = new URL(req.url).pathname.split('/').filter(Boolean);
    try {
      if (p[0] === 'top' && req.method === 'GET')
        return J(pub(JSON.parse((await env.KV.get('top')) || '[]')));

      if (p[0] === 'score' && req.method === 'POST') {
        const b = await req.json();
        const id = String(b.id || '');
        const name = String(b.name || 'Baker').replace(/[<>&"]/g, '').slice(0, 16) || 'Baker';
        const score = Math.floor(Number(b.score));
        if (!ID.test(id) || !(score >= 0) || score > 1e15) return J({ error: 'bad request' }, 400);
        let t = JSON.parse((await env.KV.get('top')) || '[]').filter(x => x.id !== id);
        t.push({ id, name, score });
        t = t.sort((a, b) => b.score - a.score).slice(0, 20);
        await env.KV.put('top', JSON.stringify(t));
        return J(pub(t));
      }

      if (p[0] === 'save' && ID.test(p[1] || '')) {
        const key = 'save:' + p[1];
        if (req.method === 'GET') {
          const v = await env.KV.get(key);
          return v ? new Response(v, { headers: H }) : J({ error: 'not found' }, 404);
        }
        if (req.method === 'PUT') {
          const body = await req.text();
          if (body.length > 20000) return J({ error: 'too large' }, 413);
          JSON.parse(body); // must be valid JSON
          await env.KV.put(key, body);
          return J({ ok: true });
        }
      }
      return J({ error: 'not found' }, 404);
    } catch (e) {
      return J({ error: 'server error' }, 500);
    }
  }
};
