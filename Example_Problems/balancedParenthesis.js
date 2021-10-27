/*
Use a stack to check if a string has balanced usage of parentheses
*/


/*
Inputs: string containing parenthesis and curly braces
Outputs: Boolean to indicate whether all prenthesis and curly braces are balanced (considering presence of quotes as well)

Pseudocode:
1. Create an object where keys are openers and values are closers e.g. { and } as a key value pair.
2. Create an instance of a stack.
3. Iterate through the string. Whenever an opener is detected, push its closer onto the stack. When
   a closer is detected, check if it is the corresponding closer to the top of the stack.
   If it is, pop off the stack. If it isn't, there is an imbalance and return false.
4. Once the entire string has been iterated through, if the stack is empty return true, else return false.
*/
import Stack from '../Data_Structures/stack.js';

let balancedParenthesis = (stringToCheck) => {
  let openClose = {
    "(": ")",
    "{": "}"
  };

  let stack = new Stack();
  let inAString = false;

  for (let i = 0; i < stringToCheck.length; i++) {
    if (stringToCheck[i] === "\"") {
      inAString = !inAString;
    }

    if (!inAString) {
      if (openClose[stringToCheck[i]] !== undefined) {
        //found an opener
        stack.push(openClose[stringToCheck[i]]);
      } else if (stringToCheck[i] === stack.stack[stack.stack.length - 1]) {
        stack.pop();
      }
    }
  }

  if (stack.stack.length === 0) {
    return true;
  } else {
    return false;
  }

}