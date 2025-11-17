export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            
            //Removendo a classe hour-selected de todas li n selecionadas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })
            //Adiciona a classe ao elemento selecionado
            selected.target.classList.add("hour-selected")
        })
    })
}