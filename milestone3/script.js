//Form And View reference
var form = document.getElementById('resume');
var resumeView = document.getElementById('resume-view');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //Input values collected and stored in variables
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var resumeHtml = "\n   <h2>Resume</h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b>".concat(name, "</p>\n   <p><b>Email:</b>").concat(email, "</p>\n   <p><b>Number:</b>").concat(number, "</p>\n\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n   <h3>Skills</h3>\n   <p>").concat(skills, "</p>\n\n   <h3>Experience</h3>\n   <p>").concat(experience, "</p>");
    if (resumeView) {
        resumeView.innerHTML = resumeHtml;
    }
    else {
        console.log('resume element is missing');
    }
});
