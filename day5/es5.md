> ES5
- ES5中只有函数作用域
1. ```javascript
      (function () {
        console.info(a);
        var a = 1; //var a;
        function a() {

        }
      })();

      ======> undefined

      (function () {
        function a() {

        }

        //var a
        console.info(a);
        a = 1;
      })();
    ```
2. ```javascript
      (function () {
        var a = 1;
        console.info(a);

        function a() {
          }
        }
      )();

      ====> 1

      (function () {
        function a() {

        }

        var a;
        a = 1;
        console.info(a);

      })();
    ```
3. ```javascript
    function a() {
      if (false) {
        var a = 1;
      }
      console.info(a)
    }

    a();

    //=====> a is not defined

    function a() {
      var a;
      if (false) {
        a = 1;
      }
      console.info(a)
    }

    a();
    console.info(a);
    ```
4. ```javascript  es6 => es5
    if (true) {
      let a = 1;
    }
    console.info(a);

    ====> a is not defined

    if (true) {
      try {
        throw 1;
      } catch (e) {
        //e
      }
    }
    console.info(a)
    ```
5. ```javascript
    var a = {a: 1};
    with (a) {
      b = 1; //hoist to global
    }
    console.info(a.b, b);

    ====> undefined,1

    var a = {a: 1};
    var b;
    with (a) {
      b = 1;
    }
    console.info(a.b, b);
    ```

6. ```JavaScript 闭包回收
    function a() {
      var b = 1;
      return function () {
        eval(''); // 不会被回收
        // with(){};  不会被回收
        // try{}catch(){} 不会被回收
        window.eval('') //会被回收
      }
    }
    ```

7. ```JavaScript
    this.a=30;
    var b={
      a:30,
      init:()=>{
        console.info(this)
      }
    }

    ====> window

    this.a = 30;
    var b = {
      a: 30,
      init: (function () {
        console.info(this)
      }).bind(this)
    }
    ```

8. 'abc' => ['a','b','c']
    ```
    //Array.from('abc')
    //[].slice.call('abc',0)
    //[...'abc']
    ```


