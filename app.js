let coins = 0;
let level = 1;

function addCoins(amount){
  coins += amount;
  document.getElementById('coinBalance').innerText = coins;
}

function toggleShop(){
  document.getElementById('shop').classList.toggle('hidden');
}

function activatePromo(){
  const code = document.getElementById('promoInput').value;

  if(code === 'noBOMZHIK'){
    addCoins(67);
    alert('+67 монет');
  }

  if(code === 'Gazan'){
    alert('Скин открыт');
  }

  if(code === '777Dima'){
    document.getElementById('coinBalance').innerText = '∞';
  }

  if(code === '666Dima'){
    alert('DEBUG MENU ACTIVATED');
  }
}

function levelUp(){
  level++;
  document.getElementById('level').innerText = level;

  const reward = Math.floor(Math.random()*28)+3;
  addCoins(reward);
}

setInterval(()=>{
  levelUp();
},15000);
