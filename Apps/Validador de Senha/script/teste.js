function validadorSenha() {
  const password = document.getElementById('password').value;
  const mensagem = document.getElementById('mensagem');

  const caracter = password.length >= 8;
  const maiuscula = /[A-Z]/.test(password);
  const minuscula = /[a-z]/.test(password);
  const numero = /[0-9]/.test(password);
  const especial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  updateRequirement('caracter', caracter);
  updateRequirement('maiuscula', maiuscula);
  updateRequirement('minuscula', minuscula);
  updateRequirement('numero', numero);
  updateRequirement('especial', especial);

  let pontos = 0;
  if (caracter) pontos++;
  if (maiuscula) pontos++;
  if (minuscula) pontos++;
  if (numero) pontos++;
  if (especial) pontos++;

  let texto = "";

  switch(pontos) {
    case 1:
      texto = "Senha muito fraca";
      break;
    case 2:
      texto = "Senha fraca";
      break;
    case 3:
      texto = "Senha média";
      break;
    case 4:
      texto = "Senha forte";
      break;
    case 5:
      texto = "Senha muito forte";
      break;
    default:
      texto = "Senha inválida";
  }

  mensagem.textContent = texto;

  const barra = document.getElementById('barraProgresso');
let largura = (pontos / 5) * 100;
barra.style.width = largura + "%";

if (pontos <= 1) {
  barra.style.backgroundColor = "red";
} else if (pontos === 2) {
  barra.style.backgroundColor = "orangered";
} else if (pontos === 3) {
  barra.style.backgroundColor = "orange";
} else if (pontos === 4) {
  barra.style.backgroundColor = "yellowgreen";
} else if (pontos === 5) {
  barra.style.backgroundColor = "green";
}

  if (pontos <= 2) {
    mensagem.style.color = "red";
  } else if (pontos === 3) {
    mensagem.style.color = "orange";
  } else if (pontos >= 4) {
    mensagem.style.color = "green";
  }
}

function updateRequirement(id, isValid) {
  const element = document.getElementById(id);
  if (isValid) {
    element.classList.add('valid');
    element.classList.remove('invalid');
  } else {
    element.classList.add('invalid');
    element.classList.remove('valid');
  }
}
