const router = require("express").Router();
const { default: mongoose } = require("mongoose");
let {Article} = require("../models/article");


//add article start 
 
router.post("/add", async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
	try {

        const newArticle = new Article({
               
                title,
                description,
                userid:"1",
                status:"Active"
        })

		newArticle.save()
		
		res
		.status(201)
		.send({ message: "Added Successfull" });
	} catch (error) {
		
		res.status(500).send({ message: "Server Error" });
	}
});

//add notes end



module.exports = router;
