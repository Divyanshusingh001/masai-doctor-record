function determineRole(experience) {
    if (experience > 3) {
      return 'Senior';
    } else if (experience >= 1 && experience <= 3) {
      return 'Junior';
    } else {
      return 'Fresher';
    }
  }
  
  function createRow(doctorData) {
    let tableBody = document.getElementById('doctorRecords');
    let newRow = document.createElement('tr');
  
    Object.values(doctorData).forEach(function(value) {
      let cell = document.createElement('td');
      cell.textContent = value;
      newRow.appendChild(cell);
    });
  
    let role = determineRole(doctorData.experience);
    let roleCell = document.createElement('td');
    roleCell.textContent = role;
    newRow.appendChild(roleCell);
  
    let deleteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        tableBody.removeChild(newRow);
    });
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);
  
    tableBody.appendChild(newRow);
  }
  
  document.getElementById('doctorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let name = document.getElementById('name').value;
    let doctorId = document.getElementById('doctor_id').value;
    let specialization = document.getElementById('specialization').value;
    let experience = document.getElementById('experience').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
  
    let doctorData = {
      name: name,
      doctorId: doctorId,
      specialization: specialization,
      experience: experience,
      email: email,
      mobile: mobile
    };
  
    createRow(doctorData);
  
    document.getElementById('doctorForm').reset();
  });
  

  document.getElementById('filter').addEventListener('change', function() {
    let selectedSpecialization = this.value;
    let tableRows = document.querySelectorAll('#doctorRecords tr');
  
    tableRows.forEach(function(row) {
      let specializationCell = row.querySelector('td:nth-child(3)');
      if (selectedSpecialization === '' || specializationCell.textContent === selectedSpecialization) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
    }
});
});