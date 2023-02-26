
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.value;
  
    const celToFah = (celf) => {
      celf = parseFloat(celf);
      let celsiusFahrenheit = ((celf * 1.8) + 32);
      let celsiusFahrenheitFinal = celsiusFahrenheit.toFixed(2);
      return celsiusFahrenheitFinal;
    }
  
    const fahToCel = (fahc) => {
      fahc = parseFloat(fahc);
      let fahrenheitCelsius = ((fahc - 32) / 1.8);
      let fahrenheitCelsiusFinal = fahrenheitCelsius.toFixed(2);
      return fahrenheitCelsiusFinal;
    }
    
  
    let resultTemp;
    if (valueTemp == "cel_fah") {
      resultTemp = celToFah(parseInt(numberTemp));
      document.getElementById('resultContainer').innerHTML = `= ${resultTemp} °F`;
    }
    else if (valueTemp == "fah_cel") {
      resultTemp = fahToCel(parseInt(numberTemp));
      document.getElementById('resultContainer').innerHTML = `= ${resultTemp} °C`;
    }
  
  }
  
