//  arrow function - shorter way of creating a function expression .
      // - don't have their own 'this' ,
      // -don't have prototypes, cannot used for constructor and not be used as obejct method

      // normal function
      function func(a, b, c) {} //function declaration
      var func = function (a, b, c) {
        return a+b*c;
      } //function expression
      console.log(func(5,6,2));