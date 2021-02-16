const { Router } = require('express');
const router = Router();

const { Message, Commentary } = require('../db');

router.get('/', async (req, res) => {

  const message = await Message.findAll();
	res.render('index.ejs')

});

router.post('/', async (req, res) =>{

  let messenger = await Message.create({
    name : req.body.name,
    post : req.body.post
  })
  console.log(messenger);
  res.redirect('/');
});




module.exports = router;