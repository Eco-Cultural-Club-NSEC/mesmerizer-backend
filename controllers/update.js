const { updateDoc, doc } = require('firebase/firestore');
const db = require("../config/firebase-config.js")

const update = async (req, res) => {
  const { id, collectionName } = req.body;

  const documentRef = doc(db, collectionName, id);
  try {
    await updateDoc(documentRef, { entry: true });
    res.status(200).json({ succes: true })
  }
  catch (err) {
    console.log(err)
    res.status(400).json({ succes: false })
  }

}

module.exports = update;

