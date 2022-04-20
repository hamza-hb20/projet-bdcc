const express = require('express');
var router = express.Router();




router.get('/', async (req, res) => {
    const articles = await prisma.article.findMany({
        include: {Author: true}
    });
    res.send(articles);
})
router.get('/:id', async (req, res) => {
    res.send('ok')
})

router.post('/', async (req, res) => {
    res.send('ok')
})
router.patch('/:id', async (req, res) => {
    res.send('ok')
})
router.delete('/:id', async (req, res) => {
    res.send('ok')
})

module.exports = router