
const getJobs = async () =>{
    show("#spinner")
 let response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs`)
 let data = await response.json()
 renderJobs(data)
console.log(data)
}


// POST NUEVO TRABAJO//

const addJob = async (job) =>{
  try {
const response = await  fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs`,{
    method: "POST",
      headers: {"content-type" : "application/json"},
    body: JSON.stringify(job),
}
)
   const data = await response.json()
   if(data){
    getJobs()
   }
  }catch(error){
 alert("error de ejecucion")
  }
}






//FUNCION EDITAR TRABAJO//









const deleteJob = async (id) =>{
const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`,{
    method: "DELETE",
}).then(response => {
    if (response.ok) {
        return response.json();
    }
})
console.log(response)

}











window.onload = getJobs()

