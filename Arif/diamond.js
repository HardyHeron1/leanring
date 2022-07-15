const pattern = () => {
    for( let i =1; i <= 5; i++) {
      let str = "";
      for (let j=i; j<5; j++ ) {
        str = str + " ";
      }
      for (let j = 1; j <= i; j++) {
        str = str + "* ";
      }
      console.log(str);
    }
    for(let i=1;i<5;i++){
      let str =''
      for (let j=1;j<=i;j++){
        str = str + ' ';
      }
      for (let j=4;j>=i;j--){
        str = str + "* ";
      }
      console.log(str);
    }
  };
  pattern(); 