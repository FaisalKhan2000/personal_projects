// an empty array myLeads to store all the elements generated after clicking save inout btn
// let myLeads = [];

const input = document.getElementById("input");
const addbtn = document.getElementById("btn");
// const deleteBtn = document.getElementById("delete");

let ulEl = document.getElementById("ulEl");
let task = [];
let inputValue;

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("task"));
// console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  task = leadsFromLocalStorage;
  renderLeads();
}

addbtn.addEventListener("click", function () {
  if (input.value.length > 0) {
    task.push(input.value);
    localStorage.setItem("task", JSON.stringify(task));

    input.value = " ";
    listItems = " ";

    renderLeads();
  }
});

function renderLeads() {
  let listItems = "";
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  for (let i = 0; i < task.length; i++) {
    listItems += `
    <li>
        <p><span id="date">${day}/${month}/${year}</span> ${task[i]}</p>
        <i class="fa-solid fa-trash delete" data-index="${i}"></i>
     </li>`;
  }
  ulEl.innerHTML = listItems;

  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const index = btn.dataset.index;
      task.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(task));
      renderLeads();
    });
  });
}
