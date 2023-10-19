
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

const formData = async (id) =>{
const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id} `)
.then(response => {
    if (response.ok) {
        return response.json();
    }
  //   // handle error
  //  }).then(task => {
      
  // }).catch(error => {
  //   // handle error
   })

 $("#name-form").value = response.name,
 $("#image-form").value = response.image,
 $("#description-form").value = response.description,
 $("#location-form").value = response.location,
 $("#category-form").value = response.category,
 $("#señority-form").value = response.seniority,
//  $("#vacation-form").value = response.vacation
//  $("#health-form").value = response.health_ensurance,
//  $("#internet-form").checked = response.long_term,
$("#salary-form").value= response.salary
console.log(response)
return response
}


//FUNCION EDITAR TRABAJO//
// const editedJob = async (id) =>{
// const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id} `, {
//   method: 'PUT', // or PATCH
//   headers: {'content-type':'application/json'},
//   body: JSON.stringify({
//     name : $("#name-form").value,
//     image : $("#image-form").value,
//     description: $("#description-form").value,
//     location: $("#location-form").value,
//     category: $("#category-form").value,
//     seniority: $("#señority-form").value,
//     // benefits: {
//     //   vacation: $("#vacation-form").value,
//     //     health_ensurance: $("#health-form").value,
//     //     internet_paid: $("#internet-form").checked,
//     //  },
//     salary:  Number($("#salary-form").value)

//   })
// }).then(response => {
//   if (response.ok) {
//       return response.json();
//   }
// //   // handle error
// //  }).then(task => {
    
// // }).catch(error => {
// //   // handle error
//  })

// return response
// }



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

//mostrar detalle//
const detailJob = async (id) =>{
    const response = await fetch(`https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`);
    const data = await response.json();
    setTimeout(() =>{
     detailCard(data);
    
    },2000);
}







window.onload = getJobs()

