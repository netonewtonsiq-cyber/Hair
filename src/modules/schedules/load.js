import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

//seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //Obtem a data do input
    const date = selectedDate.value
    
    //Buscar na API os agendamentos para carregar do lado direito
    const dailySchedules = await scheduleFetchByDay({date})
    
    //Exibe os agendamentos
    scheduleShow ({dailySchedules})

    //renderiza as horas disponiveis:
    hoursLoad({date, dailySchedules})


    //Buscar horarios disponiveis do lado esquerdo no fomr. Horarios futuros e que n estao ja agendados
}