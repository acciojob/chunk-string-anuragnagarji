function stringChop(str, size) {
  let arr=[],subarr=[];
	if(str.length<0){
		return "";
	}
	if(size==undefined){
		return "";
	}
	for(let i=0;i<str.length;i++){
		if(subarr.length<size){
			subarr.push(str[i]);
		}
		else{
			arr.push(subarr);
			subarr=[];
			subarr.push(str[i]);
		}
	}
if(subarr.length>0){
	arr.push(subarr);
}
return arr;
}


// Do not change the code below

//const str = prompt("Enter String.");


//const size = prompt("Enter Chunk Size.");

alert(stringChop(str,Number(size)));
