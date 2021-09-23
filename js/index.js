let message = " I am from Iran ";


console.log(message.length);
//16

console.log(message.includes("from"));
//true

console.log(message.includes("fro"));
//true

console.log(message.includes("frec"));
//false

console.log(message.startsWith("i"));
//false   js is casesensitive

console.log(message.endsWith("!"));
//false  

console.log(message.indexOf("am"));
//3

console.log(message.replace("am","are"));
// I are from Iran 
console.log(message) 
// I am from Iran     main string doesnt chang.


console.log(message.trim());
//I are from Iran      deleted space


console.log(message.trimLeft());
//I are from Iran      deleted  leftspace


console.log(message.split(" "));
//(6) ['', 'I', 'am', 'from', 'Iran', '']

console.log(message.split(" ")[3]);
//from

console.log(message.toUpperCase());
// I AM FROM IRAN 