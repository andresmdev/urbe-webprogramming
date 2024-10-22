const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  console.log('Hello World');

  res.send('usando node.js');
});

app.get('/:id', function (req, res) {
  const id = req.params.id;
  
  console.log('id', id);

  res.send({
    id: id
  });
});

app.post('/', function (req, res) {
  // const name = req.body.name;
  // const age = req.body.age;
  // const email = req.body.email;
  // console.log('name', name);
  // console.log('age', age);
  // console.log('email', email);

  const { name, age, email } = req.body; // Destructuring object

  console.log('data ===> ', name, age, email);

  //logica

  res.send({
    name: name,
    age: age,
    email: email
  });

});

app.put('/', function (req, res) {
  const { id, name, age, email } = req.body;

  console.log('id', id);
  console.log('data ===> ', name, age, email);

  res.send({
    id: id,
    name: name,
    age: age,
    email: email
  });
});

app.delete('/:id', function (req, res) {
  const { id } = req.params;

  console.log('id', id);

  res.send({
    id: id
  });
});

app.listen(3000, ()=> {
  console.log('Server is running on port 3000')
});
