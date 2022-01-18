// 순서도 그리기 중요!
// number, order 값 제대로 못 받은 이유: parseInt로 감싸주는 거 잊지 말기!

const $order = document.querySelector("#order");
const $word = document.querySelector("#word");
const $input = document.querySelector("input");
const $btn = document.querySelector("button");

const number = parseInt(prompt('몇 명이 참가하나요?'));

let word; // 제시어
let newWord; // 새로 입력한 단어

const onClick = () => {
    if(!word || word[word.length - 1] === newWord[0]) { 
        word = newWord;
        $word.innerText = word;
        const order = parseInt($order.innerText);
        if(order + 1 > number) {
            $order.innerText = 1;
        } else {
            $order.innerText = order + 1;
        }
        $input.value = "";
        $input.focus();
    } else {
        alert('올바른 단어를 입력하세요!');
    }
}

const onInput = (e) => {
    newWord = e.target.value;
}

$btn.addEventListener("click", onClick);
$input.addEventListener("input", onInput);