const convertedNumber = document.querySelector('.converted-number');
const convertBtn = document.querySelector('.display-btn');
const convertInput = document.querySelector('.display-input');
const meterFeets = document.querySelector('.meters-feets');
const letersGallons = document.querySelector('.liters-gallons');
const kilogramsPounds = document.querySelector('.kilograms-pounds');
const warning = document.querySelector('.warning');


// functions to convert metric units to imperial
const conversionToFeet = (meter) => {
   let num = meter * 3.281;
   let n = num.toFixed(3);
   return n;
}

const conversionToGallon = (liter) => {
  let num = liter * 0.264;
  let n = num.toFixed(3);
  return n; 
}

const conversionToPound = (kilo) => {
  let num = kilo * 2.204;
  let n = num.toFixed(3);
  return n;
}


const convertToAnything = () => {
  const inputVal = Number(convertInput.value);
  if (!inputVal){
    warning.innerHTML = `Input not valid, enter a number!`
  } else {
    warning.innerHTML = '';
    
    const feet = conversionToFeet(inputVal);
    const gallon = conversionToGallon(inputVal);
    const pound = conversionToPound(inputVal);
  
    meterFeets.innerHTML = `${inputVal} meters = ${feet} feet | ${inputVal} = sss meters`;
    letersGallons.innerHTML = `${inputVal} liters = ${gallon} gallons | ${inputVal} = sss meters`;
    kilogramsPounds.innerHTML = `${inputVal} kilograms = ${pound} pounds | ${inputVal} = sss meters`;
  }
}



convertBtn.addEventListener('click', convertToAnything);