//Form And View reference
var form = document.getElementById('resume');
var resumeView = document.getElementById('resume-view');
//variables for shareable sections
var shareableLinkContainer = document.getElementById('shareable-link-box');
var shareableLink = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //Input values collected and stored in variables
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        number: number,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHtml = "\n   <h2>Editable Resume</h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "<span/></p>\n   <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n   <p><b>Number:</b><span contenteditable=\"true\">").concat(number, "</span></p>\n\n   <h3>Education</h3>\n   <p contenteditable=\"true\">").concat(education, "</p>\n\n   <h3>Skills</h3>\n   <p contenteditable=\"true\">").concat(skills, "</p>\n\n   <h3>Experience</h3>\n   <p contenteditable=\"true\">").concat(experience, "</p>");
    //    if(resumeView){
    //         resumeView.innerHTML = resumeHtml;
    //    }else{
    //      console.log('resume element is missing');
    //    }
    // Display the generated resume
    resumeView.innerHTML = resumeHtml;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
