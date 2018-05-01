function escrever(){
  var titulo = document.getElementById("titulo").value;
  var msg = document.getElementById("msg").value;
  var author = document.getElementById("author").value;
  var obj = {};
  obj.title = titulo;
  obj.msg = msg;
  obj.author = author;
  obj.id = "pwanderley:28101997";
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
function deletar(){
  axios({
    method: 'delete',
    url: `${'http://150.165.85.16:9900/api/msgs/2'}`,
    data: null,
    withCredentials: true,
    headers: {'Content-Type': 'application/json'},
    credentials: 'pwanderley:28101997'
  
})
}