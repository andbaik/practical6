'use strict';
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на 
//картинку console.log выводился ее src.
// let elems = document.getElementsByTagName('img');
// for(let i = 0; i <elems.length; i++){
//     elems[i].onclick = func;
// }
// function func(){
//     console.log(this.getAttribute('src'));
// }

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в 
//атрибут title запишется ее текст
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
// }
//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее 
//текста дописывается ее href в круглых скобках
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
//     this.removeEventListener('mouseover', func);
// }
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"

// let elems = document.querySelectorAll('input');
// for(let i=0; i<elems.length;i++){
//     elems[i].addEventListener('blur', func);
// }
// function func(){
//     let el = document.getElementById('test');
//     el.innerHTML = this.value;
// }

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

// let elems = document.querySelectorAll('input');
// for(let i=0; i<elems.length;i++){
//     elems[i].addEventListener('click', func);
// }
// function func(){
//     alert(this.value);
//     this.removeEventListener('click', func);
// }


// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.

// let elems = document.querySelectorAll('p');
// for(let i=0; i<elems.length;i++){
//     elems[i].addEventListener('click', func);
// }
// function func(){
//     this.innerHTML = (Math.pow(+this.innerHTML, 2));
// }

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

let elems = document.querySelectorAll('input');
for(let i=0; i<elems.length;i++){
    elems[i].addEventListener('blur', func);
}
function func(){
    let len = this.value.length;
    
    if(len == this.dataset.length){
        this.style.border = "1px solid green";
    }else{
        this.style.border = "2px solid red";
    }

}