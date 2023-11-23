const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const axios = require('axios');
const userRouter = require('./routers/userRouter');

const cors = require('cors');

const app = express();
dotenv.config();
connectDB();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // or the origin of your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use('/user', userRouter);

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

// routes
app.get('/', (req, res) => {
    res.send('response from index');
});

app.get('/home', (req, res) => {
    res.send('response from home');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) => {
    res.send('response from getall');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));