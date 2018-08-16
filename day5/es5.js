this.a=30;
var b={
  a:30,
  init:()=>{
    console.info(this)
  }
}

====>
this.a = 30;
var b = {
  a: 30,
  init: (function () {
    console.info(this) //window
  }).bind(this)
}