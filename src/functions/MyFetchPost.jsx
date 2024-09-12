function MyFetchPost() {

    let usuario = {
        nombre: 'Aitana',
        edad: 25
    }

    fetch('https://reqres.in/api/users', {
        method: 'POST', 
        body: JSON.stringify(usuario), 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json())
    .then(console.log).catch(error => {
        console.log('Error en la petición API POST');
        console.log(error);
    });

    return(
        <>
            <div>
                <h1>
                    Programa FETCH POST
                </h1>
            </div>
        </>
    )
}

export default MyFetchPost;