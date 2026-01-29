use('FirstDb');

//db.products.find({name: "Laptop"});
//db.Contacts.find({"name": "John Doe"})

// Use $gt operator to find products with price greater than 1000
//db.products.find({price: {$gt: 1000}});


// Use $gte to $lte operator to find products with price between 1000 and 2000
//db.products.find({price: {$gte: 500, $lte: 1000}});

//We can add two condition

db.products.find({price: {$gte: 500, $lte: 1000}, name: "Laptop"});
