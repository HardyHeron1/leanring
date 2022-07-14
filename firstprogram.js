// calculator

function calculator(num1,num2,oper){
  if(oper=="+"){
  console.log('The sum of 2 numbers is');
  var res = num1+num2;
  console.log(res);
}
else if(oper=="-"){
  console.log('The difference of 2 number is');
  var res = num1-num2;
  console.log(res);
}
else if(oper=="*"){
  console.log('The multiplicagtion of 2 number is');
  var res = num1*num2
  console.log(res);
}
else if(oper=="/"){
  console.log('The division of 2 number is');
  var res = num1/num2;
  console.log(res);  
}
}
calculator(16,4,"-");