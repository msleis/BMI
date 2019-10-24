'use strict'

app.controller('greetController', ['$scope', function($scope){
    $scope.greet = 'Aplikace pro výpočet vašeho Body Mass Indexu (BMI).';

    $scope.bmi = function() {
        const NASOBEK = 100;

                var vaha = prompt('Jaká je vaše váha v kilogramech?', []);

                var vyska = prompt('Jaká je vaše výška v centimetrech?', []);

                var desetinaVysky = vyska / NASOBEK;
                var vysledekNasobkuVysky = desetinaVysky * desetinaVysky;
                var vypocetBmi = vaha / vysledekNasobkuVysky;

                var zkracene = vypocetBmi;
                // BMI tabulka: 18.5 podvýživa, 18.5-24.9 Normál, 25-29.9 Nadváha, 30.0+ Obézní

                if (zkracene < 18.5) {
                    alert("Vaše BMI hodnota je: " + vypocetBmi.toFixed(2) + ". Jste podvyživený/á");
                } else if (zkracene >= 18.5 && zkracene <= 24.9) {
                    alert("Vaše BMI hodnota je: " + vypocetBmi.toFixed(2) + ". Jste v normálu.");
                } else if (zkracene >= 25 && zkracene <= 29.9) {
                    alert("Vaše BMI hodnota je: " + vypocetBmi.toFixed(2) + ". Máte nadváhu.");
                } else if (zkracene > 30) {
                    alert("Vaše BMI hodnota je: " + vypocetBmi.toFixed(2) + ". Jste obézní.");
                }
    }

}])
