



// Function to save form data to local storage
function saveToLocalStorage() {
    const formData = {
      myName: document.getElementById('myName').value,

      Designation: document.getElementById('Designation').value,

      Phone: document.getElementById('Phone').value,

      Email: document.getElementById('Email').value,

      Address: document.getElementById('Address').value,

      PassingYear: document.getElementById('PassingYear').value,
      Degree: document.getElementById('Degree').value,
      Institute: document.getElementById('Institute').value,

      PassingYear1: document.getElementById('PassingYear1').value,
      Degree1: document.getElementById('Degree1').value,
      Institute1: document.getElementById('Institute1').value,

      Skills1: document.getElementById('Skills1').value,
      Skills2: document.getElementById('Skills2').value,
      Skills3: document.getElementById('Skills3').value,

      Language1: document.getElementById('Language1').value,
      Language2: document.getElementById('Language2').value,
      
      Achievement1: document.getElementById('Achievements1').value,
      Achievement2: document.getElementById('Achievements2').value,
      Achievement3: document.getElementById('Achievements3').value,

    
    };


      // Save profile picture to local storage if selected
      const pictureInput = document.getElementById('Picture');
         if (pictureInput.files && pictureInput.files[0]) {
              let reader = new FileReader();
                  reader.addEventListener("load", () => {
                  const textImg = reader.result;
                  localStorage.setItem("Profile_pic", textImg);
          });
                  reader.readAsDataURL(pictureInput.files[0]);
      }
    
    localStorage.setItem('resumeData', JSON.stringify(formData));
    displayResume();
  }

  // Function to load and display the profile picture from local storage
          function loadProfilePicture() {
           const textImg = localStorage.getItem("Profile_pic");
      if (textImg) {
      document.getElementById("displayPicture").src = textImg;
        }
          }


  function displayResume() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
  
    if (resumeData) {
        document.getElementById('displayName').textContent = resumeData.myName;
        document.getElementById('displayDesignation').textContent = resumeData.Designation;
        document.getElementById('displayPhone').textContent = resumeData.Phone;
        document.getElementById('displayEmail').textContent = resumeData.Email;
        document.getElementById('displayAddress').textContent = resumeData.Address;

        document.getElementById('displayPassingYear').textContent = resumeData.PassingYear;
        document.getElementById('displayDegree').textContent = resumeData.Degree;
        document.getElementById('displayInstitute').textContent = resumeData.Institute;

        document.getElementById('displayPassingYear1').textContent = resumeData.PassingYear1;
        document.getElementById('displayDegree1').textContent = resumeData.Degree1;
        document.getElementById('displayInstitute1').textContent = resumeData.Institute1;

        document.getElementById('displaySkills1').textContent = resumeData.Skills1;
        document.getElementById('displaySkills2').textContent = resumeData.Skills2;
        document.getElementById('displaySkills3').textContent = resumeData.Skills3;

        document.getElementById('displayLanguage1').textContent = resumeData.Language1;
        document.getElementById('displayLanguage2').textContent = resumeData.Language2;

        document.getElementById('displayAchievements1').textContent = resumeData.Achievement1;
        document.getElementById('displayAchievements2').textContent = resumeData.Achievement2;
        document.getElementById('displayAchievements3').textContent = resumeData.Achievement3;

     

        // Load profile picture on resume display
         loadProfilePicture();


    }};









    document.getElementById('submitBtn').addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form from submitting
        saveToLocalStorage();
      });
      
      // Load resume data when the page loads
      window.onload = function() {
        displayResume();
      };

    

      
      // Event listener for the print button
      document.getElementById('Print_btn').addEventListener('click', () => {
        window.print();
      });