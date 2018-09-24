(function (doc, xtag, $) {
  xtag.create('x-praise', class extends XTagElement {
    constructor() {
      super();
      this.$addFavorite = null;
      this.$favoriteNum = null;
    }

    connectedCallback() {
      this.initTemplate();
      this.getFavoriteNum();
    }

    //初始化点赞模板
    initTemplate() {
      this.innerHTML = `<img src="/img/favorite.png" alt="" class="j-add-favorite add-favorite">
    <span class="j-favorite-num">0</span>`;
      this.$addFavorite = doc.querySelector('.j-add-favorite');
      this.$favoriteNum = doc.querySelector('.j-favorite-num');
    }

    //添加点赞事件
    'click::event:delegate(.j-add-favorite)'() {
      let $favoriteNum = doc.querySelector('.j-favorite-num');
      if (this.timer) {
        console.info('点击太快了，暂停1s');
        clearInterval(this.timer);
      }

      this.timer = setTimeout(async () => {
        await addFavorite();
        this.timer = null;
      }, 600);

      //添加点赞数
      async function addFavorite() {
        await $.post('/add-favorite')
          .then(resp => {
            let {data, code} = resp.data;
            if (code === 1) {
              $favoriteNum.innerHTML = data;
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }

    //获取点赞数
    getFavoriteNum() {
      $.get('/get-favorite')
        .then(resp => {
          let {data, code} = resp.data;
          if (code === 1) {
            this.$favoriteNum.innerHTML = data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  });


})(document, xtag, axios);
