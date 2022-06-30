/**
 * Variáveis com referencias dos inputs
 */


var fileInput = document.getElementById('file-input');
var stringInput = document.getElementById('string-input');

var ref = firebase.storage().ref('atividades')
var url_final = "teste";
/**
 * Metodo que observa mudanças no input de arquivo
 */
fileInput.onchange = function (event) {
    var arquivo = event.target.files[0];

    ref.child('atividades').put(arquivo).then(snapshot =>{
        console.log('snapshot', snapshot);

        ref.child('atividades').getDownloadURL().then(url =>{
            console.log('String para download', url);
            document.getElementById("demo").innerHTML = url;
           
        });
    });
}

/**
 * Metodo que observa mudanças no input de string
 */
stringInput.onchange = function (event) {

}