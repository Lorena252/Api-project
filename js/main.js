const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const hide = (selector) => $(selector).classList.add("hidden");
const show = (selector) => $(selector).classList.remove("hidden");
const cleanContainer = (selector) => ($(selector).innerHTML = "");

const saveJob = () => {
  let newJob = {
    name: $("#name-form").value,
    image: $("#image-form").value,
    description: $("#description-form").value,
    location: $("#location-form").value,
    category: $("#category-form").value,
    seniority: $("#señority-form").value,
    benefits: {
      vacation: $("#vacation-form").value,
      health_ensurance: $("#health-form").value,
      internet_paid: $("#internet-form").checked,
    },
    salary: Number($("#salary-form").value),
    long_term: $("#long-term").checked,
    languages: languages(),
  };
  addJob(newJob);
};

const cleanForm = () => {
  $("#name-form").value = "";
  $("#image-form").value = "";
  $("#description-form").value = "";
  $("#location-form").value = "";
  $("#category-form").value = "";
  $("#señority-form").value = "";
  $("#vacation-form").value = "";
  $("#health-form").value = "";
  $("#internet-form").checked = false;
  $("#long-term").checked = false;
  $("#salary-form").value = "";
  $("#javaScript").checked = false;
  $("#react").checked = false;
  $("#angular").checked = false;
  $("#sql").checked = false;
  $("#phyton").checked = false;
  $("#sass").checked = false;
  $("#java").checked = false;
  $("#php").checked = false;
};

const renderJobs = (data) => {
  cleanContainer("#containers");
  for (const {
    id,
    name,
    image,
    description,
    location,
    category,
    seniority,
  } of data) {
    $("#containers").innerHTML += `
     <div class="card m-2   " id="containers-card" style="width: 15rem; border:  solid rgba(0,0,0,.125)"> 
     <div class="card-body m-2  ">
      <h5 class="card-title text-center font-serif text-base font-semibold ">${name}</h5>
      <img  src=${image}  >
      <p class="card-text">${description}</p>
      <div>
          <p class="text-center ... bg-stone-300 m-1" >${location}</p>
           <p class="text-center ... bg-stone-300 m-1"  >${seniority} </p>
          <p class="text-center ... bg-stone-300 m-1" >${category} </p>       
      </div>
      <div class="flex justify-end ... mt-4">
      <button type="button" class=" bg-cyan-500 hover:bg-cyan-600 ... p-1 text-slate-50  font-semibold border-double border-2 border-sky-500 rounded id="${id}" onclick="detailJob(${id})" style="margin: 6px;">See Details</button>
   </div>
      </div> 
  </div>
     `;
  }
  hide("#spinner");
};

const showModal = (id) => {
  show("#popup-modal");
  $("#buttons").innerHTML = ` 
<button id="confirm-delete" onclick="deleteJob(${id})" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
Yes, I'm sure
</button>
<button data-modal-hide="popup-modal" onclick="getJobs()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
`;
};

const jobDelete = (id) => {
  deleteJob(id);
  getJobs();
};

const btnEditForm = (data, id) => {
  $("#btn-edit-job").setAttribute("data-id", id);
  show("#form-job");
  show("#btn-edit-job");
  hide("#btn-submit");
  hide("#nav");
  hide("#containers");
  (id = id),
    ($("#name-form").value = data.name),
    ($("#image-form").value = data.image),
    ($("#description-form").value = data.description),
    ($("#location-form").value = data.location),
    ($("#category-form").value = data.category),
    ($("#señority-form").value = data.seniority),
    ($("#vacation-form").value = data.benefits.vacation);
  ($("#health-form").value = data.benefits.health_ensurance),
    ($("#internet-form").checked = data.benefits.internet_paid),
    ($("#salary-form").value = data.salary);
  $("#long-term").checked = data.long_term;
  $("#btn-edit-job").addEventListener("click", () => {
    confirmEdit(id);
  });
};

const confirmEdit = (id) => {
  let jobId = $("#btn-edit-job").getAttribute("data-id");
  let editjob = {
    id: jobId,
    name: $("#name-form").value,
    image: $("#image-form").value,
    description: $("#description-form").value,
    location: $("#location-form").value,
    category: $("#category-form").value,
    seniority: $("#señority-form").value,
    benefits: {
      vacation: $("#vacation-form").value,
      health_ensurance: $("#health-form").value,
      internet_paid: $("#internet-form").checked,
    },
    salary: Number($("#salary-form").value),
    long_term: $("#long-term").checked,
    languages: languages(),
  };
  confirmJob(id, editjob);
};

