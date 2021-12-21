var form = document.querySelector("form");
var palavra = [];
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
    newCard (newObj);
}

function newCard (obj)
{
    const cardContainer = document.getElementById('cardscontainer');

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
    
    title.innerHTML = obj.prof;
    subTitle.innerHTML = obj.materia;
    p.innerHTML = newCard_str_smna(obj);

    cardBody.appendChild(title);
    cardBody.appendChild(subTitle);
    cardBody.appendChild(p);
    card.appendChild(cardBody);

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

/**Buscar Arranjo */

const arranjosClick =  document.getElementById('btnarranjo');

arranjosClick.addEventListener('click', arranjo);

function arranjo ()
{
    function distintos (A, B, C, D, E)
{
    if(A !== B && A !== C && A !== D && A !== E && B !== C && B !== D  && B !== E && C !== D  && C !== E && D !== E )
    {
        return true
    }
    return false
}


function validarHorario (A, B, C, D, E)
{
   
    let soma = 0
    let i = 0
    let sen = ["segunda", "terca", "quarta", "quinta", "sexta"]
    for(i=0; i<5; i++)
    {
        soma = A.semanaHora[sen[i]] + B.semanaHora[sen[i]] + C.semanaHora[sen[i]] + D.semanaHora[sen[i]] + E.semanaHora[sen[i]]

        if(soma === 1)
        { // Primerio horario
            continue;

        }else if (soma === 17)
        { // Segundo horario
            continue;

        }else if (soma === 73)
        { // Ultimo horario
            continue;

        }else if (soma === 18)
        { // Primeiro e Segundo horario
            continue;

        }else if (soma === 74)
        { // Primeiro e Ultimo horario
            continue;

        }else if(soma === 90)
        { // Dois Ultimos horarios
            continue;

        }else if (soma === 91)
        { // Todos os horarios
            continue;

        }else if (soma == 0)
        { // sem aula
            continue;
            
        }else 
        { // conflito
            i=96
        }

       
    }
    if(i===97)
    {
        return false
        
    }
    return true
    
    
}

let nomeMaterias = ""
let listaMaterias = []


for (let i=0; i<palavra.length; i++)
{
    for (let j=0; j<palavra.length; j++)
    {
        for (let k=0; k<palavra.length; k++)
        {
            for (let l=0; l<palavra.length; l++)
            {
                for (let m=0; m<palavra.length; m++)
                {
                    let creditos = palavra[i].cred+palavra[j].cred+palavra[k].cred+palavra[l].cred+palavra[m].cred 
                    if(creditos === 22 || creditos === 20 )
                    {
                        if(distintos(palavra[i].nome,palavra[j].nome,palavra[k].nome,palavra[l].nome,palavra[m].nome))
                        {   
                            if(validarHorario(palavra[i],palavra[j],palavra[k],palavra[l],palavra[m]))
                            {
                                nomeMaterias = palavra[i].nome+palavra[j].nome+palavra[k].nome+palavra[l].nome+palavra[m].nome
                                listaMaterias.push(nomeMaterias)
                                
                            }
                            

                        }
                        
                    }
            
                }   
        
            }   
    
        }   
    }   
}


 /// filtrar os anagramas
//console.log("filtrar os anagramas")

function anagrama(stringA, stringB)
{
    let tem = 0
    for(let i=0; i<stringA.length; i++)
    {
        for(let j=0; j<stringB.length; j++)
        {
            if(stringA[i] === stringB[j])
            {
                tem++
            }
        }
    }
    if(tem === 5)
    {// stringA e anagrama stringB
        return true
    }
    return false
}

let listaUnica = []
listaUnica.push(listaMaterias.shift())
while(listaMaterias.length)
{   
    let j=0
    let aux = listaMaterias.shift()

    for(j =0; j< listaUnica.length && !anagrama(listaUnica[j], aux); j++)
    {}

    if (j == listaUnica.length)
    {
        listaUnica.push(aux)
    }
}

const objTable = makeObjTable(listaUnica);
newTable(objTable[0]);
for (let i = 0; i< objTable.length; i++)
{
    //newTable(objTable[i]);
}

}
function makeObjTable (listaUnica)
{
    let allOp = [];
    let op = [];

    for(let i=0; i< listaUnica.length; i++)
    {
        for(let k=0; k< listaUnica[i].length; k++)
        {
            for(let j=0; j< palavra.length; j++)
            {
                if(listaUnica[i][k] === palavra[j].nome)
                {
                    op.push(palavra[j])
                }
            }
        }
        
        allOp.push(op);
        op = [];
    }
    return allOp;
}
function newTable (obj)
{
console.log(obj[0].materia);

    //LISTA DE MATERIAS
    const space =  document.createElement('div');
    const card = document.createElement('div');
    const ul = document.createElement('ul');

    const li0 = document.createElement('li');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');   

    /*Add class*/
    space.classList.add('space');
    card.classList.add('card');
    card.style = "width: 18rem";
    ul.classList.value = 'list-group list-group-flush';

    li0.classList.add('list-group-item');
    li1.classList.add('list-group-item');
    li2.classList.add('list-group-item');
    li3.classList.add('list-group-item');
    li4.classList.add('list-group-item');

    /*Add info*/
    li0.innerHTML = obj[0].materia;
    li1.innerHTML = obj[1].materia;
    li2.innerHTML = obj[2].materia;
    li3.innerHTML = obj[3].materia;
    li4.innerHTML = obj[4].materia;

    /*Make Lista tateral a tabela */
    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    card.appendChild(ul);

    /*TABELA DE HORARIOS */
    // Thead
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const trpai = document.createElement('tr');
    const horario = document.createElement('th');
    const seg = document.createElement('th');
    const ter = document.createElement('th');
    const qua = document.createElement('th');
    const qui = document.createElement('th');
    const sex = document.createElement('th');

    /*Add class*/
    



}


window.onload = function ()
{
    palavra = getStorage();
    setData();
    initCards();
};

const btnstorage = document.getElementById('storage');
btnstorage.addEventListener('click', setStorage);

function setStorage ()
{
    localStorage.setItem('palavra', JSON.stringify(palavra))
}

function getStorage ()
{
    let storage = localStorage.getItem('palavra');
    if(storage)
    {
        storage = JSON.parse(storage);
        return storage;
    }
    return [];
}
function initCards ()
{
    const cardContainer = document.getElementById('cardscontainer');
    for (obj of palavra)
    {
        newCard(obj);
    }
}

function setData ()
{
palavra.push({nome:"A", materia:"INTERFACE HOMEM-MÁQUINA" , prof:"calex",cred: 4, semanaHora: {segunda: 0, terca: 17, quarta: 0, quinta: 0, sexta: 17}});
palavra.push({nome:"B", materia:"REDES DE COMPUTADORES II", prof:"calex" ,cred: 4, semanaHora: {segunda: 0, terca: 73, quarta: 0, quinta: 0, sexta: 73}});
palavra.push({nome:"C", materia:"ARQUITETURA DE COMPUTADORES II", prof:"calex" ,cred: 6, semanaHora: {segunda: 17, terca: 0, quarta: 0, quinta: 17, sexta: 0}});
palavra.push({nome:"D", materia:"CIRCUITOS ELÉTRICOS I" ,cred: 4, prof:"calex" , semanaHora: {segunda: 1, terca: 1, quarta: 0, quinta: 0, sexta: 1}});
palavra.push({nome:"E", materia:"Equações Diferenciais" ,cred: 4, prof:"calex" , semanaHora: {segunda: 0, terca: 17, quarta: 0, quinta: 0, sexta: 17}});
palavra.push({nome:"K", materia:"SISTEMAS OPERACIONAIS I" ,cred: 4, prof:"calex" , semanaHora: {segunda: 1, terca: 0, quarta: 0, quinta: 1, sexta: 0}});
palavra.push({nome:"L", materia:"PROJETO E ANÁLISE DE ALGORÍTMOS II", prof:"calex"  ,cred: 4, semanaHora: {segunda: 0, terca: 1, quarta: 0, quinta: 0, sexta: 1}});
palavra.push({nome:"M", materia:"LINGUAGENS FORMAIS E AUTÔMATOS", prof:"calex"  ,cred: 6, semanaHora: {segunda: 17, terca: 0, quarta: 17, quinta: 17, sexta: 0}});
palavra.push({nome:"N", materia:"VALIDAÇÃO E TESTES DE SISTEMAS", prof:"calex"  ,cred: 6, semanaHora: {segunda: 17, terca: 0, quarta: 17, quinta: 17, sexta: 0}});
}
