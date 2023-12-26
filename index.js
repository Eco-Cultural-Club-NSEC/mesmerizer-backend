const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
const files = fs.readdirSync("./routes/");
for (const file of files) {
  const filename = file.substring(0, file.length - 3);
  app.use(`/api/v1/${filename}`, require(`./routes/${filename}`));
}

// Set up a default route
app.get("/", (req, res) => {
  res.status(200).send("Default Route...");
});

//Server will be listening on port 5000 
try {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
catch (error) {
  console.log(error);

}
