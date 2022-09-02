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

//add article end

//fetch article start

router.get("/list",async (req, res) => {

	Article.find({status:"Active"}).then((articles)=>{
        res.json(articles)
    }).catch((err)=>{
        res.status(500).send({ message: "Server Error" });
    })
});

//fetch notes end

//update note start

router.put("/update/:id",async(req ,res)=>{

    let articleId = req.params.id;
    const{title,description}=req.body;

    const updateArticle={
        title,
        description
        
    }
    const update = await Article.findByIdAndUpdate(articleId,updateArticle).then(()=>{
        res.status(200).send({status: "Article updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })


});

//update note end

//delete note start

router.put("/delete/:id",async(req ,res)=>{

    let articleId = req.params.id;

    const updateArticle={
        status:"Deleted"
        
    }

    const update = await Article.findByIdAndUpdate(articleId,updateArticle).then(()=>{
        res.status(200).send({status: "Article deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })


});

//delete note end


//fetch article end 





module.exports = router;
