/* CHANGES TEXT WITHIN DIV */
var text = ["Women are statistically paid lower in food production industry and agriculture-related jobs and are simultaneously expected to complete domestic labor (including cooking) for free. ", 
            
            "In America, most women work laborious jobs to make ends meet while also doing housework.",
            
            "Those who do have domestic help - of which are usually women - are of higher socio-economic status.",
            
            "“Betty Friedan’s The Feminine Mystique convinced women to regard their housework, especially cooking, as drudger. Freidan did not, in fact, construct this sentiment herself; she merely observed the existent trends in white women’s attitudes about food and housewifery.” (Balasubramanian, 493)", 
            
            "Agriculture is a white, male dominated industry.",
            
            "Often women who do farm do not claim the land they farm as to inheritance practices.",
            
            "“If the nation is truly to scale up sustainable foods, we cannot fixate on the early image of the American farmer as white, male and conservative. Instead, we must acknowledge (as USDA statistics tell us) that the face of farming gis changing, and women and people of color will continue to grow in number as stewards of sustainable agriculture. (Balasubramanian, 494)", 
           
            "Women across race are disproportionately paid less than White Men that hold similar positions in the production, processing, distribution, and retail of food.",
            
            "Within the working food system, to the $1.00 White Men make, Asian Women make $0.68, White Women make $0.63, Black Women make $0.53, and Latina Women make $0.50. (Yen Liu and Apollon, 10)"];

var elem = document.getElementById("change-text");

var counter = 0;
setInterval(change, 7000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    
    if (counter >= text.length) {
        counter = 0;
    }
}


/* ZOOM IN ON IMAGE */
$("#zoom").elevateZoom();
