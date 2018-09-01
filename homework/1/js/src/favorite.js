class PraiseButton {
  constructor(initFavorite = 0) {
    this.favorite = initFavorite;
  }

  addFavorite() {
    this.favorite++;
  }

  getFavorite() {
    return this.favorite;
  }
}

class Thumb extends PraiseButton {
  constructor(initFavorite = 0) {
    super(initFavorite);
    this.finger = 'Thumb';
  }

  getFingerType() {
    return this.finger;
  }
}

