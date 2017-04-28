console.log("hello 2");


function add(){
        // Geting the numbers from the Input Boxes
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);
        // Adding the numbers
    var total = number1 + number2;

        // Populates the Total Box.
    document.getElementById("num3").value = total;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";


    console.log(total);
}
