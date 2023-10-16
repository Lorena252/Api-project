const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const hide = (selector) => $(selector).classList.add("hidden");
const show = (selector) => $(selector).classList.remove("hidden");
const cleanContainer = (selector) => ($(selector).innerHTML = "");



const saveJob = () =>{
   let newJob = {
      name : $("#name-form").value,
      image : "",
      description: $("#description-form").value,
      location: $("#location-form").value,
      category: $("#category-form").value,
      seniority: $("#señority-form").value,
      // benefits: {
      //   vacation: $("#vacation").value,
      //     health_ensurance: $("health").value,
      //     internet_paid: $("#internet").checked,
      // },
      // salary:  Number($("#salary-form").value),
      // long_term: $("long-term".checked),
      // languages: $("#languajes").value,
  
    }
console.log(newJob)
}


const renderJobs = (data) =>{
   for (const {name,image,description,location,category,seniority} of data){
      console.log(data)
     $("#containers").innerHTML += `
     <div class="card m-2   " id="containers-card" style="width: 18rem; border:  solid rgba(0,0,0,.125)"> 
     <div class="card-body m-2">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description} </p>
      <div class="flex">
          <p style="background-color: rgb(238, 49, 245); margin: 4px; ">${location}</p>
          <p style="background-color: rgb(238, 49, 245); margin: 4px;">${category} </p>
          <p  style="background-color: rgb(238, 49, 245); margin: 4px;">${seniority} </p>
      </div>
      <button type="button" class="bg-cyan-500 hover:bg-cyan-600 ... p-1 text-slate-50  font-semibold border-double border-2 border-sky-500 rounded " style="margin: 6px;">See Details</button>
       <div class="invisible">
         <button type="button" class="btn bg-green-700 text-black font-normal p-1  rounded " style="margin: 6px;">Edit-job</button>
         <button type="button" class="btn bg-rose-600 text-black font-normal p-1 rounded" style="margin: 6px;">Delete-job</button>
       </div>
    </div> 
  </div>
     
     `
  }
  }
  





$("#btn-create").addEventListener("click", () =>{
show("#form-job")
hide("#nav")
})


$("#btn-home").addEventListener("click", () =>{
   hide("#form-job")
    show("#nav")
    })


 $("#btn-submit").addEventListener("click", () => {

 })