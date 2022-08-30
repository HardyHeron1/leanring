class Library {
    constructor(NumberofBooks, NumberofVolumes, BookIssued, InchargeName){
        this.NumberofBooks = NumberofBooks;
        this.NumberofVolumes = NumberofVolumes;
        this.BookIssued = BookIssued;
        this.InchargeName = InchargeName;

        this.BooksLeft = () => {
            return this.NumberofBooks - this.BookIssued;
        }
    
    }
}

class TypeOfbook extends Library{
    constructor(NumberofBooks, NumberofVolumes, BookIssued, InchargeName, TypeOfbook){
        super(NumberofBooks, NumberofVolumes, BookIssued, InchargeName);
        this.TypeOfbook = TypeOfbook;
    }
}

Math = new TypeOfbook(55,4,25,"Nadeem", "Math");
Science = new TypeOfbook(45,2,15,"Naouf", "Science");
History = new TypeOfbook(10,5,3,"Mustafa", "Histroy");
Geography = new TypeOfbook(15,2,12,"Arif", "Geography");

console.log(History.BooksLeft());