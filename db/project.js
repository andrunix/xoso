'use strict';
const bookshelf = require('./bookshelf.js');
const Project = bookshelf.Model.extend({
  tableName: 'projects'
});

module.exports = Project;
