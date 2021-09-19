/* 
    <h2>안녕하세요!</h2>
    <input type="text">
    <button>변경</button> 
*/

const h2 = document.querySelector('h2');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (input.value !== '') {
    h2.innerText = input.value;
    input.value = '';
  }
});
