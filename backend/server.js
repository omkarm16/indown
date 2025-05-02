const express = require('express');
const cors = require('cors');
const ig = require('instagram-url-direct');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('InstaMask backend is running 🚀');
});

// Download endpoint
app.post('/api/download', async (req, res) => {
  const { url } = req.body;
  try {
    const result = await ig.instagramGetUrl(url);
    console.log('Result:', result);
    if (result && result.url_list && result.url_list.length > 0) {
      return res.json({ downloadLink: result.url_list[0] });
    } else {
      return res.status(404).json({ error: 'No downloadable link found' });
    }
  } catch (error) {
    console.error('Error fetching Instagram URL:', error);
    return res.status(500).json({ error: 'Failed to fetch Instagram URL' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
