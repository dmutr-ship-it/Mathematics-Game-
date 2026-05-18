
let coins = Number(localStorage.getItem('coins')) || 0;
let level = Number(localStorage.getItem('level')) || 1;

document.getElementById('coins').innerText = coins;
document.getElementById('level').innerText = level;

function save(){
localStorage.setItem('coins',coins);
localStorage.setItem('level',level);
}

function addCoins(n){
coins += n;
document.getElementById('coins').innerText = coins;
save();
}

function correctAnswer(){
addCoins(10);
level++;
document.getElementById('level').innerText = level;
save();
}

function correctAnswerBig(){
addCoins(60);
level++;
document.getElementById('level').innerText = level;
save();
}

function openShop(){
document.getElementById('shop').classList.toggle('hidden');
}

function buySkin(name,price){
if(coins < price){
alert('Недостаточно монет');
return;
}
coins -= price;
document.getElementById('coins').innerText = coins;
document.getElementById('character').src='img/'+name+'.png';
save();
}

function buyAccessory(name,price){
if(coins < price){
alert('Недостаточно монет');
return;
}
coins -= price;
document.getElementById('coins').innerText = coins;
alert('Куплено: '+name);
save();
}

function activatePromo(){
const code = document.getElementById('promo').value;

if(code==='noBOMZHIK'){
addCoins(67);
}

if(code==='Gazan'){
document.getElementById('character').src='img/india.png';
}

if(code==='777Dima'){
document.getElementById('coins').innerText='∞';
}

if(code==='666Dima'){
alert('Debug menu activated');
}
}
