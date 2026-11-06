
const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public4")));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Samhita@2006",
    database: "wedding"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("MySQL Connected");
    }
});

// CUSTOMERS

app.get("/api/customers", (req, res) => {
    db.query("SELECT * FROM customers", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.post("/api/customers", (req, res) => {
    db.query("INSERT INTO customers SET ?", req.body, (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.put("/api/customers/:id", (req, res) => {
    db.query("UPDATE customers SET ? WHERE customer_id = ?",
        [req.body, req.params.id], (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        });
});

app.delete("/api/customers/:id", (req, res) => {
    db.query("DELETE FROM customers WHERE customer_id = ?",
        [req.params.id], (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        });
});

// HALLS

app.get("/api/halls", (req, res) => {
    db.query("SELECT * FROM halls", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.post("/api/halls", (req, res) => {
    db.query("INSERT INTO halls SET ?", req.body, (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.put("/api/halls/:id", (req, res) => {
    db.query("UPDATE halls SET ? WHERE hall_id = ?",
        [req.body, req.params.id], (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        });
});

app.delete("/api/halls/:id", (req, res) => {
    db.query("DELETE FROM halls WHERE hall_id = ?",
        [req.params.id], (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        });
});

// BOOKINGS

app.get("/api/bookings", (req, res) => {
    db.query("SELECT * FROM bookings", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.post("/api/bookings", (req, res) => {
    db.query("INSERT INTO bookings SET ?", req.body, (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.put("/api/bookings/:id", (req, res) => {
    db.query("UPDATE bookings SET ? WHERE booking_id = ?",
        [req.body, req.params.id], (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        });
});

app.delete("/api/bookings/:id", (req, res) => {
    db.query("DELETE FROM bookings WHERE booking_id = ?",
        [req.params.id], (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        });
});

// PAYMENTS

app.get("/api/payments", (req, res) => {
    db.query("SELECT * FROM payments", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.post("/api/payments", (req, res) => {
    db.query("INSERT INTO payments SET ?", req.body, (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.put("/api/payments/:id", (req, res) => {
    db.query("UPDATE payments SET ? WHERE payment_id = ?",
        [req.body, req.params.id], (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        });
});

app.delete("/api/payments/:id", (req, res) => {
    db.query("DELETE FROM payments WHERE payment_id = ?",
        [req.params.id], (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        });
});

// START SERVER

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
