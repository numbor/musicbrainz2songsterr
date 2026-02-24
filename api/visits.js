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
    const apiKey = process.env.COUNTER_API_KEY;

    const baseUrl = apiKey
        ? `https://api.counterapi.dev/v2/${workspace}/${name}/up`
        : `https://api.counterapi.dev/v1/${workspace}/${name}/up`;

    try {
        const response = await fetch(baseUrl, apiKey ? {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        } : undefined);

        if (!response.ok) {
            res.status(response.status).json({ error: 'CounterAPI error' });
            return;
        }

        const payload = await response.json();
        const value = typeof payload.data === 'number'
            ? payload.data
            : typeof payload.count === 'number'
                ? payload.count
                : typeof payload.value === 'number'
                    ? payload.value
                    : null;

        res.status(200).json({ count: value });
    } catch (error) {
        res.status(500).json({ error: 'CounterAPI request failed' });
    }
}
