var cardAdd = document.getElementById('cardAdd');
var cardAddForm = document.getElementById('cardAddForm')
var cardData = document.getElementById('cardData');

cardAdd.addEventListener("click",()=>{
    cardAddForm.style.display = "block";
});

var cardAddFormClose = document.getElementById('cardAddFormClose');

cardAddFormClose.addEventListener('click',()=>{
    cardAddForm.style.display = "none";
});

cardAddForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    var cardNo,cardType,cardAmount,currencyCode,accountType;
    var from,to;

    cardNo = document.forms['cardAddForm'].cardNo.value;
    cardType        = document.forms['cardAddForm'].cardType.value;      
    cardAmount      = document.forms['cardAddForm'].cardAmount.value;
    currencyCode        = document.forms['cardAddForm'].currencyCode.value;
    accountType     = document.forms['cardAddForm'].accountType.value;
    
    document.getElementById('currency').textContent = currencyCode;
    document.getElementById('money').textContent = cardAmount + ".00";
    document.getElementById('currency').textContent = currencyCode;
    document.getElementById('accountType').textContent = accountType;

    document.forms['moneyTransferForm'].from.value = cardNo;
    
    document.forms['moneyTransferForm'].addEventListener('submit',(e)=>{
        e.preventDefault();

        var rest = parseInt(cardAmount) - parseInt(document.forms['moneyTransferForm'].amountToSend.value);
        alert("Money Transfer Successfull Amount send " + document.forms['moneyTransferForm'].amountToSend.value + " rest amount are " + rest );

        document.getElementById('money').textContent = rest + ".00";
    })
}); 




