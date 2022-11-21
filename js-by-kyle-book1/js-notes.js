// js is interpreted language
// The JavaScript engine actually compiles the pro‐
// gram on the fly and then immediately runs the compiled code.

// to empty tab  
// about:blank

// cosole.log

// here console is an object reference

// converting value to string is called coercion.

//Js has typed values not typed variables.

//  string
//  number
//  boolean
//  null and undefined
//  object
//  symbol (new to ES6)

// typeof a is not asking for
// the “type of a,” but rather for the “type of the value currently in a.”
{
    var obj = {
        a: "hello world",
        b: 42,
        c: true
    };


    //below is how we can access properties of object
    console.log(obj.a);
    console.log(obj.b);
    console.log(obj.c);

    console.log(obj["a"]);
    console.log(obj["b"]);
    console.log(obj["c"]);

    // in above access.
    // first one is easier for access for simple properties.
    // second one would be useful in case the property has special value.
    //eg:
    obj["hey!"];
    // note the excalamation.

    // bracket notation can also be used to acces the property dyanmically using variable.
    // like below.

    var x="Hello!";
    obj[x];

    // arrays:

    var arr= ["hello",12, true];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);

    // functions:

    function foo(){
        return 42;
    }

    foo.bar="hello"; // function object property 

    // functions are subtype of objects. 

    // function object property are used in limited cases.

    // built in type methods:

    // javascript auto wraps to object form for a primitive like

    // string can be wrapped by String and then we can use the methods offered by boxed version.

    var a = "42";
    var b = Number( a );
    // a; // "42"
    // b; // 42--the number!
    // And here’s an example of implicit coercio

    // here’s an example of implicit coercion:
    var a = "42";
    var b = a * 1; // "42" implicitly coerced to 42 here
    a; // "42"
    b; // 42--the number!


    // Truthy and falsy :

    // non boolean value to boolean coercion

    // false for below
    
    // "" (empty string)
    // 0, -0, NaN (invalid number)
    // null, undefined
    // false

    // any value which is not in falsy list is truthy.

    // Equality:

    // == === != !==

    // not equal is not similar to inequality.

    // ==  equal to checks for value equality with coercion allowed.
    // === equal to checks for both value and type equality without allowing coercion.

    var a = "42";
    var b = 42;
    a == b; // true
    a === b; // false

    // Inequality

    // <, >, <=, and >= 

    // inequality can be used for alphabetical rules.

    var a = 41;
    var b = "42";
    var c = "43";
    a < b; // true. Here numeric comparision occurs with help of coercion.
    b < c; // true

    // if value cannot be coerced than it will return false for comparision.

    var a = 42;
    var b = "foo";
    a < b; // false
    a > b; // false
    a == b; // false

    //b value is being coerced to the “invalid number value” NaN in the <
    // and > comparisons, and the specification says that NaN is neither
    // greater than nor less than any other value.

    // Hoisting:

    // declaration are taken to the top of scope.

    // if we try to use variable where it is not available, then we will get a ReferenceError.

    // using let will restrict the variable to that scope only.

    // function as variable

    var foo = function(){
        console.log("what the actual f ?");
    }

    foo();

    var x = function bar(){
        // ..
    };
       
    // named functions are preferred over anonymous

    // Immediately invoked functions IIFE's
    
    (function IIFE(){
        console.log( "Hello!" );
    })()

    //Closure:

    function makeAdder(x) {
        // parameter `x` is an inner variable
        // inner function `add()` uses `x`, so
        // it has a "closure" over it
        function add(y) {
        return y + x;
        };
        return add;
    
    }

    var plusTen = makeAdder(10);

    console.log(plusTen(3));
    console.log(plusTen(5));

    // Module:

    // to hide from outside world we use module pattern

    function user(){
        var username, password;

        function doLogin(user, pw){
            username=user;
            password=pw;
        }

        var publicApi = {
            login: doLogin
        }

        return publicApi;
    }

    var fred= user(); // here it is function and calling new before function would not make sense and waste resource.
    fred.login("user","pass");

    // This identifier:

    // this is not similar to oops this.
    // this doesn't point to the function but it depend upon the object it was called from or how it is called.

    function foo() {
        console.log( this.bar );
       }
       var bar = "global";
       var obj1 = {
        bar: "obj1",
        foo: foo
       };
       var obj2 = {
        bar: "obj2"
       };
       // --------
       foo(); // "global"
       obj1.foo(); // "obj1"
       foo.call( obj2 ); // "obj2"
       new foo(); // undefined

    // prototypes
    
    var foo = {
        a: 42
    }
    
    var bar = Object.create(foo);
    bar.b="hello world";
    bar.b; // 42 will be printed
    foo.a=50;
    bar.a; // 50 will be printed

    // while doing object ,create the bar object gets link to foo object.

    // But a more natural way of applying prototypes is a pattern called
    // “behavior delegation,”

    // there are 2 ways we can use newer feature via polyfilling or transpiling.

    // Polyfilling : 
    // to take a new feature of js and replicate behaviour with older code so that they can run on older browser.

    // NaN is not equal to itself.

    // Tanspiling:

    // new syntax cannot be polyfilled in older js engine. because it would be invalid or unrecognizable.

    // it is process in which newer code is transformed into old code equivalent and then compiled.

    // Non javascript

    // most common non js , document dom object.

    // document object is not a js , but rather a special object called as host object.
    // dom and its behaviour are implemented in c/c++

    // Everyone’s favorite alert(..) pops up a message box in the user’s
    // browser window. alert(..) is provided to your JS program by the
    // browser, not by the JS engine itself. The call you make sends the
    // message to the browser internals and it handles drawing and dis‐
    // playing the message box.
    // The same goes with console.log(..); your browser provides such
    // mechanisms and hooks them up to the developer tools

    
}

