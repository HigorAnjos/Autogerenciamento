var form = document.querySelector("form");
var listMaterias = Array();


form.addEventListener("submit", objProf);

function objProf (e)
{
    e.preventDefault();
    const formData = new FormData(e.target);
    let newObj = {mat: formData.get("nomemateria"), prof: formData.get("professor") , horario: formData.get("horario")};
    listMaterias.push (newObj);
    form.reset();
    newCard (newObj);
}

function newCard (obj)
{

}