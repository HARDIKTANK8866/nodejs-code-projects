const express = require("express");
const app = express();
const connectSql = require("./config");

//GET DATA TO POSTMAN SEE
app.get("/", (req, res) => {
  connectSql.query("select * from student", (error, result) => {
    if (error) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.use(express.json())

// app.post("/", (req, res) => {
//   const data = { id: 32, name: "hardik", marks: 99, grade: "A", city: "SURAT" };
//   connectSql.query("INSERT INTO student value",data,
//     (error, result, fields) => {
//       if (error) error;
//       res.send(result);
//     }
//   );
// });
app.post("/", async (req, res) => {
    const { id, name, marks, grade, city } = req.body; // Use req.body to get data from the request
  
    const query = `
      INSERT INTO student (id, name, marks, grade, city)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    
    const values = [id, name, marks, grade, city];
  
    try {
      const result = await connectSql   .query(query, values);
      res.status(200).send(result.rows[0]);
    } catch (error) {
      console.error('Error inserting data:', error.stack);
      res.status(500).send('Error inserting data');
    }
  });

app.listen(6000);
