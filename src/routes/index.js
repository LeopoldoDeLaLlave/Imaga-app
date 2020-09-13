const {Router} = require('express');

const router  = Router();


router.get('/', (req, res)=>{
    res.send('Index page');
});

router.get('/upload', (req, res)=>{
    res.send('Form upload');
});

router.post('/upload', (req, res)=>{
    res.send('uploades');
});

router.get('/image/:id', (req, res)=>{
    res.send('Profile image');
});

router.get('/image/:id/delete', (req, res)=>{
    res.send('Image deleted');
});

module.exports = router;