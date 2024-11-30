//Form And View reference
const form = document.getElementById('resume') as HTMLFormElement
const resumeView = document.getElementById('resume-view') as HTMLDivElement

form.addEventListener('submit', (event: Event) => {
 event.preventDefault();


 //Input values collected and stored in variables
 const name = (document.getElementById('name') as HTMLInputElement).value
 const email = (document.getElementById('email') as HTMLInputElement).value
 const number = (document.getElementById('phone') as HTMLInputElement).value
 const skills = (document.getElementById('skills') as HTMLInputElement).value
 const education = (document.getElementById('education') as HTMLInputElement).value
 const experience = (document.getElementById('experience') as HTMLInputElement).value
 

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
   
   if(resumeView){
        resumeView.innerHTML = resumeHtml;
   }else{
     console.log('resume element is missing');
   }
})

