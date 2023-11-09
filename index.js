
/*//const formulario=document.querySelector('form');
const button=document.getElementById('insertar');
const titulo=$('#name')[0];
//const titulo=document.getElementById('name');
const synopsis=document.getElementById('synopsis');
const genre=document.getElementById('genre');
const director=document.getElementById('director');
const duration=document.getElementById('duration');
const actors=document.getElementById('actors');*/
const button=document.getElementById('insertar');



button.addEventListener('click', function (e) {
    e.preventDefault();
    const titulo=$('#name')[0];
    //const titulo=document.getElementById('name');
    const synopsis=document.getElementById('synopsis');
    const genre=document.getElementById('genre');
    const director=document.getElementById('director');
    const duration=document.getElementById('duration');
    const actors=document.getElementById('actors');

    const newPeli = {
        n: titulo.value,      // Se debe usar .value para obtener el valor de los elementos de entrada
        synop: synopsis.value,
        gen: genre.value,
        dura: duration.value,
        dir:director.value,
        act: actors.value
    };
    console.log(newPeli);
    const url = 'http://localhost:3000/peliculas/agregar?token=ok';
    /*$.post(url,newPeli).then((response)=>{
        console.log('Valores enviados: ', response);
    }).catch((err)=>{
        console.log('Error: ', err);
    }
    );*/
    $.ajax({
        url:url,
        type:'POST',
        data:JSON.stringify({
            n: "Frozen",      // Se debe usar .value para obtener el valor de los elementos de entrada
            synop: "Elsa hiere a su hermana accidentalmente",
            gen: "Fantasia",
            dura: 120,
            dir: "Guillermo del toro",
            act: "Maria antonieta"

        }),
        contentType:"application/json",
        dataType:'json',
        success: (response) => {
            console.log(response);
            alert('funciona')
        },
        error: () => {
            alert('error');
        }
        //terminar edicion
    
    });

    // Limpiar los campos después de enviar
    titulo.value = '';
    synopsis.value = '';
    genre.value = '';
    director.value='';
    duration.value = '';
    actors.value = '';
});




