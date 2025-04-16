const list = document.getElementById('list')
const new_note = document.getElementById('new_note')
const new_desc = document.getElementById('new_desc')
const new_text = document.getElementById('new_text')
const form_login = document.getElementById('form_login')
notes = []  

if(new_note)
new_note.addEventListener('click',() => {
    text = new_text.value
    desc = new_desc.value
    if(text){
        li = document.createElement('li')
        li.className = "note";
        li.innerHTML = 'title: '+text+'<br>desc: '+desc+'<a class="remove">&emsp;&#10005;</a>'
        list.appendChild(li)

        new_text.value = ''
        new_desc.value = ''
    }
})

if(form_login)
form_login.addEventListener('submit', function(event) {
    console.log('[LOG] submit enter')
    // Previne o envio padrão do formulário
    event.preventDefault();
          
    // Pega os valores dos campos
    const nome = document.getElementById('name').value.trim();
    const pass = document.getElementById('pass').value.trim();
    erros = []
    // Validações
    if (nome === '') {
      erros.push('O nome é obrigatório.');
    }
    // Exemplo de validação simples de email:
    if (pass === '') {
      erros.push('A senha é obrigatória.');
    } else if (pass.length < 8) {
      erros.push('A senha deve conter ao menos 8 caracteres.');
    }

    // Se houver erros, exibe as mensagens e não envia o formulário
    if (erros.length > 0) {
      alert(...erros)
    } else {
      console.log('Formulario Aprovado')
      // Se estiver tudo ok, você pode enviar o formulário:
      form_login.getElementById('form').submit();
    }
  });

if(list)
list.addEventListener('click',() => {
    if(event.target.classList.contains('remove')){
        const note = event.target.parentElement;
        note.remove()
    }
})