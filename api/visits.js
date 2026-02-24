export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(204).end();
        return;
    }

    const workspace = 'numbor-musicbrainz';
    const name = 'visits';
    
    // Use v1 public API (no auth required)
    const baseUrl = `https://api.counterapi.dev/v1/${workspace}/${name}/up`;

    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            console.error('CounterAPI error:', response.status, await response.text());
            res.status(response.status).json({ error: 'CounterAPI error', status: response.status });
            return;
        }

        const payload = await response.json();
        const value = typeof payload.count === 'number'
            ? payload.count
            : null;

        res.status(200).json({ count: value });
    } catch (error) {
        console.error('CounterAPI request failed:', error);
        res.status(500).json({ error: 'CounterAPI request failed', message: error.message });
    }
}
