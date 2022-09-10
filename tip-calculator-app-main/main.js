const inputs = document.querySelectorAll('.input');
const warning = document.getElementById('warning-text');
const tips = document.querySelectorAll('.tip');
const totalAmountEl = document.getElementById('total-amount');
const tipAmountEl = document.getElementById('tip-amount');

inputs.forEach((input, index) => {
    console.log(input)
    input.addEventListener('change', () => {
        bill = input.children[0].value;
        people = input.children[1].value;
        console.log(input.children[1].value);
        if(input.children[1].value <= 0){
            if(index === 1) {
                warning.innerText = 'Can\'t be zero';
            }
            input.style.border = '1px solid red';
        } else {
            input.style.border = '1px solid green';
            warning.innerText = '';
        }
        calculateTip()
    })
})

tips.forEach((tip, index) => {
    tip.addEventListener('click', () => {
        tips.forEach(tip => tip.classList.remove('selected-tip'))
        if(index !== tips.length-1 ){
            tip.classList.toggle('selected-tip');
            tipval = tip.innerText;
            console.log(index)
        }
        else {
            tip.style.textAlign = 'right';
            tip.innerText = '';
            tip.style.paddingRight = '10px';
        } 
        calculateTip()
    })
})


function calculateTip() {
    let bill = document.querySelector('.bill .input input').value;
    let people = document.querySelector('.people .input input').value;
    let tipval; 
    tips.forEach(tip => {
        if(tip.classList.contains('selected-tip')){
            tipval = tip.innerText;
            console.log(tipval);
        }
    })

    let tipAmount, totalAmount;

    if(tipval.includes('%')){
        tipval.replace('%', '');
        tipval = parseInt(tipval);
        console.log(tipval)
    }
    bill = parseFloat(bill);
    people = parseFloat(people);
    console.log(bill, people, tipval);

    tipAmount = ((bill* tipval/100)/people).toFixed(2);
    totalAmount = ((bill + (bill* tipval/100))/people).toFixed(2);

    tipAmountEl.innerText = `$${tipAmount}`;
    totalAmountEl.innerText = `$${totalAmount}`;
}

calculateTip();

