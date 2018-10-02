const query = require('../database/query');
const {getFavorite, addFavorite} = require('../database/sql');
const model = {
  page: {
    index(ctx) {
      return ctx.render('index');
    },
    noFound(ctx) {
      ctx.status = 404;
      ctx.body = 'file not find';
      return ctx;
    }
  },
  api: {
    getFavorite(ctx) {
      return query(getFavorite)
        .then(result => {
          ctx.body = {
            code: 1,
            data: result[0].favorite
          };
        })
    },
    addFavorite(ctx) {
      return query(addFavorite)
        .then(async result => {
          await query(getFavorite)
            .then(result => {
              ctx.body = {
                code: 1,
                data: result[0].favorite
              }
            })
        })
    }
  },

};
module.exports = model;