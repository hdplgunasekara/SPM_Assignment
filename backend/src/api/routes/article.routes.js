const router = require("express").Router();
const { default: mongoose } = require("mongoose");
let {Article,validateArticle} = require("../models/article");


//add article start 
 
router.post("/add", async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
	try {
        const { error } = validateArticle(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });


        const newArticle = new Article({
               
                title,
                description,
                userid:"1",
                status:"Pending"
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

	Article.find({status:"Deleted"}).then((articles)=>{
        res.json(articles)
    }).catch((err)=>{
        res.status(500).send({ message: "Server Error" });
    })
});

//fetch article end

//update article start

router.put("/update/:id",async(req ,res)=>{

    let articleId = req.params.id;
    const{title,description}=req.body;
   
    const { error } = validateArticle(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

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

//update article end

//delete article start

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

//delete articel end

//active article start

router.put("/active/:id",async(req ,res)=>{

    let articleId = req.params.id;

    try {

        const updateArticle={
            status:"Active"        
        }
        
        const update = await Article.findByIdAndUpdate(articleId,updateArticle).then(()=>{
            res.status(200).send({status: "Article Accepted"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with accepting article",error:err.message})
        })
        
    } catch (error) {

        res.status(500).send({ message: "Server Error" });
        
    }

   


});
//active article end






module.exports = router;
