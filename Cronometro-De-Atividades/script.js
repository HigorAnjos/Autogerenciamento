const clockNow = document.getElementById("clock");

const clock = () =>
{
  clockNow.innerHTML = moment().format('HH:mm:ss');
}
setInterval(clock, 1000);
const set = (obj) => {
  console.log(obj.innerHTML = moment().format('HH:mm:ss'));
}
const startClock = (e) => {
 
  let i = 0;
  const cards = document.getElementsByClassName('card');
  console.log(e.target.id)
  for(let i = 0; i < cards.length; i+=1)
  {
    if (cards[i].childNodes[2].childNodes[0].id === e.target.id)
    {
      set(cards[i].childNodes[0]);
    }
  }
}

const pauseClock = (e) => {

}

const deleteClock = (e) => {

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

  btnStart.addEventListener('click', startClock);
  btnPause.addEventListener('click', pauseClock);
  btnDelete.addEventListener('click', deleteClock);

  h2.innerHTML = '00:00:00';
  p.innerHTML = `${NomeAtividade}`;
  btnStart.innerHTML = 'Start';
  btnPause.innerHTML = 'Pause';
  btnDelete.innerHTML = 'Delete';

  btnStart.id = NomeAtividade;
  btnPause.id = NomeAtividade;
  btnDelete.id = NomeAtividade;

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

  footer.appendChild(btnStart);
  footer.appendChild(btnPause);
  footer.appendChild(btnDelete);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(footer);

  clockssection.appendChild(card);

}
window.onload
{
  setCard('Corse');
  setCard('MinerarSetencas');
  setCard('Ingles');
  setCard('Faculade');
}


























































/// Secao adicionar novo cronometro
/* Formulario
const form = () => {
  const addNew = document.getElementById('addnew');

  const form = document.createElement ('form');
  const labelAtv = document.createElement ('span');
  const labelDesc = document.createElement ('span');
  const atividade = document.createElement ('input');
  const desc = document.createElement('textarea');

  labelAtv.innerHTML = 'Nome da Atividade:';
  labelDesc.innerHTML = 'Descricao:';
  atividade.type = "text";
 
  form.appendChild(labelAtv);
  form.appendChild(atividade);
  form.appendChild(labelDesc);
  form.appendChild(desc);
  
  addNew.appendChild(form);
}
const btnAdd = document.getElementById('add');
btnAdd.addEventListener ('click', form);
*/