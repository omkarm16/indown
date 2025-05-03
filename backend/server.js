const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/download', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'No URL provided' });
  }

  try {
    const response = await axios.get('https://instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com/', {
      params: { link: url },
      headers: {
        'x-rapidapi-host': 'instagram-scrapper-posts-reels-stories-downloader.p.rapidapi.com',
        'x-rapidapi-key': '601c83bbb1msh0f528e911063c38p16f99ejsnae9939a4b65c'
      }
    });

    if (response.data && response.data.link) {
      res.json({ downloadUrl: response.data.link });
    } else {
      res.status(400).json({ error: 'Unable to fetch download link' });
    }

  } catch (error) {
    console.error('Error fetching from RapidAPI:', error.message);
    res.status(500).json({ error: 'Server error fetching Instagram media' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
