var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector ("#txt-input");
var outputDiv = document.querySelector ("#output");

btnTranslate.addEventListener ("click", function clickEventHandler() {

    function parse (input) {
    var res = "";
    for (var i=0; i<4; i++)
        res += input[i];
    return res;
    }

    var year = parse (txtInput.value)

    if (isNaN(year))
        alert ("Please enter corrct Date of Birth in specified format");
    else
    {
        if (year%400 == 0)
            outputDiv.innerText = "Yes, you were born in a leap year!! Share it on social media"

        if (year%100 == 0)
            outputDiv.innerText = "No, you were not born in a leap year!!"

        if (year%4 == 0)
            outputDiv.innerText = "Yes, you were born in a leap year!! Share it on social media"
        else
            outputDiv.innerText = "No, you were not born in a leap year!!"
    }
    
});