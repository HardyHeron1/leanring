const data= [
    {
      fact: "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
      length: 114
    },
    {
      fact: "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
      length: 97
    },
    {
      fact: "The technical term for a cat’s hairball is a “bezoar.”",
      length: 54
    },
    {
      fact: "A group of cats is called a “clowder.”",
      length: 38
    },
    {
      fact: "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
      length: 142
    },
    {
      fact: "Cats make about 100 different sounds. Dogs make only about 10.",
      length: 62
    },
    {
      fact: "Every year, nearly four million cats are eaten in Asia.",
      length: 55
    },
    {
      fact: "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
      length: 100
    },
    {
      fact: "Approximately 24 cat skins can make a coat.",
      length: 43
    },
    {
      fact: "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
      length: 278
    },
  ]
  const arr=[];
  for (i=0;i<data.length;i++){
  arr.push( data[i].fact);
  };
  console.log(arr);

  let a= 0;
  for (i=0;i<data.length;i++){
      a= a + data[i].fact.length;
  }
  console.log(a);
  const arr1=[];
  for (i=0;i<arr.length;i++){
        if (arr[i].indexOf("down")!==-1){
          arr1.push(arr[i]);
        }
  }
  console.log(arr1);