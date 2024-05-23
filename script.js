const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max-min) + min);

const optimizeNumber = (n) => (n + "").length ===2 ? n : "0" + n;

const data = [];
const colors = ["#CDB9D6aa", "#02A298aa", "#A3D8CFaa", "#F0B2ABaa", "#73615Eaa"];
let n =Math.floor(getNumber(61, 6) / 6) * 6 ;

while (n--) {
    data.push(getNumber(100));
}

console.log(data);

const box = document.querySelector(".box");

for (let value of data) {
    box.innerHTML += `<div 
    class="card" 
    style="background-color: ${colors[getNumber(colors.length - 1)]}"
    > ${optimizeNumber(value)}</div>`;
}