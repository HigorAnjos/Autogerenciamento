function beTrybe() 
{
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();

  var cal = CalendarApp.getCalendarById("higorc.anjos@gmail.com");

  var hoje =
  {
    titulo:       ["[*]Mentorias técnicas", "Momento soft skills",  "Conteúdo do dia",  "Aula ao vivo",  "Exercícios do dia",  "Mentorias técnicas",  " Preenchimento do forms diário",  "Fechamento"],
    horas_inicio: ["13:00:00",              "14:00:00",             "14:40:00",          "16:20:00",     "18:00:00",           "18:30:00",            "19:20:00",                        "19:20:00"],
    horas_fim:    ["13:50:00",              "14:40:00",             "16:20:00",          "18:00:00",     "18:30:00",           "19:20:00",            "19:30:00",                        "20:00:00"],
    dia:"28",
    mes: "October",
    ano: "2021",
    diasMes: "31",
    formato: "UTC-3"

  } 

  for (let i=0; i<8; i++)
  {
    cal.createEvent(hoje.titulo[i], 
                  new Date( hoje.mes+" " + hoje.dia+ ','+ " " + hoje.ano +" "+hoje.horas_inicio[i]+ " "+  hoje.formato), 
                  new Date( hoje.mes+" " + hoje.dia+ ','+ " " + hoje.ano +" "+hoje.horas_fim[i]+ " "+  hoje.formato));

  }
  
}



