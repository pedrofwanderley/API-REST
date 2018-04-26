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