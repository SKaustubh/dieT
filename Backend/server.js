const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const axios = require('axios');


const app = express();
dotenv.config();

connectDB();

app.get('/api/data', async (req, res) => {
    try {
        const apiKey = '6OCvMgrbijtvEPGpuN+eHQ==qiCbcLxJFLawzmGd';
        var query = '1lb brisket and fries';

        const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching API data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`)) 