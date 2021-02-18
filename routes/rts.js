const { Router } = require('express');
const router = Router();

const { Mssge, Commentary } = require('../db');

router.get('/', async (req, res) => {
  const message = await Mssge.findAll(
    {include: [Commentary]}
  );
console.log(message);
	res.render('index', {Mssge: message});
});


router.post('/', async (req, res) =>{
  const messages = await Mssge.create({
    name : req.body.name,
    post : req.body.post
  });

  if(req.body.name =="" || req.body.post ==""){
    return res.send("fallo");
  };
  
  console.log(messages);
  res.redirect('/');
});


router.post('/comentario', async (req, res) =>{
  console.log(req.body);
  const commentary = await Commentary.create({
    name : req.body.names,
    post : req.body.comt,
    MssgeId: req.body.msgId
  });

  if(req.body.names =="" || req.body.comt ==""){
    return res.send("fallo de nuevo");
  };

  
  res.redirect('/');
});


module.exports = router;