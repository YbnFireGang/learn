const getFavorite = 'SELECT `favorite` FROM people';
const addFavorite = 'UPDATE people SET `favorite` = `favorite`+1';

module.exports = {
  getFavorite,
  addFavorite
};