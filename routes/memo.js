const express = require('express')
const router = express.Router()

const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./db/memos.db')

router.get('/', (req, res, next) => {
    db.serialize(() => {
        db.all("SELECT id, text, createdAt FROM memos", (err, rows) => {
            if (!err) {
                const data = {
                    title: 'To Do メモ 一覧表示',
                    content: rows
                }
                res.render('memo/index', data)
            }
        })
    })
});

router.get('/add', function (req, res, next) {
    const data = {
        title: 'メモる',
        content: '新しいメモを書く'
    }
    res.render('memo/add', data);
});

router.post('/add', function (req, res, next) {
    const memo = req.body.memo;
    // セキュリティの懸念あり
    db.run('insert into memos (text) values (?)', memo)
    res.redirect('/memo');
});

module.exports = router
