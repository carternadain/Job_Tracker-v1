// Get references to the form, the job list table, and the input elements
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

  // Append the data elements to the new row
  newRow.appendChild(jobNameData);
  newRow.appendChild(salaryData);
  newRow.appendChild(dateAppliedData);
  newRow.appendChild(noteData);

  // Append the new row to the job list table
  jobList.appendChild(newRow);

  // Clear the input elements
  jobNameInput.value = "";
  salaryInput.value = "";
  dateAppliedInput.value = "";
  noteInput.value = "";
});
