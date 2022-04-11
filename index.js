const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const apiRouter = require('./routes/api')
const authRouter = require('./routes/auth')

const url = config.get('mongoUri')
mongoose.connect(url, err => {
    if (err) throw err
    console.log(`Database connected: ${url}`)
})

const PORT = config.get('port') || 5000

const app = express()

app.use('/uploads', express.static('uploads'))
app.use(fileUpload({}))
app.use(express.json({ extended: true }))
app.use('/api', apiRouter)
// app.use('/auth', authRouter)


async function main() {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
}

main()
    .catch(err => {
        console.log(err)
    })