// var light = {
//     name: "light",
//     foo: function () {
//         console.log(this.name);
//     },
//     _age:18,
//     get age(){
//         return this._age;
//     },
//     set age(age){
//         if(age<0){
//             throw new Error("age error");
//         }else{
//             this._age = age;
//         }
//     },
//     0:"li",
//     school:{
//         name:"NO.1",
//         num:10000
//     }
// };

// var o = {
//     high:170
// }

// // Object.defineProperty(o,"name",{
// //     value:"light",
// //     // writable:false
// // })

// Object.defineProperties(o,{
//     name:{
//         value:"light",
//         writable:false,
//         enumerable:true
//     },
//     age:{
//         value:true,
//         // enumerable:true
//         configurable:false
//     }
// });
// for(x in o){
//     console.log(x);
//     console.log(o[x]);
// }

// function Person(){
//     this.name = "light",
//     this.age = 21
// }

// Person.prototype = {};
// var p1 = new Person();

// function p() {
//     this.name = "light";
//   }

//   var o = {};
//   p.call(o);

// function Person(pname, page) {
//     this.name = pname;
//     this.age = page;
// }

// function New(Person) {
//     return function () {
//         var o = {
//             __proto__: Person.prototype
//         };
//         Person.apply(o, arguments);
//         return o;
//     }
// }

// var p1 = New(Person)("light",22);

// function Person(pname,page){
//     this.name = pname;
//     this.age = page;
//     var sex = "male";
//     function pm() { 
//         console.log(this.name);
//      }
//      this.test = function () {  
//         console.log("public method");
//         pm.apply(this);
//      }
// } 

// Person.user = "liang";

// var p1 = new Person("light",21);

// function P() {
//     this.name = "abc";
// }
// function C() {
//     P.apply(this);
//     this.my = "me";
// }

// var p = {name:"light"};

// function myCreate(p){
//     var ins;
//     function F() {  };
//     F.prototype = p;
//     F.prototype.constructor = F;
//     ins = new F();
//     return ins;
// }

// function P() {
//     this.run = function () { 
//         console.log("P");
//      }
// }
// function C() {
//     P.apply(this);
//     var pRun = this.run;
//     this.run = function () { 
//         console.log("C");
//         pRun();
//      }
// }

// var c1 = new C();

// c1.run();

// function P() {  }
// P.prototype.run = function () { 
//     console.log("P");
//  }
// function C() {  }

// C.prototype = Object.create(P.prototype);
// C.prototype.constructor = C;
// C.super = P.prototype;
// C.prototype.run = function () { 
//     console.log("C");
//     C.super.run();
//  }
// var c = new C();
// c.run();

// jQuery 构架
(function () {

    // 冲突处理
    var _$ = window.$;
    var _jquery = window.jQuery;
    // 暴露jquery
    var jQuery = window.jQuery = window.$ = function (selector) {
        return new jQuery.fn.init(selector);
    }
    // 处理原型对象
    jQuery.fn = jQuery.prototype = {
        constructor:jQuery,
        init:function (selector) { 
            var elements = document.getElementsByTagName(selector);
            Array.prototype.push.apply(this,elements)
            return this;
         },
         jQuery:"1.1.1",
         length:0,
         size:function () { 
             return this.length
          }
    };
    jQuery.fn.init.prototype = jQuery.fn;
    // 实现继承
    jQuery.extend = jQuery.fn.extend = function () { 
        var o = arguments[0];
        for(var p in o){
            this[p] = o[p];
        }
     };

    jQuery.extend({
        trim:function (text) { 
            return (text||"").replace(/^\s+|\s+$/g,"");
         },
         noconflict:function () { 
             window.$ = _$;
             window.jQuery = _jquery;
          }
    });

    jQuery.fn.extend({
        get:function(index){
            return this[index];
        }
    });
})();
