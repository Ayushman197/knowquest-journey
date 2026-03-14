const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const roadmapRoutes = require('./routes/roadmapRoutes')


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const cors = require('cors'); 

const corsOptions = {
    origin: 'http://localhost:8080', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
};

app.use(cors(corsOptions)); 
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/roadmap", roadmapRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});