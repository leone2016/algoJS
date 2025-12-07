function takeShower(){
    return "Showering!";
}
function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`;
}
function cookFood(){
    let items = ["Cereal", "Eggs", "Bacon", "Fruit"];
    return items[Math.floor(Math.random() * items.length)];
}
function wakeUp(){
    takeShower();
    eatBreakfast();
    return "Ok ready to go to work!";
}
console.log(wakeUp());