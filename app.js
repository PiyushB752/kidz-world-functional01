
const cartItem = document.getElementById('cart-value');
let cartValue = 0;
let Messages = "";
let totalDollar = 0;
let totalCent = 0;

const carrt = document.getElementById('cart');
carrt.addEventListener('click', () => {
  console.log(Messages);
  console.log("The Total Amount is $"+`${totalDollar + Math.floor(totalCent / 100)}`,"and",`${totalCent%100}`,"cents.")
});

const Button1 = document.getElementById('book1');
let quantityButton1 = 0;
let dollar1 = 7;
let cent1 = 49;
Button1.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton1++;
  Messages += `Item name: This was our pact - Quantity: ${quantityButton1}\n`;
  totalDollar += dollar1;
  totalCent += cent1;
});

const Button2 = document.getElementById('book2');
let quantityButton2 = 0;
let dollar2 = 4;
let cent2 = 59;
Button2.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton2++;
  Messages += `Item name: The famous five - Quantity: ${quantityButton2}\n`;
  totalDollar += dollar2;
  totalCent += cent2;
});

const Button3 = document.getElementById('book3');
let quantityButton3 = 0;
let dollar3 = 6;
let cent3 = 80;
Button3.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton3++;
  Messages += `Item name: Matilda - Quantity: ${quantityButton3}\n`;
  totalDollar += dollar3;
  totalCent += cent3;
});

const Button4 = document.getElementById('book4');
let quantityButton4 = 0;
let dollar4 = 10;
Button4.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton4++;
  Messages += `Item name: Harry Potter - Quantity: ${quantityButton4}\n`;
  totalDollar += dollar4;
});

const Button5 = document.getElementById('book5');
let quantityButton5 = 0;
let dollar5 = 7;
let cent5 = 29; 
Button5.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton5++;
  Messages += `Item name: For Young Readers - Quantity: ${quantityButton5}\n`;
  totalDollar += dollar5;
  totalCent += cent5;
});

const Button6 = document.getElementById('book6');
let quantityButton6 = 0;
let dollar6 = 4
let cent6 = 99
Button6.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton6++;
  Messages += `Item name: Wimpy kid - DIY - Quantity: ${quantityButton6}\n`;
  totalDollar += dollar6;
  totalCent += cent6;
});



const Button7 = document.getElementById('game1');
let quantityButton7 = 0;
let dollar7 = 17
let cent7 = 49
Button7.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton7++;
  Messages += `Item name: Dart Board - Quantity: ${quantityButton7}\n`;
  totalDollar += dollar7;
  totalCent += cent7;
});

const Button8 = document.getElementById('game2');
let quantityButton8 = 0;
let dollar8 = 19;
let cent8 = 99;
Button8.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton8++;
  Messages += `Item name: Connect 4 - Quantity: ${quantityButton8}\n`;
  totalDollar += dollar8;
  totalCent += cent8;
});

const Button9 = document.getElementById('game3');
let quantityButton9 = 0;
let dollar9 = 20
let cent9 = 99
Button9.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton9++;
  Messages += `Item name: Jenga - Quantity: ${quantityButton9}\n`;
  totalDollar += dollar9;
  totalCent += cent9;
});

const Button10 = document.getElementById('game4');
let quantityButton10 = 0;
let dollar10 = 19
let cent10 = 49
Button10.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton10++;
  Messages += `Item name: Monopoly - Quantity: ${quantityButton10}\n`;
  totalDollar += dollar10;
  totalCent += cent10;
});



const Button11 = document.getElementById('craft1');
let quantityButton11 = 0;
let dollar11 = 12
let cent11 = 49
Button11.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton11++;
  Messages += `Item name: Bookmarks - Quantity: ${quantityButton11}\n`;
  totalDollar += dollar11;
  totalCent += cent11;
});

const Button12 = document.getElementById('craft2');
let quantityButton12 = 0;
let dollar12 = 19
let cent12 = 99
Button12.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton12++;
  Messages += `Item name: Birthday card - Quantity: ${quantityButton12}\n`;
  totalDollar += dollar12;
  totalCent += cent12;
});

const Button13 = document.getElementById('craft3');
let quantityButton13 = 0;
let dollar13 = 15
let cent13 = 99 
Button13.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton13++;
  Messages += `Item name: Stuffed toys - Quantity: ${quantityButton13}\n`;
  totalDollar += dollar13;
  totalCent += cent13;
});

const Button14 = document.getElementById('craft4');
let quantityButton14 = 0;
let dollar14 = 18
let cent14 = 49
Button14.addEventListener('click', () => {
  cartValue++;
  cartItem.textContent = cartValue;
  quantityButton14++;
  Messages += `Item name: Dream catcher drawing - Quantity: ${quantityButton14}\n`;
  totalDollar += dollar14;
  totalCent += cent14;
});
