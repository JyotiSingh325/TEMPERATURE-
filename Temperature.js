function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperature)) {
        resultDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    let convertedTemperature = '';
    let celsius, fahrenheit, kelvin;

    if (unit === 'celsius') {
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = parseFloat(temperature) + 273.15;
        convertedTemperature = `Fahrenheit: ${fahrenheit.toFixed(2)} °F, Kelvin: ${kelvin.toFixed(2)} K`;
    } else if (unit === 'fahrenheit') {
        celsius = (temperature - 32) * 5/9;
        kelvin = (temperature - 32) * 5/9 + 273.15;
        convertedTemperature = `Celsius: ${celsius.toFixed(2)} °C, Kelvin: ${kelvin.toFixed(2)} K`;
    } else if (unit === 'kelvin') {
        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9/5 + 32;
        convertedTemperature = `Celsius: ${celsius.toFixed(2)} °C, Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    }

    resultDiv.innerHTML = `Converted Temperature: ${convertedTemperature}`;
}
