function showSection(section) {
    document.getElementById("temp").classList.add("hidden");
    document.getElementById("weight").classList.add("hidden");
    document.getElementById("currency").classList.add("hidden");

    document.getElementById(section).classList.remove("hidden");
}

function goBack() {
    showSection("");
}

// 🌡️ TEMPERATURE
function convertTemp() {
    const val = parseFloat(document.getElementById("tempInput").value);
    const from = document.querySelector('input[name="tfrom"]:checked');
    const to = document.querySelector('input[name="tto"]:checked');

    if (!from || !to || isNaN(val)) return;

    let temp = val;

    if (from.value === "F") temp = (val - 32) * 5/9;
    if (from.value === "K") temp = val - 273.15;

    if (to.value === "F") temp = (temp * 9/5) + 32;
    if (to.value === "K") temp = temp + 273.15;

    document.getElementById("tempResult").innerText = temp.toFixed(2);
}

// ⚖️ WEIGHT
function convertWeight() {
    const val = parseFloat(document.getElementById("weightInput").value);
    const from = document.querySelector('input[name="wfrom"]:checked');
    const to = document.querySelector('input[name="wto"]:checked');

    if (!from || !to || isNaN(val)) return;

    let kg;

    if (from.value === "kg") kg = val;
    if (from.value === "lb") kg = val * 0.4536;
    if (from.value === "g") kg = val / 1000;
    if (from.value === "t") kg = val * 1000;

    let result;

    if (to.value === "kg") result = kg;
    if (to.value === "lb") result = kg / 0.4536;
    if (to.value === "g") result = kg * 1000;
    if (to.value === "t") result = kg / 1000;

    document.getElementById("weightResult").innerText = result.toFixed(2);
}

// 💱 CURRENCY (STATIC)
function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.querySelector('input[name="currency"]:checked');

    if (!currency || isNaN(amount)) return;

    const rates = {
        USD: 0.012,
        SGD: 0.016,
        GBP: 0.0095,
        AUD: 0.018
    };

    const result = amount * rates[currency.value];

    document.getElementById("currencyResult").innerText =
        result.toFixed(2) + " " + currency.value;
}