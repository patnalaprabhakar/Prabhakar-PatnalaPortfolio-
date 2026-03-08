require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const portfolioRoutes = require('./routes/portfolio');
const contactRoutes = require('./routes/contact');

// Socket.io integration
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
    cors: {
        origin: "*", // allow all origins for now
        methods: ["GET", "POST", "PUT"]
    }
});

// Pass io to routes via middleware
app.use((req, res, next) => {
    req.io = io;
    next();
});

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolioDB')
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// Base route for testing
app.get('/', (req, res) => {
    res.send('Portfolio Backend API Running with WebSockets');
});

// Handle Socket Connections
io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

// Start Server using the HTTP server instead of the Express app
server.listen(PORT, () => {
    console.log(`Server is running with WebSockets on port ${PORT}`);
});
