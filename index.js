const express = require('express')

const server = express()
server.use(express.json)

const port = 5000
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


server.get("/api/books", (req,res) => {
    res.status(200).json(books)
})
server.listen(port, () => 
console.log( `\n ** Server is running http://localhost: ${port} **\n`))