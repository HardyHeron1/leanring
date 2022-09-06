class Library {
    constructor(NumberOfBooks,BooksIssued,TypeOfbook,Incharge){
        this.BooksIssued=BooksIssued;
        this.NumberOfBooks=NumberOfBooks;
        this.TypeOfbook=TypeOfbook;
        this.Incharge=Incharge;

        this.getBooksleft=()=>{
            return (this.NumberOfBooks - this.BooksIssued);
        }
    }
}
class Section extends Library{
    constructor(NumberOfBooks,BooksIssued,TypeOfbook,Incharge,Section){
        super(NumberOfBooks,BooksIssued,TypeOfbook,Incharge);
        this.Section=Section;
    }
}
let history = new Section (65,6,["volume1","Volume2","Volume3",4],"Swati","history");
let geography = new Section (56,4,[1,2,3,4],"Swati","geography");
let Maths = new Section (85,16,[1,2,3,4],"Swati","Maths");
let Science = new Section (71,17,[3,4],"Swati","Science");

console.log(history,geography,Maths,Science);
console.log(Maths.getBooksleft());