const searchinput = document.querySelector('#searechInput')
const myButton = document.querySelector('#myButton')
const list = document.querySelector('#list')
const items = document.querySelector('#items')

// indexOf() - ПОИСК ПОДСТРОКИ В СТРОКЕ
//toLowerCase() - перевести строку к  нижнему регистру ( все символы маленькие)
function isMaching(full, chunk) {
    let index = full.toLowerCase().indexOf(chunk.toLowerCase());
    let result  = inddex != -1;
    return result;
}


function search(input) {
    let value = input.value;
    for(let item of items){
if (isMaching(item.textContent, value) == false) {

    item.style.display = 'none'
}else {
    item.style.display = 'flex'
}}
}

myButton.addEventListener('click', ()=> {
    search(searchInput)
})