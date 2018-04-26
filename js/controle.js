function escrever(){
  var titulo = document.getElementById("titulo").value;
  var msg = document.getElementById("msg").value;
  var author = document.getElementById("author").value;
  var obj = {};
  obj.title = titulo;
  obj.msg = msg;
  obj.author = author;
  obj.id = "pwanderley";
  enviarMsg(obj);
}
function enviarMsg(mensagem){
  

}
let envia = require('axios');
envia.post('http://150.165.85.16:9900/api/msgs',{
  title: 'Mural',
  msg: 'Terceiro envio',
  author:'Pedro',
  credentials:'pwanderley:28101997'
}) 
