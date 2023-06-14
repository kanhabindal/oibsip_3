const inputTemperature = document.getElementById("inputTemperature");
const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const outputTemperature = document.getElementById("outputTemperature");
const convertButton = document.getElementById("convertButton");

const convert = () => {
  const temperature = parseFloat(inputTemperature.value);
  const from = inputUnit.value;
  const to = outputUnit.value;

  if (!isNaN(temperature)) {
    const convertedTemperature = convertTemperature(temperature, from, to);
    outputTemperature.value = convertedTemperature.toFixed(2);
  }
};

const convertTemperature = (temperature, from, to) => {
  switch (from) {
    case "celsius":
      switch (to) {
        case "fahrenheit":
          return temperature * 9 / 5 + 32;
        case "kelvin":
          return temperature + 273.15;
        default:
          throw new Error("Invalid unit");
      }
    case "fahrenheit":
      switch (to) {
        case "celsius":
          return (temperature - 32) * 5 / 9;
        case "kelvin":
          return (temperature - 32) * 5 / 9 + 273.15;
        default:
          throw new Error("Invalid unit");
      }
    case "kelvin":
      switch (to) {
        case "celsius":
          return temperature - 273.15;
        case "fahrenheit":
          return (temperature - 273.15) * 9 / 5 + 32;
        default:
          throw new Error("Invalid unit");
      }
    default:
      throw new Error("Invalid unit");
  }
};

convertButton.addEventListener("click", convert);
