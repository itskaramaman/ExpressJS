const express = require("express");

const app = express();

app.set('view engine', 'ejs'); // so we can use a view engine
app.use(express.urlencoded({ extended: true })); // so we can get data in req.body
app.use(express.json()); // so we can hit an ip with json data

app.get('/', (req, res)=>{
    res.render("index", {data: 'data passed from server'});
})

const userRoutes = require("./routes/users");

app.use('/users', userRoutes);

app.listen(3000, ()=>console.log("Servcer running on port 3000"));