const chart = document.getElementById('chart');

let array = [];
for(let i = 0; i<100; i++){
    let number = Math.floor(Math.random()*100);
    console.log(number);
    array.push(number);
}
function draw() {
    chart.innerHTML = '';
    array.forEach(function name(x){
        let div = document.createElement('div');
        div.style.height = x+ 'px';
        chart.appendChild(div);
    
    
    })

}
draw();


