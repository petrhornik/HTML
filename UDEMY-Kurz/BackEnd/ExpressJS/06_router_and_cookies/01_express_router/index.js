const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogsRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin")

app.use("/shelters", shelterRoutes); // vstupní bod pro routy v souboru/prefix je zde shelters
app.use("/dogs", dogsRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
    console.log("GUT - jedu na portu 3000!")
})