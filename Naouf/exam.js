//Question 1
arr= [1,3,0,5,2]
let c=0;
while(true){
arr= arr.filter((p)=>{
    return p!=0
})
console.log(arr)
if(arr.length==0)
break;
let min= Math.min(...arr)
console.log(min)
arr = arr.map((entry)=>{
    return entry-min
} )
console.log(arr)
c++;
}
console.log(c);

// // Question 2
// console.log("the result is ${1 + 2}");
// // The result will be error because one bracket is extra if removed the bracket the result would be "the result is ${1 + 2}" since no back inverted comma is added so no operation will be performed and hence result would be displayed same.

// // Question 3
// let isGreater = 4 > 1;
 
// console.log( isGreater );
// // The result would be true since the value of the variable isGreater is a Boolean Operation so the result would be true or false

// // Question 4
// console.log(`${2}`/2);
// // The result would be 1 as the number put in the back inverted commas with $ sign with curly braces means it is an integer 2 and then it will perform operation of division with another integer 2 and the result would be 1

// // Question 5
// console.log('6'/'2');
// // The result would be error as it is numbers showed in string and it cannot performed the operation of division with string

// // Question 6
// console.log(2 + 2 + '1' );
// // The result would be 41 as it will perform the addition operation for first 2 numbers since it is an integer and for the third it is string format so it will just joined it to reult of first two hence the answer would be 41

// // Question 7
// console.log('1' + 2 + 2);
// // The result would be 122 as the first element is a string it will just joint all other elements to the string and here the operation of addition will not be performed even though the number are integers it will just get joined to the string which will make the result as 122

// // Question 8
// // var user;
 
// // console.log(user ?? "Anonymous");
// // The result would be Anonymous since the no values are defined in the user and in console operation there is ?? which will see if there is value defined in the user or not if not then it will display the result Anonymous instead of undefined 

// //Question 9
// // let user = "John";
 
// // alert(user ?? "Anonymous");
// //The result would be John since the now the value John are defined in the user hence the result would be displayed as John.

// //Question 10

// function RoomCreator(RoomType, length, breadth, numDoor, numWindow){
// this.RoomType =  RoomType;
// this.length = length;
// this.breadth= breadth;
// this.numDoor= numDoor;
// this.numWindow = numWindow;


// this.getArea = ()=>{
//     return (this.length*this.breadth);
// }
// this.getEstimationPrice = () =>{
//     return ((this.getArea()*978.541)+(this.numDoor*9870.987)+(this.numWindow*5765.678));

// }
// }
// let Room = new RoomCreator("Hall",10,10,2,2)
// console.log(Room.getArea());
// console.log(Room.getEstimationPrice());

// // //Question 11
// let House = [
// new RoomCreator("Hall",10,10,2,2),
// new RoomCreator("Bedroom1",11,12,2,1),
// new RoomCreator("Bedroom2",9,10,1,2),
// new RoomCreator("Kitchen",10,8,2,2)]

// console.log(House);
// //Question 12
// let totalArea=0;
// House.forEach((p)=>{
//     totalArea +=p.getArea();
// }
// )
// console.log(totalArea);
// //Question 13
// let highestArea = 0;
// let room = ""
// House.forEach((p)=>{
//     if (highestArea< p.getArea()){
//         highestArea = p.getArea()
//         room = p.RoomType;
//     }
// })
// console.log(room);

// let SmallestArea = House[0].getArea();
// let room1 = ""
// House.forEach((p)=>{
//     if (p.getArea()<SmallestArea){
//         SmallestArea = p.getArea()
//         room1 = p.RoomType;
//     }
// })
// console.log(room1);
// //Question 14
// let TotalCost=0;
// House.forEach((p)=>{
//     TotalCost+=p.getEstimationPrice()
// })
// console.log(TotalCost.toFixed(2));
// //Question 15
// let TotalCost1=0;
// House.forEach((p)=>{
//     p.length = p.length + 2
//     p.breadth= p.breadth +2
//     TotalCost1+=p.getEstimationPrice()
// })
// console.log(TotalCost1.toFixed(2));
// Question 16
//     let p="abcabc"
//     p=p.toLowerCase();
//     let q=[];
//     for (let a of p)
//     if (q.includes(a)){
//         console.log(a);
//         break;
//     }
//     else{
//         q.push(a)
//     }


// //Question 17
// nums1 = [1,2,3]; 
// nums2 = [2,4,6];

// let arr =[[],[]];

// for (let ch of nums2)
//   if(!nums1.includes(ch)){
//     arr[0].push(ch)
//   }

//  for (let ch of nums1)
//  if(!nums2.includes(ch)){
//    arr[1].push(ch)
//  }
//  console.log(arr)
// // Question 18
// const copy = {
// 	Page1: {
// 	Text: "This page has number 1.",
// 	charLength: 19
// },
// Page2: {
// 	Text: "This page has number 2.",
// 	charLength: 19
// },
// Page3: {
// 	Text: "This page has number 3.",
// 	charLength: 19
// },
// Page4: {
// 	Text: "This page has number 4.",
// 	charLength: 19
// },
// }
// copy.Page1.Text = copy.Page1.Text.replace("1","one");
// copy.Page2.Text = copy.Page2.Text.replace("2","two");
// copy.Page3.Text = copy.Page3.Text.replace("3","three");
// copy.Page4.Text = copy.Page4.Text.replace("4","four");

// // //Question 19

// arr = Object.entries(copy).map(entry => {
//     entry[1].charLength=entry[1].Text.length
//     return entry;
// })

// // console.log(copy);
// //Question 20
// let total=0
// ap=Object.values(copy);
// ap.forEach((p)=>{
//     total+=p.charLength
// })
// console.log(total);

