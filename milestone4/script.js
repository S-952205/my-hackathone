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
    var resumeHtml = "\n   <h2>Editable Resume</h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "<span/></p>\n   <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n   <p><b>Number:</b><span contenteditable=\"true\">").concat(number, "</span></p>\n\n   <h3>Education</h3>\n   <p contenteditable=\"true\">").concat(education, "</p>\n\n   <h3>Skills</h3>\n   <p contenteditable=\"true\">").concat(skills, "</p>\n\n   <h3>Experience</h3>\n   <p contenteditable=\"true\">").concat(experience, "</p>");
    if (resumeView) {
        resumeView.innerHTML = resumeHtml;
    }
    else {
        console.log('resume element is missing');
    }
});
