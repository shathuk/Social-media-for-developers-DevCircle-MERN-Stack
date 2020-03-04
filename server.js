const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Load Routes
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const profileRoutes = require('./routes/profile');

//Connect Database
connectDB();

// Routes for users, auth, posts, profile
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/profile', profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
