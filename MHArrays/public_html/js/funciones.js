$().ready(iniciar);

function iniciar() {
    $("#btnE1").click(pEjercicio1);
    habilitarEnter("txt2",pEjercicio2_1);
    $("#btnE2_1").click(pEjercicio2_1);
    $("#btnE2_2").click(pEjercicio2_2);
    habilitarEnter("txt3",pEjercicio3_1);
    $("#btnE3_1").click(pEjercicio3_1);
    $("#btnE3_2").click(pEjercicio3_2);
    habilitarEnter("txt4",pEjercicio4_1);
    $("#btnE4_1").click(pEjercicio4_1);
    $("#btnE4_2").click(pEjercicio4_2);
}

function pEjercicio1() {
    var Array1 = ["hola", "como", "estas", "tu?"];
    $("#resE1").html(largoComponentes(Array1));
}
var arrayE2 = [];
function pEjercicio2_1() {
    var num = $("#txt2").val();
    if (!isNaN(num)) {
        agregarString(num, arrayE2);
        $("#resE2").html("Numero añadido al array!"+num);
        //alert(arrayE2);
    } else {
        $("#resE2").html("Intente nuevamente con un número");
    }
}
function pEjercicio2_2() {
    $("#resE2").html(mayorNumero(arrayE2));
}
var arrayE3=[];
function pEjercicio3_1() {
    var txt1 = $("#txt3").val();
    //agregarString(txt1, arrayE3); tambien funciona pero bueno
    arrayE3.push(txt1);
    $("#txt3").val("");
    $("#resE3").html(txt1+" añadido al array");
}
function pEjercicio3_2() {
    $("#resE3").html(arrayE3);
}
var arrayE4 = [];
function pEjercicio4_1() {
    var num = $("#txt4").val();
    if (!isNaN(num)){
        var num1 = Number(num);
        arrayE4.push(num1);
        $("#txt4").val("");
        $("#resE4").html("Se ha añadido "+num1);
    } else {
        $("#resE4").html("Intente nuevamente con números");
    }
}
function pEjercicio4_2() {
    $("#resE4").html(calcularPromedio(arrayE4).toFixed(3)+" es el promedio de sus numeros");
}