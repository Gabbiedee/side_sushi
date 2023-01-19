const minus = document.getElementById('minus');
const plus = document.getElementById('add');
let num = document.querySelector('.number');

let a = 1

plus.addEventListener('click', ()=>{
    a++;

    num.innerHTML = a
    
})

minus.addEventListener('click', ()=>{
    a--
    if(a < 1){
        a = 1;
        num.innerText = a

    }
})

