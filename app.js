const $order = document.querySelector(".order");
const $word = document.querySelector(".word");
const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $btn = document.querySelector("button");
const number = parseInt(prompt("몇 명이 참여하나요?", 2));

// prompt를 취소하면 null이 출력
// null은 number 함수에 들어가면 NaN
// NaN은 if문에 들어가면 항상 false
// number가 null(취소를 누른 경우)이면 if문 내부는 실행되지 않음
if(number){ 
  // prompt창에서 확인을 누르면 아래 코드 실행
  let word;
  let newWord;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(newWord.length !== 3){
      alert("세글자 단어를 입력해 주세요!");
    } 
    else if (!word || word.substr(-1, 1) === newWord[0]){
      word = newWord;
      $word.innerText = word;
      const order = parseInt($order.innerText);
      if(order + 1 > number){
        $order.innerText = 1;
      } else {
        $order.innerText = order + 1;
      }
    } 
    else {
      alert("제시어를 살펴본 후 올바른 세글자 단어를 입력해 주세요!");
    }
    $input.value = "";
    $input.focus();
  }
  
  const handleInput = (e) => {
    newWord = e.target.value;
  }
  
  $form.addEventListener("submit", handleSubmit);
  $input.addEventListener("input", handleInput);
} 
else {
  alert("참여인원을 숫자로 입력해 주세요!");
}