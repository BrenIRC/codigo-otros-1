const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//Correccion: No se estan trayendo los selectores de manera adecuada por lo cual se colocan los selectores
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//away marca error en VSC por que no se declara como async
async function displayUser(username) {
  //usar try-catch para poder manejar errores
try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';

  //No se coloco el Fetch de la API
  const response = await fetch(`${usersEndpoint}/${username}`);
//No se valida la repsueta
  if (!response.ok) {
    throw new Error(`Error al obtener datos de usuario: ${response.status}`);
  }
//Respuesta JSON
  const data = await response.json();


//DOM con datos de usuario
  $n.textContent = data.name || 'Nombre no disponible'; // Fallback en caso de datos nulos
    $b.textContent = data.blog || 'Blog no disponible';
    $l.textContent = data.location || 'Ubicación no disponible';
  } catch (err) {
    // Errorres
    handleError(err);
  }
}

  
 


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);