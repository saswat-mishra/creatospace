const express = require('express')
const router = express.Router()

const questionDB = require('../models/Question')
const answerDB = require('../models/Answer')

router.post("/", async (req, res) => {
    console.log(req.body);
  
    try {
      await questionDB
        .create({
          questionName: req.body.questionName,
          questionUrl: req.body.questionUrl,
          user: req.body.user,
        })
        .then(() => {
          res.status(201).send({
            status: true,
            message: "Question added successfully",
          });
        })
        .catch((err) => {
          res.status(400).send({
            staus: false,
            message: "Bad format",
          });
        });
    } catch (e) {
      res.status(500).send({
        status: false,
        message: "Error while adding question",
      });
    }
  });

  router.get('/', async(req, res)=> {
    try{
      await questionDB.aggregate([
        {
          $lookup:{
            from:"answers",
            localField: "_id",
            foreignField: "questionId",
            as: "allAnswers"
          }
        }
      ]).exec().then((doc)=>{
        res.status(200).send(doc)
      }).catch((error) => {
        res.status(500).send({
          status:false,
          message:"Unable to get question details"

        })

      })

    }catch(e){
      res.status(500).send({
        status:false,
        message:"Unexpected error"
      })

    }

  })

  router.get('/:questionId',async(req, res)=>{
    try{
      let questionId = req.params.questionId;

      let answers = await answerDB.find({"questionId":questionId});

      

      let result = await questionDB.findById(questionId);

      let response = {
        "question": result,
        "answers":answers,
      }

      

      // console.log(answers);

      // result.aggregate()


      return res.status(200).send(response);

    }catch(e){
      console.log(e)

    };
  }

  )

module.exports = router