const detailCard = ({
  id,
  name,
  image,
  description,
  location,
  category,
  seniority,
  languages,
}) => {
  show("#container"), show("#detail");
  hide("#containers"),
    ($("#detail").innerHTML = `
<div class="card ml-2 mt-2" id="containers-card" style="width: 22rem; border:  solid rgba(0,0,0,.125)"> 
<div class="card-body m-2">
 <h5 class="card-title  text-center font-serif text-base font-semibold ">${name}</h5>
 <div class="flex justify-center">
 <img src=${image}>
 </div>
 <p class="card-text">${description}</p>
 <div class="m-2">
     <p class="text-center ... bg-stone-300 m-1"  margin: 4px; ">${location}</p>
     <p class="text-center ... bg-stone-300 m-1"  margin: 4px;">${seniority}</p>
     <p class="text-center ... bg-stone-300 m-1"  margin: 4px;">${category} </p>
 </div>
 <div>
      <p class="text-center ...  bg-yellow-200"	margin: 4px; mt-4">${languages}</p>
 </div>
  <div class="flex justify-end mt-2">
    <button type="button" class="btn bg-green-700  hover:bg-green-500  text-black font-normal p-1  rounded " style="margin: 6px;"  onclick="formData('${id}')">Edit</button>
    <button type="button" class="btn bg-rose-600 text-black font-normal p-1 rounded" style="margin: 6px;" onclick="showModal(${id})"" >Delete </button>
  </div>
</div> 
</div>`);

  hide("#spinner");
};

const languages = () => {
  const lenguajes = [];
  if ($("#javaScript").checked) {
    lenguajes.push($("#javaScript").value);
  }
  if ($("#react").checked) {
    lenguajes.push(" " + $("#react").value);
  }
  if ($("#angular").checked) {
    lenguajes.push(" " + $("#angular").value);
  }
  if ($("#sql").checked) {
    lenguajes.push(" " + $("#sql").value);
  }
  if ($("#phyton").checked) {
    lenguajes.push(" " + $("#phyton").value);
  }
  if ($("#sass").checked) {
    lenguajes.push(" " + $("#sass").value);
  }
  if ($("#java").checked) {
    lenguajes.push(" " + $("#java").value);
  }
  if ($("#php").checked) {
    lenguajes.push(" " + $("#php").value);
  }

  return lenguajes;
};

const filterOptions = (data) => {
  $("#señority").innerHTML = "";
  $("#location").innerHTML = "";
  $("#category").innerHTML = "";
  $("#señority").innerHTML = `<option selected>Señority</option>`;
  $("#location").innerHTML = `<option selected>Location</option>`;
  $("#category").innerHTML = `<option selected>Category</option>`;

  const optionsLocations = [];
  const optionsSeniority = [];
  const optionsCategory = [];
  data.forEach((job) => {
    if (!optionsLocations.includes(job.location)) {
      optionsLocations.push(job.location);
      $("#location").innerHTML += `
  <option  value="${job.location}">${job.location}</option>
  `;
    }

    if (!optionsSeniority.includes(job.seniority)) {
      optionsSeniority.push(job.seniority);
      $("#señority").innerHTML += `
  <option value="${job.seniority}">${job.seniority}</option
  `;
    }
    if (!optionsCategory.includes(job.category)) {
      optionsCategory.push(job.category);
      $("#category").innerHTML += `
  <option  value="${job.category}">${job.category}</option>
  `;
    }
  });
};

const filtros = (data) => {
  if ($("#location").value !== "Location") {
    let locationOp = $("#location").value;
    let filteredLocations = data.filter((job) => job.location === locationOp);
    renderJobs(filteredLocations);
    show("#containers");
  } else if ($("#señority").value !== "Señority") {
    let señority = $("#señority").value;
    let filterSeñority = data.filter((job) => job.seniority === señority);
    renderJobs(filterSeñority);
    show("#containers");
  }
  if ($("#category").value !== "Category") {
    let category = $("#category").value;
    let filterCategory = data.filter((job) => job.category === category);
    renderJobs(filterCategory);
    show("#containers");
  }
};

$("#btn-create").addEventListener("click", () => {
  cleanForm();
  show("#form-job");
  hide("#nav");
  hide("#btn-edit-job");
  show("#btn-submit");
  hide("#detail");
});

$("#btn-home").addEventListener("click", () => {
  hide("#form-job");
  show("#nav");
  hide("#containers");
  hide("#detail");
  getJobs();
});

$("#btn-submit").addEventListener("click", () => {
  saveJob();
  hide("#form-job");
  show("#nav");
  cleanForm();
});

$("#clear").addEventListener("click", () => {
  getJobs();
});

$("#señority").addEventListener("change", () => {
  $("#location").value = "Location";
  $("#category").value = "Category";
});

$("#location").addEventListener("change", () => {
  $("#señority").value = "Señority";
  $("#category").value = "Category";
});
$("#category").addEventListener("change", () => {
  $("#location").value = "Location";
  $("#señority").value = "Señority";
});

$("#search").addEventListener("click", () => {
  hide("#containers");
  show("#spinner");
  setTimeout(() => {
    filtersOptions();
  }, 2000);
});
