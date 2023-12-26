const { query, where, getDocs, collection, documentId } = require('firebase/firestore');
const db = require('../config/firebase-config.js');

const checkValidity = async (req, res) => {
  try {
    const { id, collectionName } = req.body;

    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(documentId(), "in", [id]));
    const querySnapshot = await getDocs(q);

    const documents = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      documents.push(data);
    });

    if (documents.length !== 0) {
      res.status(200).json({ success: true, documents });
    }
    else {
      res.status(400).json({ succes: false });
    }

  } catch (error) {
    console.error('Error retrieving documents:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = checkValidity;

