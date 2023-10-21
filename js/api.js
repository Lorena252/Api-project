
const getJobs = async () =>{
 let response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs`)
 let data = await response.json()
 show("#spinner")
setTimeout(()=>{
 renderJobs(data)
console.log(data)
filterOptions(data)
show("#containers")
hide("#popup-modal")
},2000)

// $("#location").addEventListener("change", () =>{
//    const miFunc =  filterLocation(data)
//    renderJobs(miFunc)
//  })
 
// $("#señority").addEventListener("change", () =>{
//     const selectedSeñority = filterSeniority(data)
//     renderJobs(selectedSeñority)
// })

// $("#category").addEventListener("change", () =>{
//     const selectedCategory = filterCategory(data)
//     renderJobs(selectedCategory)
// })

//   filtros(data)
}


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
getJobs()
setTimeout(() =>{
     show("#containers")
}, 2000)

}

const detailJob = async (id) =>{
    const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`);
    const data = await response.json();
    show("#spinner")
    hide("#containers")
    setTimeout(() =>{
     detailCard(data);
    },2000);
}


const filtersOptions = async () =>{
    let response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs`)
    let data = await response.json()
   filtros(data)
}



window.onload = getJobs()

