const form = document.getElementById("employee_form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const table = document.getElementById("employeeList");
  const tr = document.createElement("tr");
  const dataArr = [...new FormData(this)];
  for (let index = 0; index < dataArr.length; index++) {
    const td = document.createElement("td");
    const name = dataArr[index][0];
    const value = dataArr[index][1];
    if (name === "photo") {
      const img = document.createElement("img");
      img.src = "images/" + value.name;
      td.append(img);
      tr.prepend(td);
    } else {
      console.log(value);
      td.textContent = value;
      tr.append(td);
    }
  }

  const td = document.createElement("td");
  const btn = document.createElement("button");
  btn.textContent = "delete";
  btn.className = "js-delete_btn";
  btn.addEventListener("click", delete_employee);
  td.append(btn);
  tr.append(td);

  table.appendChild(tr);
});

function delete_employee(event) {
  const result = confirm("Are you sure you want to delete this employee?");
  if (result) {
    event.target.closest("tr").remove();
  }
}
