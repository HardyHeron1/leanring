obj = {
  name: 'Anas',
  2: 'Faiza',
  ar: [1,2,3,4,5],
  obj1: {name: 'Arif', daugher: 'Afia', 34: [12,3,4,5,6]}
};
{2: 'Faiza', name: 'Anas', ar: Array(5), obj1: {…}}2: "Faiza"ar: (5) [1, 2, 3, 4, 5]0: 11: 22: 33: 44: 5length: 5[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Objectname: "Anas"obj1: {34: Array(5), name: 'Arif', daugher: 'Afia'}34: (5) [12, 3, 4, 5, 6]0: 121: 32: 43: 54: 6length: 5[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Objectdaugher: "Afia"name: "Arif"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
obj['obj1']
{34: Array(5), name: 'Arif', daugher: 'Afia'}34: (5) [12, 3, 4, 5, 6]daugher: "Afia"name: "Arif"[[Prototype]]: Object
obj['obj1']['daughter']
undefined
obj['obj1']['daugher']
'Afia'
obj['obj1'][34]
(5) [12, 3, 4, 5, 6]0: 121: 32: 43: 54: 6length: 5[[Prototype]]: Array(0)
obj['obj1'][34][3]
5
obj['obj1']['name']
'Arif'
obj['obj1']['name'].charAt(2)
'i'
Object.keys(obj);
(4) ['2', 'name', 'ar', 'obj1']
Object.keys(obj['obj1']']);
VM986:1 Uncaught SyntaxError: missing ) after argument list
Object.keys(obj['obj1']);
(3) ['34', 'name', 'daugher']
Object.values(obj)
(4) ['Faiza', 'Anas', Array(5), {…}]
Object.length
1
Object.length(obj)