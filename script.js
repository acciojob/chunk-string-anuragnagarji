function stringChop(str, size) {
  if (str==""&&str.includes(" ")) {
    return [];
  }
	
  let arr = [];
  let substring = "";
 
  for (let i = 0; i < str.length; i++) {
    substring += str[i];
    
    if (substring.length === size || i === str.length - 1) {
      arr.push(substring);
      substring = "";
    }
  }
  return arr;
}

// Do not change the code below

const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));