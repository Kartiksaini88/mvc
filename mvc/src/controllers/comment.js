let Commnet = require("../model/commentModel")
let express = require("express");
let mongoose = require("mongoose");
let router = express.Router();

router.get("", async (req, res) => {
    try {
      let comment = await Commnet.find().populat({path:"userId",select:{"firstName":1,"lastName":1,_id:0}}).lean().exec();
      return res.status(201).send({ comment: comment });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  });
  
  router.post("",async (req, res) => {
      try {
        let comment = await Commnet.create(req.body);
        return res.status(201).send({ comment: comment });
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    }
  );
  
  module.exports = router;
  