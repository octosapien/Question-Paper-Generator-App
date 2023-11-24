const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path'); 

const questionRoutes = require('./routes/questionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use(cors());
app.use(helmet());

mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
