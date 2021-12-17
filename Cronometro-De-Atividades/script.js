//const moment = require("moment");
let cron;

const clockNow = document.getElementById("clock");

const clock = () => {
  clockNow.innerHTML = moment().format('HH:mm:ss');
}
setInterval(clock, 1000);

const initDataBase = (nome) => {
  const data = [{
    day: moment().format('L'),
    time: [], 
  }]
  localStorage.setItem(nome, JSON.stringify(data));
}

const startClock = (e) => {
  pauseClock();
  const cards = document.getElementsByClassName('card');
  console.log(e.target.id)
  for(let i = 0; i < cards.length; i+=1)
  {
    if (cards[i].childNodes[2].childNodes[0].id === e.target.id)
    {
      const beginning = moment();
      cron = setInterval(() => {
        let horas = moment().diff(beginning, 'hour');
        let minutos = moment().diff(beginning, 'minute');
        let segundos =  moment().diff(beginning, 'second');
        cards[i].childNodes[0].innerHTML = `${horas}:${minutos}:${segundos}`;
      }, 1000);
    }
  }
}

const pauseClock = (e) => {
  console.log("Pause")
  clearInterval(cron);

}

const deleteClock = (e) => {
  pauseClock();
  const cards = document.getElementsByClassName('card');
  console.log(e.target.id)
  for(let i = 0; i < cards.length; i+=1)
  {
    if (cards[i].childNodes[2].childNodes[0].id === e.target.id)
    {
      cards[i].childNodes[0].innerHTML = '00:00:00';
    }
  }
}

const setCard = (NomeAtividade) => {
  const clockssection = document.getElementById('clocks-section');

  const card = document.createElement ('div');
  const h2 = document.createElement ('h2');
  const p = document.createElement ('p');
  const footer = document.createElement ('footer');
  const btnStart = document.createElement ('button');
  const btnPause = document.createElement ('button');
  const btnDelete = document.createElement ('button');
  const btnStorage = document.createElement ('button');

  btnStart.addEventListener('click', startClock);
  btnPause.addEventListener('click', pauseClock);
  btnDelete.addEventListener('click', deleteClock);
  btnStorage.addEventListener('click', storageClock);

  h2.innerHTML = '00:00:00';
  p.innerHTML = `${NomeAtividade}`;
  btnStart.innerHTML = 'Start';
  btnPause.innerHTML = 'Pause';
  btnDelete.innerHTML = 'Delete';
  btnStorage.innerHTML = 'Storage';

  btnStart.id = NomeAtividade;
  btnPause.id = NomeAtividade;
  btnDelete.id = NomeAtividade;
  btnStorage.id = NomeAtividade;

  h2.id = 'display';

  card.classList.add('card');
  h2.classList.add('title');
  p.classList.add('subtitle');
  p.classList.add('is-6');
  footer.classList.add('card-footer');
  btnStart.classList.add('button');
  btnStart.classList.add('is-success');
  btnPause.classList.add('button');
  btnPause.classList.add('is-info');
  btnDelete.classList.add('button');
  btnDelete.classList.add('is-danger');
  btnStorage.classList.add('button');
  btnStorage.classList.add('is-primary');

  footer.appendChild(btnStart);
  footer.appendChild(btnPause);
  footer.appendChild(btnDelete);
  footer.appendChild(btnStorage);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(footer);

  clockssection.appendChild(card);

  initDataBase(NomeAtividade);
}

const storageClock = () => {};

const insertDataClock = (nome, start, end) => {
  let data = JSON.parse(localStorage.getItem(nome));
  let endList = data.length-1;
  let isToday = (data[endList].day === moment().format('L'))
  if (isToday)
  {
    data[endList].time.push({start, end});
  }
  localStorage.setItem(nome, JSON.stringify(data));
}

window.onload
{
  setCard('Corse');
  setCard('MinerarSetencas');
  setCard('Ingles');
  setCard('Faculade');
  setCard('Programacao');


  insertDataClock("Faculade", '20:00', '22:00');
}








