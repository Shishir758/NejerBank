const commaSeparate = Intl.NumberFormat('en-IN');


function getValue(input) {
    const getDepositAmount = Number(document.getElementById(input).value);
    return getDepositAmount;
}


document.getElementById('btn-deposit').addEventListener('click', function () {
    const getDepositAmount = getValue('deposit-input-field')
    if (getDepositAmount > 0 && typeof getDepositAmount !== 'string') {
        const getPreviousDepositValue = parseInt(document.getElementById('totalDeposit').innerText.replace(/\,/g,''));
        const totalDepositAmount = getDepositAmount + getPreviousDepositValue;
        document.getElementById('totalDeposit').innerText = commaSeparate.format((totalDepositAmount));
        const getTotalAmount = parseInt(document.getElementById('totalBalance').innerText.replace(/\,/g, ''));
        document.getElementById('totalBalance').innerText = commaSeparate.format((getDepositAmount + getTotalAmount));
        document.getElementById('deposit-input-field').value = '';
    } else {
        document.getElementById('deposit-input-field').value = '';
        alert(`Please Enter Number Only!!
        &
        Please do not enter nagative number!!`);
    }
})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const getWithdrawAmount = Number(document.getElementById('withdraw-input-field').value);
    const getPreviousWithdrawValue = parseInt(document.getElementById('totalWithdraw').innerText.replace(/\,/g, ''));
    const getTotalAmount = parseInt(document.getElementById('totalBalance').innerText.replace(/\,/g, ''));
    if (getWithdrawAmount < getTotalAmount && getWithdrawAmount > 0 && getWithdrawAmount !== 'string') {
        const totalWithdrawAmount = getWithdrawAmount + getPreviousWithdrawValue;
        document.getElementById('totalWithdraw').innerText =commaSeparate.format( (totalWithdrawAmount));
        document.getElementById('totalBalance').innerText = commaSeparate.format((getTotalAmount - getWithdrawAmount));
        document.getElementById('withdraw-input-field').value = '';
    } else {
        alert(`Please Enter Number Only!!
        &
        Please do not enter nagative number!!
        & Enter between available amount!!`);
        document.getElementById('withdraw-input-field').value = '';
    }
})