const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const hide = (selector) => $(selector).classList.add("hidden");
const show = (selector) => $(selector).classList.remove("hidden");
const cleanContainer = (selector) => ($(selector).innerHTML = "");

const randomId = () => self.crypto.randomUUID();

const saveJob = () =>{
   let newJob = {
   //   id : randomId(),
      name : $("#name-form").value,
      image : $("#image-form").value,
      description: $("#description-form").value,
      location: $("#location-form").value,
      category: $("#category-form").value,
      seniority: $("#señority-form").value,
      benefits: {
        vacation: $("#vacation-form").value,
          health_ensurance: $("#health-form").value,
          internet_paid: $("#internet-form").checked,
       },
      salary:  Number($("#salary-form").value),
      // long_term: $("long-term".checked),
      // languages: $("#languajes").value,
    
    }
addJob(newJob)
}



const cleanForm = () =>{
   $("#name-form").value = ""
   $("#image-form").value =""
   $("#description-form").value =""
   $("#location-form").value = ""
   $("#category-form").value = ""
   $("#señority-form").value = ""
   $("#vacation-form").value = ""
   $("#health-form").value = ""
   $("#internet-form").checked.value = ""
$("#salary-form").value= ""
}

const renderJobs = (data) =>{
  cleanContainer("#containers")
   for (const {id, name,image,description,location,category,seniority} of data){
     $("#containers").innerHTML += `
     <div class="card m-2   " id="containers-card" style="width: 18rem; border:  solid rgba(0,0,0,.125)"> 
     <div class="card-body m-2">
      <h5 class="card-title">${name}</h5>
      <img src=${image}>
      <p class="card-text">${description}</p>
      <div class="flex">
          <p style="background-color: rgb(238, 49, 245); margin: 4px; ">${location}</p>
          <p style="background-color: rgb(238, 49, 245); margin: 4px;">${category} </p>
          <p  style="background-color: rgb(238, 49, 245); margin: 4px;">${seniority} </p>
      </div>
      <button type="button" class=" bg-cyan-500 hover:bg-cyan-600 ... p-1 text-slate-50  font-semibold border-double border-2 border-sky-500 rounded id="${id}" onclick="detailJob(${id})" style="margin: 6px;">See Details</button>
       <div id="btn-edit-delete" class="hidden">
         <button type="button" class="btn bg-green-700  hover:bg-green-500  text-black font-normal p-1  rounded " style="margin: 6px;"   >Edit-job</button>
         <button type="button" class="btn bg-rose-600 text-black font-normal p-1 rounded" style="margin: 6px;"  ">Delete-job</button>
       </div>
    </div> 
  </div>
     `
  }
  hide("#spinner")
  }
  

//show modal//
const showModal = (id) =>{
   console.log(id)
   show("#popup-modal")
   // $("#btn-delete-job").setAttribute("id", id);
   // $("#confirm-delete").setAttribute("data-id", id);
$("#buttons").innerHTML = ` 
<button id="confirm-delete" onclick="deleteJob(${id})" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
Yes, I'm sure
</button>
<button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
`
}

const jobDelete = (id) => {
   console.log(id)
deleteJob(id)
getJobs()
 };



////////////cargar datos form////////
const btnEditForm = (data,id)=>{
   show("#form-job")
   show("#btn-edit-job")
   hide("#btn-submit")
 hide("#nav")
 hide("#containers")
$("#btn-edit-job").setAttribute("data-id", id)

console.log(id)
 $("#name-form").value = data.name,
 $("#image-form").value = data.image,
 $("#description-form").value = data.description,
 $("#location-form").value = data.location,
 $("#category-form").value = data.category,
 $("#señority-form").value = data.seniority,
//  $("#vacation-form").value = data.benefits.vacation
//  $("#health-form").value = data.benefits.health_ensurance,
//  $("#internet-form").checked.value = data.benefits.long_term,
$("#salary-form").value= data.salary
// formData(id)

}


//detail job card//
const detailCard = ({
id,
name,
image,
description,
location,
category,
seniority,
}) =>{
 console.log(name)
show("#btn-edit-delete")
show("#container"),
show("#detail")
hide("#containers"),
$("#detail").innerHTML = `
<div class="card ml-2 mt-2" id="containers-card" style="width: 18rem; border:  solid rgba(0,0,0,.125)"> 
<div class="card-body m-2">
 <h5 class="card-title">${name}</h5>
 <img src=${image}>
 <p class="card-text">${description}</p>
 <div class="flex">
     <p style="background-color: rgb(238, 49, 245); margin: 4px; ">${location}</p>
     <p style="background-color: rgb(238, 49, 245); margin: 4px;">${category} </p>
     <p  style="background-color: rgb(238, 49, 245); margin: 4px;">${seniority}</p>
 </div>
  <div class="">
    <button type="button" class="btn bg-green-700  hover:bg-green-500  text-black font-normal p-1  rounded " style="margin: 6px;"  onclick="formData('${id}')">Edit-job</button>
    <button type="button" class="btn bg-rose-600 text-black font-normal p-1 rounded" style="margin: 6px;" onclick="showModal(${id})"" >Delete-job </button>
  </div>
</div> 
</div>
`
}



const editJob = (data,id) =>{
const jobId = $("#btn-edit-job").getAttribute("data-id", id)
console.log(jobId)
}



$("#btn-create").addEventListener("click", () =>{
show("#form-job")
hide("#nav")
hide("#btn-edit-job")
show("#btn-submit")
hide("#detail")
})


$("#btn-home").addEventListener("click", () =>{
   hide("#form-job")
    show("#nav")
    show("#containers")
    hide("#detail")
   getJobs()
    })


 $("#btn-submit").addEventListener("click", () => {
    saveJob()
    hide("#form-job")
    show("#nav")
    cleanForm()
 })

 $("#btn-edit-job").addEventListener("click", () =>{
console.log("fdf")
edit()
 })


