import '../css/index.css';
import xtag from 'x-tag';
import axios from 'axios';

const img = require('../img/favorite.png');
xtag.register('x-praise', {
  content: `<img src='../${img}' class="j-add-favorite add-favorite" /><span class="j-favorite-num">0</span>`,
  lifecycle: {
    created() {
      this.getFavoriteNum();
    }
  },
  methods: {
    //获取点赞数
    getFavoriteNum() {
      let $favoriteNum = document.querySelector('.j-favorite-num');
      axios.get('/get-favorite')
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
  },
  events: {
    click(e) {
      if (!e.target.classList.contains('j-add-favorite')) return;

      let $favoriteNum = document.querySelector('.j-favorite-num');
      if (this.timer) {
        console.info('点击太快了，暂停1s');
        clearInterval(this.timer);
      }

      this.timer = setTimeout(async () => {
        await addFavorite();
        this.timer = null;
      }, 800);

      //添加点赞数
      async function addFavorite() {
        await axios.post('/add-favorite')
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
  }
});
