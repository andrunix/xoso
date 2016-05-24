'use strict';
const bookshelf = require('../db/bookshelf.js');
const Project = bookshelf.Model.extend({
  tableName: 'projects'
});

module.exports = Project;
