const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.all('burgers', (res) => {
      cb(res);
    });
  },
  create: (colsArr, valsArr, cb) => {
    orm.create('burgers', cols, vals, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete('burgers', condition, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;