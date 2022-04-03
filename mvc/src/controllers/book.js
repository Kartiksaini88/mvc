let Book = require("../model/bookModel")

let express = require("express");
let mongoose = require("mongoose");
let router = express.Router();

router.get("", async (req, res) => {
    try {
      let book = await Book.find().populat({path:"authorId",select:{"author":1,_id:0}}).lean().exec();
      return res.status(201).send({ book: book });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  });
  
  router.post("",async (req, res) => {
      try {
        let book = await Book.create(req.body);
        return res.status(201).send({ book: book });
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    }
  );
  
  module.exports = router;
  