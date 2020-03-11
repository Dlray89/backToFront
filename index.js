const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())
let books = [
    {
        id: 1,
        title: "Master",
        year: 2017
    },
   { id: 2,
    title: "Dopeman",
    year: 1989
},
{
    id: 3,
    title: "Web D",
    year: 2020
}
];

const PORT = 4000
server.get('/api/books', (req,res) => {
    req.body;
    res.status(200).json(books)
})
server.listen(PORT, () => 
console.log( `\n ** Server is running http://localhost:${PORT} **\n`))