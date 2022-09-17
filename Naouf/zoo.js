class Zoo{
  constructor(staff, noOfAnimals, address, noOfCages){
    this.staff = staff;
    this.noOfAnimals = noOfAnimals;
    this.address = address;
    this.noOfCages = noOfCages;
    this.animals=[];
    this.cage=[];
    this.food=[];
  }

  getTotalStock(){
    return this.food.reduce((a,b)=>a+b.stockQty);

  }

  getTotalBirds(){
    return this.animals.filter((p)=>{
      p.type == "bird"
    }).length
  }

  getTotalCarnivores(){
    return this.animals.filter((p)=>{
      p.type == "carnivorous"
    }).length
  }

  getTotalHerbivores(){
    return this.animals.filter((p)=>{
      p.type == "herivorous"
    }).length
  }
  addanimal(animal){
    this.animals.push(animal);
  }
  addcages(c){
    this.cage.push(c);
  }
  addfood(f){
    this.food.push(f);
  }
}

class Cage{
  constructor(cageType, incharge, capacity, size){
    this.cageType = cageType;
    this.size = size;
    this.incharge = incharge;
    this.capacity = capacity;
    this.listOfAnimals = [];
  }

  getPdCons(){
    return this.listOfAnimals.reduce((a,b)=>a+b.quantity)
  }

  addAnimals(anim){
    this.listOfAnimals.push(anim);
  }

  
}

class Fooding{
  constructor(type){
    this.type = type;
    this.listOfCages=[];
  }

  getCages(){

  }

  getPdCons(){

  }
}


class NonVeg extends Fooding{
  constructor(name, type, stockQty){
    super(type);
    this.name = name;
    this.stockQty = stockQty;
    
  }
  AlotCages(){
    
  }
}
class Veg extends Fooding{
  constructor(name, type, stockQty){
    super(type);
    this.name = name;
    this.stockQty = stockQty;
    this.listOfCages=[];
  }
  AlotCages(){
    
  }
}
class Grain extends Fooding{
  constructor(name, type, stockQty){
    super(type);
    this.name = name;
    this.stockQty = stockQty;
    this.listOfCages=[];
  }
  AlotCages(){
    
  }
}
class Animal{
  constructor(type,name,cage,CountryofOrgin,id){
    this.type=type;
    this.name=name;
    this.cage=cage;
    this.CountryofOrgin=CountryofOrgin;
    this.id=id;
  }
}
class Birds extends Animal{
  constructor(food,quantity,type,name,cage,CountryofOrgin,id){
    super(type,name,cage,CountryofOrgin,id);
    this.food=food;
    this.quantity=quantity;
  }
}
class Herbivorous extends Animal{
  constructor(food,quantity,type,name,cage,CountryofOrgin,id){
    super(type,name,cage,CountryofOrgin,id);
    this.food=food;
    this.quantity=quantity;
  }
}
class Carnivorous extends Animal{
  constructor(food,quantity,type,name,cage,CountryofOrgin,id){
    super(type,name,cage,CountryofOrgin,id);
    this.food=food;
    this.quantity=quantity;
  }
}
let wheatgrain = new Grain("wheat","grain",17000)
let grass = new Veg("grass","Veg",18000)
let beef = new NonVeg("Beef","NonVeg",20000)

let birdcage = new Cage("Inclosed","Mustafa",4,25)
let Carnivorouscage = new Cage("closed","Ayub",1,1000)
let herbivorouscage = new Cage("open","Ebrahim",6,500)

let Lovebirds =new Birds(wheatgrain,0.1,"bird","Lovebird",birdcage,"India",1)
let Tiger = new Carnivorous(beef,5,"carnivorous","TIger",Carnivorouscage,"African Tiger",2)
let deer = new Herbivorous(grass,10,"herivorous","deer",)

let zoo = new Zoo(10,3,"Padegaon",3);
zoo.addanimal(Tiger);
zoo.addanimal(deer);
zoo.addanimal(Lovebirds);
zoo.addfood(grass);
zoo.addfood(NonVeg);
zoo.addfood(Veg);
zoo.addcages(birdcage);
zoo.addcages(herbivorouscage);
zoo.addcages(Carnivorouscage);