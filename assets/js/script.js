const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById("value");
    const descriptionElement = document.getElementById("description");
    
    let description = "";
    value.classList.add('attention');

  document.getElementById("infos").classList.remove("hidden");

  if (bmi < 18.5) {
    description = "Cuidado! Você está abaixo do peso ideal";
  } else if (bmi >= 18.5 && bmi <= 25) {
      description = "Parabéns! Você está no peso ideal";
      value.classList.remove("attention");
      value.classList.add("normal");
  } else if (bmi > 25 && bmi <= 30) {
    description = "Cuidado! Você está acima do peso ideal";
  } else if (bmi > 30 && bmi < 35) {
    description = "Atenção! Você está com obesidade";
  } else if (bmi > 35 && bmi < 40) {
    description = "Atenção! Você está com obesidade severa";
  } else{
    description = "Atenção! Você está com obesidade morbida";
  }

  value.textContent = bmi;
  descriptionElement.textContent = description;
});
