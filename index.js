function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Test cases
console.log(saturdayFun()); 
console.log(saturdayFun("bathe my dog")); 


const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Test cases
console.log(mondayWork()); 
console.log(mondayWork("work from home")); 

//
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
  };
}


const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction()); 
console.log(encouragingPromptFunction("amazing")); 

