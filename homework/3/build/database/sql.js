"use strict";

var getFavorite = 'SELECT `favorite` FROM people';
var addFavorite = 'UPDATE people SET `favorite` = `favorite`+1';
module.exports = {
  getFavorite: getFavorite,
  addFavorite: addFavorite
};