const express = require('express')
const cors = require("cors")
const colorRoute = require("./routes/color")
const db = require("./models")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", colorRoute)

db.sequelize.sync().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
})