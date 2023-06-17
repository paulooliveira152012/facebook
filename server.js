const express = require('express');
const app = express();
const port = 5000;
const MongoClient = require('mongodb').MongoClient;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = 'mongodb://localhost:27017'; // MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  const db = client.db('facebook_users'); 

  app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Implement signup logic here
    // Example: Create a new user document in the MongoDB collection

    db.collection('users').insertOne({ name, email, password }, (err) => {
      if (err) {
        console.error('Failed to insert user:', err);
        res.status(500).send('Failed to create an account');
        return;
      }
      res.status(200).send('Account created successfully');
    });
  });

  app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    // Implement signin logic here
    // Example: Check if the user exists in the MongoDB collection

    db.collection('users').findOne({ email, password }, (err, user) => {
      if (err) {
        console.error('Error finding user:', err);
        res.status(500).send('Error finding user');
        return;
      }

      if (!user) {
        res.status(404).send('User not found');
        return;
      }

      // Start a session or generate a token for the authenticated user
      // Example: You can use a session management library like Express Session or JWT

      res.status(200).send('Signin successful');
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
