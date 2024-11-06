const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const RegisterModel = require('./models/Register');
const bcrypt = require('bcrypt');

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.post('/registers', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires"
      });
    }

    const existingUser = await RegisterModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Un compte existe déjà avec cet email"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await RegisterModel.create({
      name,
      email,
      password: hashedPassword
    });

    const userResponse = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email
    };

    res.status(201).json({
      message: "Inscription réussie",
      user: userResponse
    });

  } catch (err) {
    console.error('Erreur lors de l\'inscription:', err);
    res.status(500).json({
      message: "Erreur lors de l'inscription. Veuillez réessayer."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});