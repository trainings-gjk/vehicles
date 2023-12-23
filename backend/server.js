const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mern1234',
    database: 'automotive'
})



app.get('/', (req, res) => {
    const sql = 'SELECT * FROM vehicles'
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    
    })
})

app.get('/add-make', (req, res) => {
    const sql = 'SELECT * FROM makes ORDER BY Make_of_vehicle;'
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    
    })
})

app.post('/register-vehicle', (req, res) => {
    const newVehicle = 'INSERT INTO vehicles(`Make_of_vehicle`, `Model_of_vehicle`, `Year`, `Type_of_engine`, `Volume_of_engine`) VALUES (?);'
    const values = [
        req.body.make, 
        req.body.model,
        req.body.year,
        req.body.type,
        req.body.volume
    ]

    db.query(newVehicle, [values], (err, data) => {
        if(err) return res.json('Gabim gjate vendosjes se shenimeve te reja')
        return res.json(data)
    })
})


app.post('/add-make', (req, res) => {
        const newMake = 'INSERT INTO `makes`(`Make_of_vehicle`) VALUES (?);'
        const values = [req.body.makes]
    
        db.query(newMake, [values], (err, data) => {
        if(err) return res.json('Gabim gjate vendosjes se shenimeve te reja')
        return res.json(data)
    })
})


app.delete('/vehicle/:id', (req, res) => {
    
    const deleteVehicle = 'DELETE FROM vehicles WHERE (ID_vehicle = ?)'
    
    const id = req.params.id

    db.query(deleteVehicle, [id], (err, data) => {
        if(err) return res.json('Gabim gjate fshirjes se shenimit ekzistues')
        return res.json(data)
    })
})



app.put('/update-vehicle/:id', (req, res) => {
    
    const updateVehicle = 'UPDATE `vehicles` SET `Make_of_vehicle` = ?,  `Model_of_vehicle` = ?,  `Year` = ? ,  `Type_of_engine` = ? ,  `Volume_of_engine` = ?  WHERE (`ID_vehicle` = ?)'
    const values = [
        req.body.make, 
        req.body.model,
        req.body.year,
        req.body.type,
        req.body.volume
    ]
    const id = req.params.id

    db.query(updateVehicle, [...values, id], (err, data) => {
        if(err) return res.json('Gabim gjate perditesimit te shenimeve')
        return res.json(data)
    })
})



app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`)
})