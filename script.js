
    const passInit = document.getElementById('password');
    const passConfirm = document.getElementById('password_confirm');
    const passwordDiv = document.querySelector('#password-cont');
    const submitBtn = document.querySelector('button.create-account');
    const passClass = passInit.classList;

    const inputs = document.querySelectorAll('input[required]');

    for (const input of inputs) {

        input.addEventListener('blur',function(event){
            event.target.classList.add('visited');
        })
    }
    

         
    window.addEventListener('input', function(event){

            if ((passInit.value != passConfirm.value) && !(passInit.classList.contains('mismatch'))){

                passInit.classList.add('mismatch');

            } else if (passInit.value == passConfirm.value){

                passInit.classList.remove('mismatch');

            }
        
        });

        let alertWarning = document.querySelector('.warn');
        let closeBtn = document.createElement('span');

    
    function makeWarn(){

        alertWarning = document.querySelector('.warn');
        alertWarning.style.cssText = 'background-color: red; padding: 10px; margin: 10px; opacity: 1; transition: opacity 0.6s';
        alertWarning.textContent = 'Please correct the above issues in red'; 
        alertWarning.style.display = 'none'; 

        closeBtn.textContent = 'x';
        closeBtn.className = 'closeBtn';
        closeBtn.display = 'none';         
        
        closeBtn.addEventListener('click',()=>{
             alertWarning.style.display = "none";
         });
         
         alertWarning.appendChild(closeBtn);    
         return alertWarning;
    }

window.onload = makeWarn();


function toggleWarn(){


if (alertWarning.style.display == 'none'){
    alertWarning.style.display = 'block';
    closeBtn.display = 'inline';
} else {
    alertWarning.style.display = 'none';
    closeBtn.display = 'none';
}
}

         

        


submitBtn.addEventListener('click', (event) => {

    if (!inputs[0].checkValidity() || !inputs[1].checkValidity() || !inputs[2].checkValidity() || 
        !inputs[3].checkValidity()||!(inputs[4].checkValidity()) || 
        !inputs[5].checkValidity()) {

            for (const input of inputs){ 


                if (!input.classList.contains('visited')) {
                    input.classList.add('visited');
                }
            }
            
            toggleWarn();
            setTimeout(toggleWarn,5000);

            event.preventDefault();
 
        } else {

            if (passInit.value == passConfirm.value){

            return true;

            } else {

            toggleWarn();
            setTimeout(toggleWarn,5000);
            event.preventDefault();

            }
        }

    });



    

                
                

                