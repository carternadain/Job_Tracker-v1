const jobForm = document.getElementById("job-form");
const jobList = document.getElementById("job-list");
const jobNameInput = document.getElementById("job-name");
const salaryInput = document.getElementById("salary");
const dateAppliedInput = document.getElementById("date-applied");
const noteInput = document.getElementById("note");

// Retrieve saved entries from local storage
const savedEntries = JSON.parse(localStorage.getItem("jobEntries")) || [];

// Function to create table row from entry data
function createTableRow(entry) {
  const newRow = document.createElement("tr");
  Object.values(entry).forEach(value => {
    const dataElement = createDataElement(value);
    newRow.appendChild(dataElement);
  });

  // Create actions data element with buttons
  const actionsData = document.createElement("td");
  const saveButton = createButton("Save", "btn-success", handleSave);
  const deleteButton = createButton("Delete", "btn-danger", handleDelete);
  actionsData.appendChild(saveButton);
  actionsData.appendChild(deleteButton);
  newRow.appendChild(actionsData);

  return newRow;
}

// Function to create table data element
function createDataElement(content) {
  const dataElement = document.createElement("td");
  dataElement.textContent = content;
  return dataElement;
}

// Function to create button element
function createButton(text, className, clickHandler) {
  const button = document.createElement("button");
  button.classList.add("btn", className, "btn-sm", "spaced-buttons");
  button.textContent = text;
  button.addEventListener("click", clickHandler);
  return button;
}

// Function to handle save button click event
function handleSave(event) {
  const row = event.target.closest('tr');
  const entry = getEntryFromRow(row);

  // Find the index of the existing entry in savedEntries
  const index = savedEntries.findIndex(e => e.jobName === entry.jobName);

  // If the entry already exists, update it; otherwise, add it
  if (index !== -1) {
    savedEntries[index] = entry;
  } else {
    savedEntries.push(entry);
  }

  // Save the updated array back to local storage
  localStorage.setItem("jobEntries", JSON.stringify(savedEntries));

  console.log(`Saving ${entry.jobName}`);
}

// Function to handle delete button click event
function handleDelete(event) {
  const row = event.target.closest('tr');
  const entry = getEntryFromRow(row);

  // Remove the row from the table
  row.remove();

  // Remove the entry from the savedEntries array
  removeEntry(entry);

  console.log(`Deleting ${entry.jobName}`);
}

// Function to get entry data from a table row
function getEntryFromRow(row) {
  const jobName = row.querySelector('td:first-child').textContent;
  const salary = row.querySelector('td:nth-child(2)').textContent;
  const dateApplied = row.querySelector('td:nth-child(3)').textContent;
  const note = row.querySelector('td:nth-child(4)').textContent;

  return { jobName, salary, dateApplied, note };
}

// Function to remove entry from savedEntries array and local storage
function removeEntry(entry) {
  const index = savedEntries.findIndex(e => e.jobName === entry.jobName);
  savedEntries.splice(index, 1);
  localStorage.setItem("jobEntries", JSON.stringify(savedEntries));
}

// Function to save entry to local storage
function saveEntry(entry) {
  savedEntries.push(entry);
  localStorage.setItem("jobEntries", JSON.stringify(savedEntries));
}

// Function to clear input fields
function clearInputFields() {
  jobNameInput.value = "";
  salaryInput.value = "";
  dateAppliedInput.value = "";
  noteInput.value = "";
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get input values
  const jobName = jobNameInput.value;
  const salary = salaryInput.value;
  const dateApplied = dateAppliedInput.value;
  const note = noteInput.value;

  // Create an object for the current entry
  const entry = { jobName, salary, dateApplied, note };

  // Save the current entry to local storage
  saveEntry(entry);

  // Create and append the new table row
  const newRow = createTableRow(entry);
  jobList.appendChild(newRow);

  // Clear input elements
  clearInputFields();
}

// Populate the job list with saved entries on page load
savedEntries.forEach(entry => {
  const newRow = createTableRow(entry);
  jobList.appendChild(newRow);
});

// Listen for the form's submit event
jobForm.addEventListener("submit", handleFormSubmit);


// Get all the links with the class "nav-link"
const navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target element's id
    const targetId = event.target.getAttribute('href');

    // Get the target element
    const targetElement = document.querySelector(targetId);

    // Calculate the top position of the target element
    const targetPosition = targetElement.getBoundingClientRect().top;

    // Apply the smooth scrolling effect
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

