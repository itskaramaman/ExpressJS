const express = require("express");

const router = express.Router();

router.get('/', logger, (req, res)=>{
    res.send("Sending Users List");
})

router.get('/new', logger, (req, res)=>{
    res.render("new-user", {placeholder: 'Enter First Name'});
})

router.post('/new', logger, (req, res)=>{
    res.send(`Created new user with name ${req.body.firstName} ${req.body.lastName}`);
})

router.route('/:id').get((req, res)=>{
    console.log(req.user);
    res.send(`Get user with id: ${req.params.id}`);
}).put((req, res)=>{
    res.send("Put user");
}).delete( (req, res)=>{
    res.send("Delete user");
})

const users = [
    {
        firstName: "Kylie",
        lastName: "Jenner"
    },
    {
        firstName: "Donald",
        lastName: "Trump"
    }
]

router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
})

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;