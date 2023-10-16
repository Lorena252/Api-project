const getJobs = () =>{
    fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs`)
    .then((response) => response.json())
    .then((data) => renderJobs(data))
}







window.onload = getJobs()

