const name="shubham"
const gameName=new String('shubhamvaity')//this will allow you to acess the various function/ methods like converting to the upper case using method .touppercase()
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))
//console.log(name.indexof('s'))//this will give you error because the variable declaration was not same as gameName
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// converting the string to the substrings
const newString=gameName.substring(0,4) //give the string from index 0 to 3
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="    shubhamm     "
console.log(newStringOne.trim());//remove the spaces from the string
