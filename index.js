const express = require('express')
const cors = require("cors")
const colorRoute = require("./routes/color")
const db = require("./models")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Barokah Cat Backend is Running");
});

app.use("/api", colorRoute)

setTimeout(() => {
  db.sequelize.sync().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  });
}, 5000); // Delay 5 detik
