const cpf = document.getElementById("cpf")
const telefone = document.getElementById("telefone")
const cep = document.getElementById("cep")

cpf.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "")

  valor = valor.slice(0, 11)

  valor = valor.replace(/(\d{3})(\d)/, "$1.$2")
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2")
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

  this.value = valor
})

telefone.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "")

  valor = valor.slice(0, 11)

  if (valor.length > 10) {
    valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  } else {
    valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
  }

  this.value = valor
})

cep.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "")

  valor = valor.slice(0, 8)

  valor = valor.replace(/(\d{5})(\d)/, "$1-$2")

  this.value = valor
})
