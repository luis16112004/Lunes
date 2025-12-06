const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');

// Ejemplo: Obtener datos
router.get('/items', async (req, res) => {
  try {
    const snapshot = await db.collection('items').get();
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ejemplo: Crear datos
router.post('/items', async (req, res) => {
  try {
    const newItem = req.body;
    const docRef = await db.collection('items').add(newItem);
    res.status(201).json({ id: docRef.id, ...newItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;