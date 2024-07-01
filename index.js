// 1. Function Declaration with Default Argument
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Testing saturdayFun
  console.log(saturdayFun()); 
  console.log(saturdayFun("binge-watch movies")); 
  
  // Function Expression with Default Argument
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Testing mondayWork
  console.log(mondayWork()); //=> This Monday, I will go to the office.
  console.log(mondayWork("work from home")); //=> This Monday, I will work from home.
  
  // Immediately-Invoked Function Expression IIFE
  (function() {
    console.log("This IIFE runs immediately!");
  })(); //=> This IIFE runs immediately!
  
  // Function Returning a Function (Closure) and Scope Chain
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Testing wrap Adjective
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); 
  console.log(wrapAdjective("%")("a great developer")); 
  