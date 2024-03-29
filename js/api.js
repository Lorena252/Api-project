const getJobs = async () => {
  let response = await fetch(
    `https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs`
  );
  let data = await response.json();
  show("#spinner");
  hide("#containers");
  hide("#popup-modal");
  hide("#detail");
  hide("#form-job");
  setTimeout(() => {
    renderJobs(data);
    filterOptions(data);
    show("#containers");
    hide("#popup-modal");
    hide("#detail");
  }, 2000);
};

const addJob = async (job) => {
  try {
    const response = await fetch(
      `https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(job),
      }
    );
    const data = await response.json();
    if (data) {
      getJobs();
    }
  } catch (error) {
    alert("error de ejecucion");
  }
};

const formData = async (id) => {
  const response = await fetch(
    `https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`
  );
  const data = await response.json();
  btnEditForm(data, id);
};

const confirmJob = async (id, editjob) => {
  try {
    const response = await fetch(
      `https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(editjob),
      }
    );
    let data = await response.json();
  } catch (error) {
    alert("error");
  }
};

const deleteJob = async (id) => {
  const response = await fetch(
    `https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`,
    {
      method: "DELETE",
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
  hide("#popup-modal");
  hide("#detail");
  getJobs();
  setTimeout(() => {
    show("#containers");
  }, 2000);
};

const detailJob = async (id) => {
  const response = await fetch(
    `https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs/${id}`
  );
  const data = await response.json();
  show("#spinner");
  hide("#containers");
  setTimeout(() => {
    detailCard(data);
  }, 2000);
};

const filtersOptions = async () => {
  let response = await fetch(
    `https://65271cad917d673fd76d6b9b.mockapi.io/api/jobs`
  );
  let data = await response.json();
  filtros(data);
};

window.onload = getJobs();
