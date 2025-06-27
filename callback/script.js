console.log('hi')

// Steps to make a sandwich

function fnc1(fnc2) {
    let sandwich = [];
    sandwich.push("bread");
    console.log("Sandwich so far", sandwich);
    fnc2(sandwich, fnc3);
}

function fnc2(sandwich, fnc3) {
    sandwich.push("veggies");
    console.log("sandwich so far at fnc2", sandwich);
    fnc3(sandwich, true, fnc4);
}

function fnc3(sandwich, cheese, fnc4) {
    if(cheese) {
        sandwich.push("cheese pushed");
    }
    console.log('sandwich so far at fnc3', sandwich);
    fnc4(sandwich, true, fnc5);
}

function fnc4(sandwich, toast, fnc5 ) {
    if(toast) {
        sandwich.push("toasted")
    } else {
        sandwich.push("non toasted")
    }
    console.log("sandwich so far at fnc4", sandwich);
    fnc5(sandwich, "salt and pepper")
}

function fnc5 (sandwich, toppings) {
    if(toppings) {
        sandwich.push(toppings);
    }
    console.log("sandwich so far at fnc5", sandwich);
    serve(sandwich);
}

function serve(sandwich) {
    console.log("SANDWICH SERVED !!!", sandwich);
}

fnc1(fnc2);