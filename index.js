var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
// let 제목 = document.querySelector('#title') as Element;
// 제목.innerHTML = '반가워요';
// if (제목?.innerHTML){   // ?  없으면 undefined   (optional chaining)
//     제목.innerHTML ='반가워요';
// }
//셀렉터로 찾은것은 널일가능성이있기때문에 내로잉(narrowing)함
// if (제목 instanceof Element){
//     제목.innerHTML ='반가워요'
// }
// if (제목 != null){
//     제목.innerHTML ='반가워요'
// }
