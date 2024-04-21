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

module.exports = router
