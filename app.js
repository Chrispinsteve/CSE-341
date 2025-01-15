const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World, This is home router');
});

/*-----------*/

// Middleware to parse JSON
app.use(express.json());

// Route to retrieve all contacts
app.get('/contacts', (req, res) => {
    res.json([
        { id: 1, name: "Steve Chrispin", email: "chr23052@byui.edu" },
        { id: 2, name: "Valerie Levassort", email: "valerie03@gmail.com"},
    ]);
});

// Route to retrieve a contact by ID
app.get('/contacts/:id', (req, res) => {
    const contacts = [
        { id: 1, name: "Steve Chrispin", email: "chr23052@byui.edu" },
        { id: 2, name: "Valerie Levassort", email: "valerie03@gmail.com" },
    ];
    const contact = contacts.find(c => c.id === parseInt(req.params.id));
    if (contact) {
        res.json(contact);
    } else {
        res.status(404).send({ error: "Contact not found" });
    }
});

// Start the server
const port = 3000;

app.listen(process.env.PORT || port, () => {
    console.log(`Web Server is listening at port ` + (process.env.PORT || 3000))
});

