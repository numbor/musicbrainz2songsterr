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

    // Try v2 with API key if available, fallback to v1
    if (apiKey) {
        try {
            const v2Url = `https://api.counterapi.dev/v2/${workspace}/${name}/up`;
            const response = await fetch(v2Url, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            if (response.ok) {
                const payload = await response.json();
                const value = typeof payload.data === 'number' ? payload.data : null;
                
                if (value !== null) {
                    return res.status(200).json({ count: value });
                }
            }
            
            console.log('V2 API failed, falling back to v1');
        } catch (error) {
            console.error('V2 API error:', error.message);
        }
    }

    // Fallback to v1 public API
    try {
        const v1Url = `https://api.counterapi.dev/v1/${workspace}/${name}/up`;
        const response = await fetch(v1Url);

        if (!response.ok) {
            console.error('V1 API error:', response.status);
            return res.status(response.status).json({ error: 'CounterAPI error' });
        }

        const payload = await response.json();
        const value = typeof payload.count === 'number' ? payload.count : null;

        return res.status(200).json({ count: value });
    } catch (error) {
        console.error('V1 API request failed:', error);
        return res.status(500).json({ error: 'CounterAPI request failed' });
    }
}
