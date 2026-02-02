
const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');


greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const h=document.getElementById('greeting');
    if(name){
        h.textContent = `Hello, ${name}!`;
    } else {
        h.textContent = 'Hello, Guest!';
    }
});
const box1=document.getElementById('box1');
box1.addEventListener('click',()=>{
    box1.style.backgroundColor='red';
});
const box2=document.getElementById('box2');
box2.addEventListener('click',()=>{
    box2.style.backgroundColor='blue';
});
const box3=document.getElementById('box3');
box3.addEventListener('click',()=>{
    box3.style.backgroundColor='green';
});
const box4=document.getElementById('box4');
box4.addEventListener('click',()=>{
    box4.style.backgroundColor='yellow';
});