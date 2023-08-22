let c=0, c1=0;
const text=document.querySelector('#te');
const maintitle=document.querySelector('.title');
const sentence=document.querySelector('.sentence');
text.addEventListener('keydown', (event) =>{
    if(event.key==" "||event.key=="." || event.key=="!" ||event.key=="?")
    c++;
    maintitle.textContent=c;
    if(event.key=='backspace')
    c--;
    if(event.key=="." || event.key=="!" ||event.key=="?")
    c1++;
    sentence.textContent=c1;
    maintitle.textContent=c;
})