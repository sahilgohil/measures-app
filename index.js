/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEL = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const meterFeetEl = document.getElementById("meter-feet-el")
const literToGallonEl = document.getElementById("ltr-gln-el")
const kiloToPoundEl = document.getElementById("kg-lb-el")
const meterToFeet = 3.281;
convertBtn.addEventListener("click",function()
{
        let feet = getFeet(Number(inputEL.value)).toFixed(3)
        let meter = getMeter(Number(inputEL.value)).toFixed(3)
        let sentence = `${inputEL.value} meters = ${feet} feet | ${inputEL.value} feet = ${meter} meters`
        meterFeetEl.textContent = sentence
        
        let gallon = getGallon(Number(inputEL.value)).toFixed(3)
        let liter = getLiter(Number(inputEL.value)).toFixed(3)
        sentence = `${inputEL.value} liters = ${gallon} gallons | ${inputEL.value} gallons = ${liter} liters`
        literToGallonEl.textContent = sentence
        
        let pound = getPound(Number(inputEL.value)).toFixed(3)
        let kilo = getKilo(Number(inputEL.value)).toFixed(3)
        sentence = `${inputEL.value} kilos = ${pound} pounds | ${inputEL.value} pounds = ${kilo} kilos`
        kiloToPoundEl.textContent = sentence
})

function getFeet(value)
{
    return value*meterToFeet;   
          
}
function getMeter(value)
{
    return (value/meterToFeet)
}
function getGallon(value){
    return value*0.264
}
function getLiter(value)
{
    return value/0.264;
}
function getPound(value){
    return value*2.204
}
function getKilo(value)
{
    return value/2.204
}