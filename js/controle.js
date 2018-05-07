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
function deletar() {
  var id = document.getElementById("id_delete").value;
  var id = document.getElementById("id_delete").value;
  fetch('http://150.165.85.16:9900/api/msgs'+ "/" + id,{
    method: "delete",
    body: JSON.stringify({credentials: 'pwanderley:28101997'})
    }).then(response => 
    response.json().then(json => {
      return json;
    }))
}