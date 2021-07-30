const checkNumbers = [
    ["zero",0],
    ["one",1],
    ["two",2],
    ["three",3],
    ["four",4],
    ["five",5],
    ["six",6],
    ["seven",7],
    ["eight",8],
    ["nine",9],
];

function convert(){

    var rawString = document.getElementById("raw-string").value;
    var result = convertToString(rawString);
    document.getElementById("result").innerHTML = result;
}

function reset(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("raw-string").value = "";
}

function convertToString(raw){

    var result = 0;
    var resultString = "";
    var separated = raw.split('-');

     for(var i =0;i<separated.length;i++){ 

        for(var j=0;j<10;j++){

            if(separated[i] == checkNumbers[j][0]){
                result +=  checkNumbers[j][1];

                if(resultString != ""){
                    resultString += "+";
                }
                resultString += checkNumbers[j][1];
            }

        } // end loop of preset values

    } // end loop of input values
    
    resultString += "=" + result;
    return resultString;
}
