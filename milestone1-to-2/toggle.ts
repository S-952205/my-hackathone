/**Dono elements ko unke id say get kiya yahan jinpay kaam krna or phir unhein do variables main
 store krdiya 
 */

const toggle = document.getElementById('toggle-button') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;


/**toggle pay jo click kray ga tw eventlinsener fire hoga jo condtion ko dekhtay huay result dikhaiga 
  agar skills none hain means hidden tw woo block hojaiga means display else agar woo display hai tw none hojaiga
  means hideen.
 */

toggle.addEventListener('click', () => {

 if(skills.style.display === 'none'){
         skills.style.display = 'block'
    }
    else{
        skills.style.display = 'none'
    }

})

