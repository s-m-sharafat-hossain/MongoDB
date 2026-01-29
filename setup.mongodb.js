
use('FirstDb');
db.Contacts.insertMany([
    {
        orderId: 1,
        name: "John Doe",
        Products: [{
            name: "Laptop",
            quantity: 4,
            price: 1000
        },{
            name: "Phone",
            quantity: 2,
            price: 500
        }],
        totalAmount: 5000,
        status: "completed",
        email: "john.doe@example.com",
        phone: "123-456-7890"
    },
    {
        orderId: 2,
        name: "Jane Smith",
        Products: [{
            name: "Phone",
            quantity: 5,
            price: 500
        },{
            name: "Tablet",
            quantity: 3,
            price: 300
        }],
        totalAmount: 3500,
        status: "Pending",
        email: "jane.smith@example.com",
        phone: "098-765-4321"
    }
]);

db.Orders.insertMany([
    {
        orderId: 1,
        name: "John Doe",
        Products: [{
            name: "Laptop",
            quantity: 4,
            price: 1000
        },{
            name: "Phone",
            quantity: 2,
            price: 500
        }],
        totalAmount: 5000,
        status: "completed",
        email: "john.doe@example.com",
        phone: "123-456-7890"
    },
    {
        orderId: 2,
        name: "Jane Smith",
        Products: [{
            name: "Phone",
            quantity: 5,
            price: 500
        },{
            name: "Tablet",
            quantity: 3,
            price: 300
        }],
        totalAmount: 3500,
        status: "Pending",
        email: "jane.smith@example.com",
        phone: "098-765-4321"
    }
]);
