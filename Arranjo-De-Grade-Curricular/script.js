var form = document.querySelector("form");
var palavra = Array();
var alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var alf_I = -1;

form.addEventListener("submit", objProf);

function objProf (e)
{
    e.preventDefault();
    const formData = new FormData(e.target);
    let newObj = {
        nome: getNome(),
        materia: formData.get("nomemateria"), 
        prof: formData.get("professor"), 
        cred: parseInt(formData.get("creditos")),
        semanaHora: smna(formData), 
    };  

    palavra.push (newObj);
    form.reset();
    console.log(newObj)
    newCard (newObj);
}

function newCard (obj)
{
    const cardContainer = document.getElementById('cards-container');

    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const title = document.createElement('h5');
    const subTitle = document.createElement('h6');
    const p = document.createElement('p');

    card.classList.value = 'card margin-card';
    card.style = 'width: 18rem';
    cardBody.classList.value = 'card-body';
    title.classList.value = 'card-title';
    subTitle.classList.value = 'card-subtitle mb-2 text-muted'; 
    p.classList.value = 'card-text';
    
    title.innerHTML = 'Calex-new';
    subTitle.innerHTML = 'ARQUITETURA DE COMPUTADORES II';
    p.innerHTML = newCard_str_smna(obj);

    cardBody.appendChild(title);
    cardBody.appendChild(subTitle);
    cardBody.appendChild(p);
    card.appendChild(cardBody);

    console.log(card);
    cardContainer.appendChild(card);
}
function newCard_str_smna(card)
{
    let str = '';
    for(key in card.semanaHora)
    {
        if (card.semanaHora[key] === 1)
        {
            str += `${key}: 07:15 - 08:45 <br>`;
        }
        if (card.semanaHora[key] === 17)
        {
            str += `${key}: 09:00 - 10:30 <br>`;
        }
        if (card.semanaHora[key] === 73)
        {
            str += `${key}: 10:45 - 12:15 <br>`;
        }
    }
    return str;
}
function smna (formData)
{
    const horario = parseInt(formData.get("horario"));
    const semana = {segunda: formData.get("seg"), terca: formData.get("ter"), quarta: formData.get("qua"), quinta: formData.get("qui"), sexta: formData.get("sex")}

    for(key in semana)
    {
        if(semana[key])
        {
            semana[key] = horario;
        }else
        {
            semana[key] = 0;
        }
    }
    return semana;
}

function getNome()
{
    alf_I++;
    if (alf_I>25)
    {
        alert('Acabaram as senhas')
    }
    return alf[alf_I];
}