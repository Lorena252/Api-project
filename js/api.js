
const getJobs = async () =>{
    //  show("#spinner")
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


//cargo datos segun id en el form//
const formData = async (id) =>{
const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`)
const data = await response.json()
console.log(id)
console.log(data)
btnEditForm(data,id)
}

////////editar job///////////
const edit = async (id) =>{
    const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`)
    const data = await response.json()
    console.log(data)
    console.log(id)
//  editJob(data,id)


}

/////////////////////



const deleteJob = async (id) =>{
const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`,{
    method: "DELETE",
}).then(response => {
    if (response.ok) {
        return response.json();
        
    }
})
hide("#popup-modal")
hide("#detail")
show("#containers")
getJobs()

}

//mostrar detalle//
const detailJob = async (id) =>{
    const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`);
    const data = await response.json();
    setTimeout(() =>{
     detailCard(data);
    
    },2000);
}




window.onload = getJobs()

