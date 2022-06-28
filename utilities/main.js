let billInput = document.getElementById("bill-input");
let customerInput = document.getElementById("customers-input");
let customInput = document.getElementById("custom-tip-input");
let error1 = document.getElementById("error-1");
let error2 = document.getElementById("error-2");
let resetButton = document.getElementById("reset");
let tipMessage = document.getElementById("tip-per-person");
let totalMessage = document.getElementById("total-per-person");

const validateBill = () =>
{
    let bill = billInput.value.trim();
    let billAmount = parseFloat(bill);
    let billString = billAmount.toString();
    let decimalFlag = 0;
    if(billString.includes("."))
    {
        billString = billString.slice(billString.indexOf(".")+1, billString.length);
        console.log(billString);
        if(billString.length > 2)
        {
            decimalFlag++;
        }
    }
    if(bill.length === 0 || bill === "" || billAmount === 0)
    {
        error1.innerHTML = "Can't be zero";
        return false;
    }
    else if(isNaN(bill) || decimalFlag && !(Number.isInteger(billAmount)))
    {
        error1.innerHTML = "Not a valid number";
        return false;
    }
    else
    {
        error1.innerHTML = "";
        return true;
    }
}

const validateCustomers = () =>
{
    let customers = customerInput.value.trim();
    let customersAmount = Number(customers);
    if(customers.length === 0 || customers === "" || customersAmount === 0)
    {
        error2.innerHTML = "Can't be zero"
        return false;
    }
    else if(isNaN(customersAmount) || !(Number.isInteger(customersAmount)))
    {
        error2.innerHTML = "Not a valid number"
        return false;
    }
    else
    {
        error2.innerHTML = "";
        return true;
    }
}

const validateInputs = () =>
{
    let check1 = validateBill();
    let check2 = validateCustomers();
    if(check1 && check2)
    {
        resetButton.disabled = false;
        return true;
    }
    else
    {
        resetButton.disabled = true;
        return false;
    }
}

const percent5 = () =>
{
    if(!validateInputs())
    {
        return;
    }
    let percentage = .05
    let totalBill = Number(billInput.value).toFixed(2);
    let customers = Number(customerInput.value);
    let tipPerPerson = (totalBill * percentage) / customers;
    let totalPerPerson = tipPerPerson + (totalBill / customers);
    tipMessage.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalMessage.innerHTML = "$" + totalPerPerson.toFixed(2);
}

const percent10 = () =>
{
    if(!validateInputs())
    {
        return;
    }
    let percentage = .1
    let totalBill = Number(billInput.value).toFixed(2);
    let customers = Number(customerInput.value);
    let tipPerPerson = (totalBill * percentage) / customers;
    let totalPerPerson = tipPerPerson + (totalBill / customers);
    tipMessage.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalMessage.innerHTML = "$" + totalPerPerson.toFixed(2);
}
const percent15 = () =>
{
    if(!validateInputs())
    {
        return;
    }
    let percentage = .15
    let totalBill = Number(billInput.value).toFixed(2);
    let customers = Number(customerInput.value);
    let tipPerPerson = (totalBill * percentage) / customers;
    let totalPerPerson = tipPerPerson + (totalBill / customers);
    tipMessage.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalMessage.innerHTML = "$" + totalPerPerson.toFixed(2);
}
const percent25 = () =>
{
    if(!validateInputs())
    {
        return;
    }
    let percentage = .25
    let totalBill = Number(billInput.value).toFixed(2);
    let customers = Number(customerInput.value);
    let tipPerPerson = (totalBill * percentage) / customers;
    let totalPerPerson = tipPerPerson + (totalBill / customers);
    tipMessage.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalMessage.innerHTML = "$" + totalPerPerson.toFixed(2);
}
const percent50 = () =>
{
    if(!validateInputs())
    {
        return;
    }
    let percentage = .50
    let totalBill = Number(billInput.value).toFixed(2);
    let customers = Number(customerInput.value);
    let tipPerPerson = (totalBill * percentage) / customers;
    let totalPerPerson = tipPerPerson + (totalBill / customers);
    tipMessage.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalMessage.innerHTML = "$" + totalPerPerson.toFixed(2);
}

const checkCustomInput = () =>
{
    let custom = customInput.value.trim();
    let customAmount = parseFloat(custom);
    console.log(customAmount)
    let customString = customAmount.toString();
    console.log(customString)
    let decimalFlag = 0;
    if(customString.includes("."))
    {
        customString = customString.slice(customString.indexOf(".")+1, customString.length);
        if(customString.length > 2)
        {
            decimalFlag++;
        }
    }
    if(custom.length === 0 || custom === "" || customAmount === 0)
    {
        tipMessage.innerHTML = "$0.00";
        totalMessage.innerHTML = "$0.00";
        return false;
    }
    else if(isNaN(custom) || decimalFlag && !(Number.isInteger(customAmount)))
    {
        tipMessage.innerHTML = "$0.00";
        totalMessage.innerHTML = "$0.00";
        return false;
    }
    else
    {
        return true;
    }
}
const percentCustom = () =>
{
    if(!validateInputs() || !checkCustomInput())
    {
        return;
    }
    let percentage = (Number(customInput.value) / 100.00);
    let totalBill = Number(billInput.value).toFixed(2);
    let customers = Number(customerInput.value);
    let tipPerPerson = (totalBill * percentage) / customers;
    let totalPerPerson = tipPerPerson + (totalBill / customers);
    tipMessage.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalMessage.innerHTML = "$" + totalPerPerson.toFixed(2);
}

const reset = () =>
{
    billInput.value= "0";
    customInput.value = "Custom";
    customerInput.value = "0";
    resetButton.disabled = true;
    tipMessage.innerHTML = "$0.00";
    totalMessage.innerHTML = "$0.00";
}