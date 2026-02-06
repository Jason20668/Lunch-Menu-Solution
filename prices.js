
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

// Price Calculator
(function(){
  const format = v => '$' + v.toFixed(2);
  const menuItems = document.querySelectorAll('.menu-item');
  
  function updateTotal(){
    let total = 0;
    menuItems.forEach(item => {
      const price = parseFloat(item.dataset.price) || 0;
      const qty = parseInt(item.querySelector('.qty').textContent, 10) || 0;
      total += price * qty;
    });
    document.getElementById('totalPrice').textContent = format(total);
  }

  document.getElementById('menuList').addEventListener('click', function(e){
    if(e.target.classList.contains('btn-add') || e.target.classList.contains('btn-remove')){
      const item = e.target.closest('.menu-item');
      const qtyEl = item.querySelector('.qty');
      let qty = parseInt(qtyEl.textContent, 10) || 0;
      if(e.target.classList.contains('btn-add')) qty++;
      if(e.target.classList.contains('btn-remove')) qty = Math.max(0, qty-1);
      qtyEl.textContent = qty;
      updateTotal();
    }
  });

  document.getElementById('clearBtn').addEventListener('click', function(){
    menuItems.forEach(i => i.querySelector('.qty').textContent = '0');
    updateTotal();
  });

  // initial calculate
  updateTotal();
})();