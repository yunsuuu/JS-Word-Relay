const $order = document.querySelector(".order");
const $word = document.querySelector(".word");
const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $btn = document.querySelector("button");
const number = prompt("몇 명이 참여하나요?", "2명");

if(number === null){
  alert("참가자 수를 적어주세요!");
  prompt("몇 명이 참여하나요?", "2명");
  // prompt창에 인원 수 입력할 때까지 alert 반복해서 띄어줌
}

let word;
let newWord;

const handleSubmit = (e) => {
  e.preventDefault();
  
  if(!word || word.substr(-1, 1) === newWord && newWord.lenght === 3 ){
    word = newWord;
    $word.innerText = word;
    
    const order = parseInt($order.innerText);
    if(order >= parseInt(number)){
        $order.innerText = 1;
    } else {
        $order.innerText = order + 1;
    }
  } else {
    alert("세글자를 가진 올바른 단어를 입력하세요!");
  }
  $input.value = "";
  $input.focus();
}

const handleInput = (e) => {
  newWord = e.target.value;
}

$form.addEventListener("submit", handleSubmit);
$input.addEventListener("input", handleInput);
