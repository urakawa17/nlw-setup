// alert()
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  // const today = "01/01"
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today)
  alert("Dia adicionado com sucesso!")
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  console.log(nlwSetup.data)
}

// const data = {
//   run: ["01-01", "01-02", "01-06"],
//   water: ["01-04", "01-05"],
//   food: ["01-01", "01-03"],
//   journal: ["01-04", "01-07"],
//   takePills: ["01-02", "01-07"],
// }
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
