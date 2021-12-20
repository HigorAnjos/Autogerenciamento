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
/**
 * <div class="card margin-card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Calex</h5>
            <h6 class="card-subtitle mb-2 text-muted">ARQUITETURA DE COMPUTADORES II</h6>
            <p class="card-text">seg: 07:15 - 08:45 <br>ter: 09:00 - 10:30 <br>qui: 10:45 - 12:15 </p>
        </div>
    </div>
 */
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