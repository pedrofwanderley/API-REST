function escrever(){
  var titulo = document.getElementById("titulo").value;
  var msg = document.getElementById("msg").value;
  var author = document.getElementById("author").value;
  var id = document.getElementById("Id").value;
  var senha = document.getElementById("senha").value;
  var obj = {};
  obj.title = titulo;
  obj.msg = msg;
  obj.author = author;
  obj.id = id + ":" + senha;
  enviarMsg(obj);
}
function enviarMsg(mensagem){
  axios.post('http://150.165.85.16:9900/api/msgs',{
  title: mensagem.title,
  msg: mensagem.msg,
  author:mensagem.author,
  credentials:mensagem.id
}) 

}
function deletar(id){
  axios.delete('http://150.165.85.16:9900/api/msgs/' + id, {
    headers: {
      'uid': 'pwanderley',
      'Content-Type': 'application/json',
      credentials: 'pwanderley:28101997'
    }
  })
}