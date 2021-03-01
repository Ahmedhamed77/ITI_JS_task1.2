
let sum = 0;
function cal(){
    while ((sum >= 0)&&(sum < 100)){

        let num = prompt("enter your number");
        if (isNaN(num)) {
            document.getElementById('result').value = "not a number";
            break;
        }
        if ((Number(num) === 0) || (Number(sum) >= 100)) {
            break;
        }
        sum += Number(num);
        console.log(sum);
        document.getElementById('result').value = sum;
    }
}


window.addEventListener('load',function () {
    cal();
})
