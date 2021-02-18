const { Router } = require('express');
const router = Router();

const { Mssge, Commentary } = require('../db');

router.get('/', async (req, res) => {
  const message = await Mssge.findAll(
    {include: [Commentary]}
  );

  const comments = await Commentary.findAll(
    {include: [Mssge]}
  );

	res.render('index', {Mssge: message, Commentary: comments});
});


router.post('/', async (req, res) =>{

  const messages = await Mssge.create({
    name : req.body.name,
    post : req.body.post
  });

  console.log(messages);
  res.redirect('/');
});


router.post('/', async (req, res) =>{

  const commentary = await Commentary.create({
    name : req.body.names,
    comt : req.body.comt,
    mgId: req.body.mgId
  })
  
  res.redirect('/');
});


module.exports = router;