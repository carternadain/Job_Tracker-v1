const jobForm = document.getElementById("job-form");
const jobList = document.getElementById("job-list");
const jobNameInput = document.getElementById("job-name");
const salaryInput = document.getElementById("salary");
const dateAppliedInput = document.getElementById("date-applied");
const noteInput = document.getElementById("note");

// Listen for the form's submit event
jobForm.addEventListener("submit", function(event) {
  // Prevent the form from sending data to the server
  event.preventDefault();

  // Get the values of the input elements
  const jobName = jobNameInput.value;
  const salary = salaryInput.value;
  const dateApplied = dateAppliedInput.value;
  const note = noteInput.value;

  // Create a new table row element to display the job
  const newRow = document.createElement("tr");

  // Create new table data elements to display the job's data
  const jobNameData = document.createElement("td");
  jobNameData.textContent = jobName;
  const salaryData = document.createElement("td");
  salaryData.textContent = salary;
  const dateAppliedData = document.createElement("td");
  dateAppliedData.textContent = dateApplied;
  const noteData = document.createElement("td");
  noteData.textContent = note;

  // Create a new table data element for the actions
  const actionsData = document.createElement("td");

  // Create a "Save" button
  const saveButton = document.createElement("button");
  saveButton.classList.add("btn", "btn-success", "btn-sm", "float-right");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", function() {
    // code to handle save button click event
    console.log(`Saving ${jobName}`)
  });
  actionsData.appendChild(saveButton);

  // Create a "Delete" button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "btn-sm", "float-right");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    // code to handle delete button click event
    console.log(`Deleting ${jobName}`)
    newRow.remove();
  });
  actionsData.appendChild(deleteButton);

  // Append the data elements and the actions element to the new row
  newRow.appendChild(jobNameData);
  newRow.appendChild(salaryData);
  newRow.appendChild(dateAppliedData);
  newRow.appendChild(noteData);
  newRow.appendChild(actionsData);

  // Append the new row to the job list table
  jobList.appendChild(newRow);

  // Clear the input elements
  jobNameInput.value = "";
  salaryInput.value = "";
  dateAppliedInput.value = "";
  noteInput.value = "";
});
