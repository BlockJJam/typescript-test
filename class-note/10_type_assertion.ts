// 타입 단언(type assertion)
var a;
a = 20;
a = 'a' ; 
var b = a as string; // 타입 단언 -> 타입 지정을 'as'를 통해 타입스크립트에게 이 타입으로 b를 진행하라고 알려주는 것

// 타입단언, 어디서 많이 사용하는가? DOM API 조작

export = {} 

// DOM API 조작

// querySelelctor?
// <div id="app"> hi </div>
// 태그 정보 중의 id('#app') or 특정 태그 이름('div')로 접근 가능
var div = document.querySelector('div'); // type: HTMLDivElement | null
if(div){
    div.innerText
}


