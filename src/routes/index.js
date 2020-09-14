const { Router } = require('express');

const router = Router();

const Image = require('../models/image');

router.get('/', async(req, res) => {
    const images = await Image.find();
    res.render('index', {images});
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', async(req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save();
    console.log(image);
    res.redirect('/');
});

router.get('/image/:id', (req, res) => {
    res.send('Profile image');
});

router.get('/image/:id/delete', (req, res) => {
    res.send('Image deleted');
});

module.exports = router;