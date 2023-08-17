const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

console.log(form)

const inputValue = document.getElementById("value-real");
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById("result");

function handleSubmit(e) {
    e.preventDefault();
    
    if(!inputValue.value || inputValue.value <0) {
        alert("Valor inválido.");
        return;
    }

    else if(!selectedCurrency.value){
        alert("Escolha uma moeda");
        return;
    }

    converter();
};
function converter(){
    if(selectedCurrency.value === "euro"){
        valueConverted = inputValue.value / 5.22;
        result.innerHTML = valueFormatter("pt-BR", "EUR");
    }
    else if(selectedCurrency.value === "dolar"){
        valueConverted = inputValue.value / 4.73;
        result.innerHTML = valueFormatter("en-US", "USD");
    }

        animateResult();

    /*
    para zerar os valores após gerar resultado: 

    inputValue.value = '';
    selectedCurrency.value = '';
    
    */
};

function valueFormatter(locale, currency){
    const value = valueConverted.toLocaleString(`${locale}`, {style: "currency", currency: `${currency}`});
    return`<span>💲</span> ${value} <span>💲</span>`;
};

function animateResult(){
return result.animate([
{transform: "translateY(-150px)"},
{transform: "translateY(0px)"}
],{duration: 550});
};