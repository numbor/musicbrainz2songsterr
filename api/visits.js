export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(204).end();
        return;
    }

    const workspace = 'numbor-musicbrainz';
    const name = 'visit';
    const apiKey = process.env.COUNTER_API_KEY;

    if (!apiKey) {
        console.error('COUNTER_API_KEY not configured');
        return res.status(500).json({ error: 'API key not configured' });
    }

    // Use v2 API with Bearer authentication
    try {
        const v2Url = `https://api.counterapi.dev/v2/${workspace}/${name}/up`;
        const response = await fetch(v2Url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            console.error('V2 API error:', response.status);
            return res.status(response.status).json({ error: 'CounterAPI error' });
        }

        const payload = await response.json();
        const value = typeof payload.data === 'number' ? payload.data : null;

        if (value === null) {
            console.error('Invalid response from CounterAPI');
            return res.status(500).json({ error: 'Invalid API response' });
        }

        return res.status(200).json({ count: value });
    } catch (error) {
        console.error('V2 API request failed:', error);
        return res.status(500).json({ error: 'CounterAPI request failed' });
    }
}
