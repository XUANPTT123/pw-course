let tall = 1.6;
tall_cm = tall * 100;
tall_sole = tall_cm % 100;

console.log("Cân nặng lý tưởng: " + tall_sole * 9 / 10 + "kg" + ";" +
    " Cân nặng tối đa: " + tall_sole + "kg" + ";" +
    " Cân nặng tối thiểu: " + tall_sole * 8 / 10 + "kg")