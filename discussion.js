class Button {
  constructor(value) {
    this.value = value;
  }

  click (){
    console.log(this.value);
  }
}

class touch extends Button {
  constructor(val, value) {
    super(val);
    this.value = value;
  }
}

class to extends touch{
  constructor(val, value) {
    super(val, value);
    this.value = value+val;
  }
}
t = new to('button', 'touch');
t.click();

// function click1() {
//     console.log(this.value);
//   }

// let button = new Button("hello");
// function caller(b) {
//   click1.call(b);
// }

// setTimeout(caller, 1000, button); // undefined