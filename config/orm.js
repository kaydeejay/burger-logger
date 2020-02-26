const connection = require('./connection.js');

// Helper function for writing SQL syntax
const printQuestionMarks = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++){
    arr.push('?');
  }
  return arr.toString();
}

const objToSql = (obj) => {
  const arr = [];
  for (let key in obj) {
    let value = obj[key];
    if (Object.hasOwnProperty.call(obj,key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
    }
    arr.push(key + '=' + value);
  }
  return arr.toString();
}

// object for all SQL statement functions
const orm = {
  all: (tableInput, cb) => {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err,res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  create: (table, cols, vals, cb) => {
    let queryString = `INSERT INTO ${table} (`;

    queryString += `${cols.toString()}) `;
    queryString += `VALUES (${printQuestionMarks(vals.length)}) `

    console.log(queryString);

    connection.query(queryString, vals, (err,res) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};