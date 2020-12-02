const cevap = "Hayır"; //Evet/Hayır
const araba = "BMW"; //AUDI/VW/BMW
const renk = "Kırmızı"; // Kırmızı/Siyah
const model = "2000"; //Model Yılı
let gecerli = "Bakıma Alınacaktır.";
let gecersiz = "Bakıma alınamaz";


console.log("Beş yıldan fazladır müşterimiz misiniz?");
if (cevap == "Hayır") {
    console.log("Hayır   Model=" + (((renk == "Kırmızı") || (renk == "Sıyah")) && ((araba == "AUDI") || (araba == "VW") || (araba == "BMW")))); {

        if ((araba == "AUDI") && ((2005 <= model && model <= 2010) || (2014 <= model && model <= 2020))) {
            console.log(gecerli);
        }

        else if ((araba == "VW") && (renk == "Siyah") && (2001 <= model && model <= 2018)) {
            console.log(gecerli);
        }
        else if (((araba == "BMW") && (renk == "Kırmızı") && (2001 <= model && model <= 2018)) || ((araba == "BMW") && (renk == "Siyah") && (model == 2020))) {
            console.log(gecerli);
        }
        else {
            console.log(gecersiz);
        }
    }
}
else if (cevap == "Evet") {
    console.log(gecerli + "  Daimi Müşterilerimize Kapımız Her Zaman Açık!");
}
else {
    console.log("Evet ya da Hayır giriniz");
}



