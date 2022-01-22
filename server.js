const express = require('express');

const app = express();

app.get('/api/customers', (req,res) => {
    const cust = [
        {id: 1, firstName: "Ishaan", lastName: "Zaveri"},
        {id: 2, firstName: "Pankaj", lastName: "Meghani"},
        {id: 3, firstName: "Clayton", lastName: "Dunavant"},
        {id: 4, firstName: "Rebecca", lastName: "Williams"}
    ];
    res.json(cust);
}); // for initial testing 

const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));