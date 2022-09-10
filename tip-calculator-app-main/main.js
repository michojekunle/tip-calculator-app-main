const inputs = document.querySelectorAll('.input');
const warning = document.getElementById('warning-text');
const tips = document.querySelectorAll('.tip');
const totalAmountEl = document.getElementById('total-amount');
const tipAmountEl = document.getElementById('tip-amount');
const resetButton = document.getElementById('reset-button')

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
            tip.classList.toggle('selected-tip');
        calculateTip()
    })
})


function calculateTip() {
    let bill = document.querySelector('.bill .input input').value;
    let people = document.querySelector('.people .input input').value;
    let tipval; 
    tips.forEach((tip, index) => {
        if(tip.classList.contains('selected-tip')){
            tipval = parseInt(tip.innerText);
            console.log(tipval);
            console.log(tipval, tip.value);
            if(index === tips.length-1){
                tipval = parseInt(tip.value);
            }
        }
    })

    let tipAmount, totalAmount;

    bill = parseFloat(bill);
    people = parseFloat(people);
    console.log(tipval)
    console.log(bill, people, tipval);

    tipAmount = ((bill* tipval/100)/people).toFixed(2);
    totalAmount = ((bill + (bill* tipval/100))/people).toFixed(2);
    console.log(typeof tipAmount, typeof totalAmount)

    tipAmountEl.innerText = `$${tipAmount === 'NaN' ? 0.00 : tipAmount}`;
    totalAmountEl.innerText = `$${totalAmount === 'NaN' ? 0.00 : totalAmount}`;
}

resetButton.addEventListener('click', () => {
    tips.forEach(tip => tip.classList.remove('selected-tip'));
    tips[2].classList.add('selected-tip');
    document.querySelector('.bill .input input').value = 0.00;
    document.querySelector('.people .input input').value = 1;
    
    calculateTip();
})

calculateTip();

