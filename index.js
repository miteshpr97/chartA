const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3306

const pool = mysql.createPool({
  host: '103.145.50.213',
  port: 3306,
  database: 'db_dsp',
  user: 'dps_dbuser',
  password: 'dps@SBC@23dps',
});



app.use(cors());

// Count records from the table
app.get('/count', (req, res) => {
  pool.query('SELECT COUNT(*) AS count FROM T_REALTIME_ANALYSIS_MYSQL', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
    } else {
      const count = results[0].count;
      res.send(`Total records: ${count}`);
    }
  });
});

// Fetch data from the table
app.get('/time', (req, res) => {
  pool.query('SELECT TIME_LOG, PRED_SI_PER, O2_ENRICHMENT, PCI, RAFT FROM T_REALTIME_ANALYSIS_MYSQL', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log('Server is running on port 3306');
});
