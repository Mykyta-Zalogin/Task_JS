const credits = 23580;
const pricePerDroid = 3000;
let droidsCount = prompt("Яку кількість дроїдів ви хочете купити?");
droidsCount = Number(droidsCount);
if (droidsCount == null) {
  console.log("Скасовано користувачем!");
} else if (credits >= droidsCount * pricePerDroid) {
  let creditsLeft = credits - droidsCount * pricePerDroid;
  console.log(
    "Ви купили ",
    droidsCount,
    " дроїдів, на рахунку залишилося",
    creditsLeft,
    "кредитів."
  );
} else {
  console.log("Недостаточно коштів на рахунку!");
}
