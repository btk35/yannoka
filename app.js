'use strict';

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


//お題配列定義
const age = ["10代","20代","30代","40代","50代","60代以降"]; 

const category = [
	"ファッション","映画配信・音楽配信サービス","食品宅配","家具・インテリア","雑貨","サブスク","ヘアケア・ボディケア","各種洗剤・石鹸・歯磨粉","家電","フレグランス","基礎化粧品・コスメ","ジュエリー・時計","飲料（酒以外）","菓子・スイーツ","IT・ソフトウェア","ダイエット","米・野菜・フルーツ","海鮮・肉","乳製品","健康食品・サプリ","花火大会","神社・仏閣","スポーツ・フィットネス",,"旅行（プラン）","地方創生","博物館・美術館 企画展","DIY・ガーデニング","ハンドメイド","プラネタリウム","webサービス","私大・予備校・専門学校","オンライン学習","ペット","掃除代行・家事代行","電力・ガス契約","回線契約（有線・無線不問）","美容医療・審美歯科","医療","ビール・ウイスキー・ワイン","日本酒・焼酎","ホテル・旅館","ヨガ・瞑想","車買取・レンタカー","金融（NISA,iDeCo）、資産運用","生命保険・健康保険","冠婚葬祭","分譲住宅・注文住宅","介護","士業","婚活・マッチングapp","派遣会社・転職・就職","ライブ・フェス・演奏会","商業施設","レジャー施設"];

const youngExcludeCat = ["掃除代行・家事代行","電力・ガス","回線契約（有線・無線不問）","美容医療","審美歯科","ビール・ウイスキー・ワイン","日本酒・焼酎","ホテル・旅館","車買取・レンタカー","金融（NISA,iDeCo）、資産運用","生命保険・健康保険","冠婚葬祭","分譲住宅・注文住宅","介護","士業","確定申告","婚活・マッチングapp","派遣会社・転職・就職","不動産"];

const seniorExcludeCat = ["私大・予備校・専門学校", "塾・通信教材・アプリ", "婚活・マッチングapp","派遣会社・転職・就職","ダイエット","審美歯科"];

const size = [
	"1200 × 628(X twitter)","1200 × 1200(X twitter)",
	"1080 × 1350(Instagram)","1080 × 1080(Instagram)",
	"1080 × 1080(Facebook)","1200 × 628(Facebook)",
	"1200 × 628(LINE)","1080 × 1080(LINE)",
	"1200 × 1200(google)","1200 × 628(google)","600 × 500(google)","728 × 90(google)",
	"1200 × 1200(Yahoo!)","600 × 500(yahoo!)","1456 × 180(yahoo!)",
	"640 × 100(スマホバナー)","800 × 1200(スマホフルスクリーン)"
		];
	//ここは出し方を変えた方がいいかも知れない
const gender= ["女性","女性","女性","女性","男性","男性","男性","男性","ジェンダーレス","ジェンダーレス"];

const taste = [
  "レトロ", "モダン", "ミニマル", "ゴージャス", "ファンタジー","人物写真","きれいめ",
  "高級感", "ヴィンテージ", "ポップアート", "グラフィカル", "手描き風","暖色系", "寒色系", "パステル", "モノトーン", "コントラスト",
  "有機的", "幾何学", "立体感", "フラットデザイン", "質感","イラスト","文字組み中心"
];

const additionalTastes = [
  "春", "夏", "秋", "冬","クリスマス", "ハロウィン", "バレンタイン","キャンペーン","キャンペーン","自然", "都市","新商品","お得","限定","お得","限定","お正月","シーズンイベント","クーポン"
];

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
// console.log(ans);

//0カテゴリ,1サイズ,2年代,3性別,4テイスト,5色
const actions=[
	() => {theme();},//0
	() => {ans[1].innerText = `${makeRandom(size)}`;},
	() => {ans[2].innerText = `${howOld}`;},
	() => {ans[3].innerText = `${getRandomGender()}`;},
	() => {ans[4].innerText = `${makeRandom(taste)} × ${makeRandom(additionalTastes)} `;},
	() => {rgb();}
];

//要 連打対策
startButton.addEventListener('click',()=>{
	for(let item of ans){
		item.innerText = "";
	}
	let index = 0;
	const intervalId = setInterval(() => {
			if (index < actions.length) {
					actions[index]();
					index++;
			} else {
					clearInterval(intervalId);
			}
	}, 450);	
});

resetButton.addEventListener('click',()=>{
	for(let item of ans){
		item.innerText = "";
	}
})

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

