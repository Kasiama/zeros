module.exports = function getZerosCount(number) {
 var res = 0;
 for (let i=1;i<= number;i++){
 	var temp = i;
 while (temp %5 ===0){
 	temp/=5;
 	res++;
 }
}
return res;
}
