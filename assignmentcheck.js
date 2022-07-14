//compare
function compare(num1,num2,opera){
    if (opera == '>'||opera == '='){
        if (num1 >= num2)
         {
        var res= num1**num2;
        console.log(res)
        }  
         else {
        var res=num2%num1
        console.log(res)
        }
    }
    else if(opera == '<')
     {
       if (num1<num2){
        var res= num1**num2;
        console.log(res);
       }
       else{
        var res=num2%num1;
        console.log(res);
       }
       }
  }
compare(6,7,'=');
compare(3, 5, '<');

str = 'Nadeem' + 1;
console.log(`Please write this code ${1 + str}`);