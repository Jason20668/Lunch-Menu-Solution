const vue_app = Vue.createApp({
      created() {
            fetch('json.json').then(response => response.json()).then(json => {
                  this.json = json
            })
      }
})

vue_app.mount("#vue_app")

/*
Student Lunch = 4.25;
Theme Lunch = 5.25;
Reduced Lunch = 0.00;
Pizza Slice = 3.25;
Uncrustable = 3.50;
Salad, Featured Lunch, and Deli Sandwich = 4.50;
Extra Dressing, Cookie, Milk, and Juice = 1.00;
Fruit and Vegetables = 1.50;
Fries, Tots, and Rings = 2.65;
Fruit Snacks, Chips, and Rice Krispies = 1.80;
Water = 1.75;
Vitaminwater and Kickstart = 2.85;
Soda = 2.60;
*/
let total = 0;

function studentLunch() {
      total += 4.25;
}

function Salad() {
      total += 4.50;
}

function themeLunch() {
      total += 5.25;
}

function reducedLunch() {
      total += 0;
}

function pizzaSlice() {
      total += 3.25;
}

function Uncrustable() {
      total += 3.50;
}

function Dressing() {
      total += 1.00;
}

function Fruit() {
      total += 2.65;
}

function Fries() {
      total += 2.65;
}

function Chips() {
      total += 1.80;
}

function Water() {
      total += 1.75;
}

function Kickstart() {
      total += 2.85;
}

function Soda() {
      total += 2.60;
}