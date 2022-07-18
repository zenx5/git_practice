var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

document.querySelector('#get').addEventListener('click', async function() {
    const data = await( await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();
    document.querySelector('#code').innerHTML = JSON.stringify( data )
})