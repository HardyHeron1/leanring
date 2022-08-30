class Library{
    constructor(types, incharge){
        this.types = types;
        this.incharge = incharge;
    }

    show(){
        console.log(`Library incharge is ${this.incharge}`)
        this.types.map((p, i) => {
            console.log(`Book ${i+1} is ${p}`)
        });
    }

    BookAvail(val){
        return this.numOfBooks[val]-this.numOfIssued[val]
    }
}

class Section extends Library{
    constructor(types, incharge, numOfBooks, numOfIssued){
        super(types, incharge)
        this.numOfBooks = numOfBooks;
        this.numOfIssued = numOfIssued;
    }
    

    LeftBook(val) {
        return this.numOfBooks[val]-this.numOfIssued[val]
    }

    totalBook(){
        let count = 0;
        for (let values in this.numOfBooks){
            count += this.numOfBooks[values];
        }   
        return count
    }
    
    
}


let section1 = new Section(["Physics", "Maths", "History"], "Arif", {Physics: 14, Maths: 10, History: 5}, {Physics: 5, Maths: 7, History: 2})

// console.log(type1.types)
console.log(section1.LeftBook("Maths"))
console.log(section1.totalBook())
section1.show()
console.log(section1.BookAvail("Physics"))