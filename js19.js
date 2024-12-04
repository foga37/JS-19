//1. Через функцію конструктор створити обєкт Car з полями:name, model, old, price, wheels Вивести обєкт в консоль.
console.log('1. Через функцію конструктор створити обєкт Car з полями:name, model, old, price, wheels Вивести обєкт в консоль.');
function Car(name = 'NISSAN', model = 'Rogue', old = 2020, price = 22000, wheels = 19) {
    this.name = name
    this.model = model
    this.old = old
    this.price = price
    this.wheels = wheels
}
console.log(new Car());
const b1 = new Car;
//1. Через прототайп створити власні методи масивів: some, every, splice
console.log('2. Через прототайп створити власні методи масивів: some, every, splice');
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
// Some
Array.prototype.mySome = function(cb) {
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return true;
        } else {
            return false
        }
    }
}
let som = arr.mySome(el => el < 2);
console.log('Some', som);
// Every
Array.prototype.myEvery = function(cb) {
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return true;
        } else {
            return false
        }
    }
}
let ever = arr.myEvery(el => el > 2);
console.log('Every', ever);
// Splice  
Array.prototype.mySplice = function(start, deleteCount, ...items) {
    let deletedItems = [];
    if (start < 0) {
        start = this.length + start;
    }
    for (let i = 0; i < deleteCount; i++) {
        if (start + i < this.length) {
            deletedItems.push(this[start + i]);
            this.splice(start, 1); 
        }
    }
    if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            this.splice(start + i, 0, items[i]);
        }
    }
    return deletedItems;
};
console.log(arr);
let deleted = arr.mySplice(2, 2, 'a', 'b');
console.log('splice', arr); 
console.log('splice', deleted); 
//3. Через функцію конструктор створити об'єкт dog з полями: name, model, year, cost Вивести об'єкт в консоль.
console.log('3. Через функцію конструктор створити обєкт dog з полями:name, model, year, cost Вивести обєкт в консоль.');
function Dog(name = 'Chappi', model = 'York', year = 5, cost = 500) {
    this.name = name
    this.model = model 
    this.year = year 
    this.cost = cost 
}
console.log(new Dog());
const b2 = new Dog;
//4. Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля, та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
console.log('4. Через функцію конструктор створити обєкт Parent, створити мінімум 3 поля,та додати через прототайп поведінку для обєкту (мінімум 2 методи).');
function Parent(name = 'Angel', age = 50, work = 'couch') {
    this.name = name
    this.age = age 
    this.work = work
}
Parent.prototype.run = function() {
    console.log('she is running');
}
Parent.prototype.sleep = function() {
    console.log('she is slepping');
}
const a1 = new Parent;
console.log(a1);
a1.run();
a1.sleep();
// 5. Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent та додати власну поведінку (мінімум 2 методи).
console.log('5. Створити обєкт Son, через прототип унаслідувати поведінку від обєкту Parent та додати власну поведінку (мінімум 2 методи).');
function Son(name = '', age = '', work = '') {
    this.name = name 
    this.age = age 
    this.work = work 
}
Son.prototype = {...Parent.prototype}
Son.prototype.work1 = function() {
    console.log('i am work');
}
Son.prototype.listen = function() {
    console.log('i am listening');
}
console.log(new Son('Yaroslav', 30, 'student'));
const a2 = new Son;
a2.listen();
a2.work1();
//6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job створити 3 інстанси класу People і вивести їхні поля в консоль.
console.log('6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job створити 3 інстанси класу People і вивести їхні поля в консоль.');
class People {
    name
    age
    isMarried
    isChilds
    job

    constructor(name, age, isMarried, isChilds, job) {
        this.name = name 
        this.age = age 
        this.isMarried = isMarried
        this.isChilds = isChilds 
        this.job = job
    }
}
const p1 = new People('Yaroslav', 30, true, false, 'Student');
console.log(p1);
const p2 = new People("Victor", 55, true, true, "Driver");
console.log(p2);
const p3 = new People("Irina", 28, true, false, "Teacher");
console.log(p3);
const p4 = new People("Vadiv", 31, true, false, "Sportsmen");
console.log(p4);
//7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height Додатково створити методи: changeName, addAge, changeSpeed, run Вивести поля класу в консоль та використати методи.
console.log('7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height Додатково створити методи: changeName, addAge, changeSpeed, run Вивести поля класу в консоль та використати методи.');
class Tiger {
    name
    kind
    age
    speed
    wight
    height

    constructor(name, kind, age, speed, wight, height) {
        this.name = name 
        this.kind = kind 
        this.age = age 
        this.speed = speed 
        this.wight = wight 
        this.height = height
    }
    
    changeName(newName) {
        this.name = newName;
        console.log('changename his name its Koll');
    }
    addAge(years) {
        this.age = years;
        console.log('add age ');
    }
    changeSpeed(speeds) {
        this.speed = speeds;
        console.log('speed = 120');
    }
    run() {
        console.log('his runs at speed 120km/h');
    }

}
const t1 = new Tiger('Rik', true, 'junior', 100, 300, 3)
console.log(t1);
t1.changeName('Koll');
t1.addAge(3);
t1.changeSpeed(120);
t1.run(120)
console.log(t1);
// 8. Перевірити всі створені об'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора), вивести результат в консоль.
console.log('8. Перевірити всі створені обєкти на те чи вони походять від кожного класу (чи ф-ції конструктора), вивести результат в консоль.');
console.log(b1 instanceof Car);
console.log(b2 instanceof Dog);
console.log(a1 instanceof Parent);
console.log(a2 instanceof Son);
console.log(p1 instanceof People);
console.log(p2 instanceof People);
console.log(p3 instanceof People);
console.log(p4 instanceof People);
console.log(t1 instanceof Tiger);
console.log('створення масиву', som instanceof Car);
console.log('створення масиву', ever instanceof Dog);
console.log('створення масиву', arr instanceof People);
