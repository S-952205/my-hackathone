//Form And View reference
const form = document.getElementById('resume') as HTMLFormElement
const resumeView = document.getElementById('resume-view') as HTMLDivElement

//variables for shareable sections
const shareableLinkContainer = document.getElementById('shareable-link-box') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement


form.addEventListener('submit', (event: Event) => {
 event.preventDefault();


 //Input values collected and stored in variables
 const username = (document.getElementById('username') as HTMLInputElement).value
 const name = (document.getElementById('name') as HTMLInputElement).value
 const email = (document.getElementById('email') as HTMLInputElement).value
 const number = (document.getElementById('phone') as HTMLInputElement).value
 const skills = (document.getElementById('skills') as HTMLInputElement).value
 const education = (document.getElementById('education') as HTMLInputElement).value
 const experience = (document.getElementById('experience') as HTMLInputElement).value

 // Save form data in localStorage with the username as the key
  const resumeData = {
    name,
    email,
    number,
    education,
    experience,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
  
 

    // Generate the resume content dynamically
   const resumeHtml = `
   <h2>Editable Resume</h2>
   <h3>Personal Information</h3>
   <p><b>Name:</b><span contenteditable="true">${name}<span/></p>
   <p><b>Email:</b><span contenteditable="true">${email}</span></p>
   <p><b>Number:</b><span contenteditable="true">${number}</span></p>

   <h3>Education</h3>
   <p contenteditable="true">${education}</p>

   <h3>Skills</h3>
   <p contenteditable="true">${skills}</p>

   <h3>Experience</h3>
   <p contenteditable="true">${experience}</p>`;
   
//    if(resumeView){
//         resumeView.innerHTML = resumeHtml;
//    }else{
//      console.log('resume element is missing');
//    }

    // Display the generated resume
    resumeView.innerHTML = resumeHtml;

    // Generate a shareable URL with the username only

    /**This creates a shareable link for the resume.
      window.location.origin gets the base URL of your current webpage. For example, if you're working locally, it might be http://localhost:3000.
      ?username=${encodeURIComponent(username)} adds a query parameter to the URL. This query will be something like ?username=JohnDoe (where JohnDoe is the value of the username input field).
      encodeURIComponent(username) ensures that the username is safely added to the URL, especially if it contains special characters (like spaces or symbols). */
    
      const shareableURL =
        `${window.location.origin}?username=${encodeURIComponent(username)}`;
      // Display the shareable link
      shareableLinkContainer.style.display = 'block';
      shareableLink.href = shareableURL;
      shareableLink.textContent = shareableURL;
     });


     // Handle PDF download
     downloadPdfButton.addEventListener('click', () => {
         window.print(); // This will open the print dialog and allow the user to save as PDF

     });


    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {

    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById('username') as HTMLInputElement).value =
            username;
        (document.getElementById('name') as HTMLInputElement).value =
            resumeData.name;
        (document.getElementById('email') as HTMLInputElement).value =
            resumeData.email;
        (document.getElementById('phone') as HTMLInputElement).value =
            resumeData.phone;
        (document.getElementById('education') as HTMLTextAreaElement).value =
            resumeData.education;
        (document.getElementById('experience') as HTMLTextAreaElement).value
            = resumeData.experience;
        (document.getElementById('skills') as HTMLTextAreaElement).value =
            resumeData.skills;
    }
}
});
