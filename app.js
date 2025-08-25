import { age, category, youngExcludeCat, seniorExcludeCat, size, taste, additionalTastes } from './data/theme.js';

//nav三
const btn = document.querySelector('.openbtn');
const threeLine =document.querySelector('.openbtn-area'); 
const navPanel = document.querySelector('#js-nav');

btn.addEventListener('click',()=>{
	btn.classList.toggle('active');
	threeLine.classList.toggle('active');
	navPanel.classList.toggle('panelactive');
})
navPanel.addEventListener('click',()=>{
	btn.classList.remove('active');
	threeLine.classList.remove('active');
	navPanel.classList.remove('panelactive');	
})

//お題function
function makeRandom (array){
	const random = Math.floor(Math.random()* array.length);
	return array[random];
}

function getRandomGender(){
  const randomNum = Math.random();
  if(randomNum < 0.4){
    return "男性";
  }else if(randomNum < 0.8){
    return "女性";
  }else{
    return "ジェンダーレス";
  }
}

function rgbToHex (r,g,b){
	const toHex = (x)=>{
			const hex = x.toString(16);
			return hex.length === 1? '0' + hex :hex;
	}
	return '#' +toHex(r) +toHex(g) + toHex(b);
}

function rgb(r,g,b){ 
	r = Math.floor(Math.random()*255);
	g = Math.floor(Math.random()*255);
	b = Math.floor(Math.random()*255);
	const hexColor= rgbToHex(r,g,b);
	ans[5].innerHTML =`rgb(${r}, ${g}, ${b})<br>${hexColor}　<span class="colorBox">　　　　</span>`;
	const colors = document.querySelector('.colors span');
	colors.style.backgroundColor = hexColor; 
}	



let newCategory = [...category];
let howOld="";

//年代で細分化するならswithで振り直し
function theme(){
	howOld = makeRandom(age);
		if(howOld === "10代"){
		const youngCategory = category.filter(item => 
				!youngExcludeCat.includes(item));
		ans[0].innerText = makeRandom(youngCategory);
	}else if(howOld === "60代以降" ){
		const seniorCategory = category.filter(item => 
				!seniorExcludeCat.includes(item));
				ans[0].innerText = makeRandom(seniorCategory);
	}else{
		ans[0].innerText = makeRandom(newCategory);
	}
};


//結果書き換え
const startButton = document.querySelector('.question .button');
const resetButton = document.querySelector('.reset .button');
const ans = document.querySelectorAll("#theme dd");

//0カテゴリ,1サイズ,2年代,3性別,4テイスト,5色
const actions=[
	() => {theme();},//0
	() => {ans[1].innerText = `${makeRandom(size)}`;},
	() => {ans[2].innerText = `${howOld}`;},
	() => {ans[3].innerText = `${getRandomGender()}`;},
	() => {ans[4].innerText = `${makeRandom(taste)} × ${makeRandom(additionalTastes)} `;},
	() => {rgb();}
];

// 連打対策フラグ
let running = false;

startButton?.addEventListener('click', () => {
  if (running) return;
  running = true;

  for (const item of ans) item.innerText = "";

  let index = 0;
  const intervalId = setInterval(() => {
    if (index < actions.length) {
      actions[index]();
      index++;
    } else {
      clearInterval(intervalId);
      running = false;
    }
  }, 450);
});

resetButton?.addEventListener('click', () => {
  if (running) return; // 実行中は無視
  for (const item of ans) item.innerText = "";
});

//クリップボードにコピー
const clipBoard = document.querySelector(".copyButton");
const clipText = document.querySelector(".theme");

clipBoard.addEventListener("click",()=>{
	navigator.clipboard.writeText(clipText.innerText)
	.then (()=>{
		alert("コピーしました");
	},
	()=>{
		alert("コピー―できませんでした");	
	});
});

