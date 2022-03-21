//analisador lexico
const isEmpty = str => !str.trim().length;
var pattern = '[a-zA-Z0-9]';
const specialChars = /[`!@#$%^&()_+\-=\[\]{};':"\\|,.<>\?~]/;
var resultado = []
function analisador(){
  mensagem = document.getElementById("mensagem").value
  console.log(mensagem)
  mensagens = mensagem.split(';')
  console.log(mensagens)
  for(z=0; z<mensagens.length; z++){
    //se estiver espaço vazio
    if(isEmpty(mensagens[z])){
      resultado[z] = mensagens[z]+' -input vazio';
      // console.log(mensagens[z]+' -input vazio');
    }
    //Se forem numeros
    else if(!isNaN(mensagens[z])){
      resultado[z] = mensagens[z]+' -números inteiros formados por um ou mais dígitos';
      // console.log(mensagens[z]+' -números inteiros formados por um ou mais dígitos');
    }
    //se tiver caractere especial
    else if(mensagens[z].match(specialChars)){
      resultado[z] = mensagens[z]+ ' -possui caractere espcial';
      // console.log(mensagens[z]+ ' -possui caractere espcial');
    }
    //verificar se é ou não um comentario
    else if(mensagens[z].includes('/*' && '*/')){
      resultado[z] = mensagens[z]+ ' -é um comentario';
      // console.log(mensagens[z]+' -é um comentario');
    }
    //se tiver letras ou letras e numeros
    else if(mensagens[z].match(pattern)){
      resultado[z] = mensagens[z]+' -identificadores formados por uma letra seguida, ou não, por uma ou mais letra e/ou digito';
      // console.log(mensagens[z]+' -identificadores formados por uma letra seguida, ou não, por uma ou mais letra e/ou digito')
    }
  }
  return document.getElementById('resultados').value = resultado;
}