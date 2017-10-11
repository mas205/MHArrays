function largoComponentes (_array) {
    var res = [];
    for (i=0;i<_array.length;i++){
        res.push(_array[i].length);
    }
    return res;
}
function mayorNumero (_array) {
    var mayorNum = 0;
    for (i=0;i<_array.length;i++){
        if(_array[i]>mayorNum){
            mayorNum = _array[i];
        }
    }
    return mayorNum;
}
function agregarString (_var, _array){
    _array.push(_var);
    return _array;
}
function habilitarEnter (_idTexto,_idFuncion){
    $("#"+_idTexto).keyup(function (event) {
        if (event.keyCode === 13) {
            _idFuncion();
        }
    });
}
function calcularPromedio (_array){
    var num = 0;
    for(i=0;i<_array.length;i++){
        num += _array[i];
    }
    return num/(_array.length-1);
}
