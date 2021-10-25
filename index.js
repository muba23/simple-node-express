const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.json());
const port = 5000;

app.get('/', (req, res)=>{
    res.send('This is my practice node');
});

const users = [
    {id: 0, name: 'John', email:'john@gmail.com', phone:'93247109'},
    {id: 1, name: 'David', email:'david@gmail.com', phone:'93247109'},
    {id: 2, name: 'Liya', email:'liya@gmail.com', phone:'93247109'},
    {id: 3, name: 'Rosy', email:'rosy@gmail.com', phone:'93247109'},
    {id: 4, name: 'Paul', email:'paul@gmail.com', phone:'93247109'},
    {id: 5, name: 'Vienna', email:'vienna@gmail.com', phone:'93247109'},
];

//CREATE API
app.get('/users', (req, res)=>{
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
})

//DYNAMIC API
//TO LOAD A PARTICULAR USER
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user); 
});

//SPECIAL ROUTE
app.get('/fruits', (req, res)=>{
    res.send(['mango','banana','lichi']);
})

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('Yummy');
});

app.listen(port, ()=>{
    console.log('listening to port', port);
});

