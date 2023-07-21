
    const passInit = document.getElementById('password');
    const passConfirm = document.getElementById('password_confirm');
    const passwordDiv = document.querySelector('#password-cont');
    const submitBtn = document.querySelector('button.create-account');

    passConfirm.addEventListener('input', () => {

    if (passInit.value != passConfirm.value){
        passInit.classList.add('mismatch');
        passConfirm.classList.add('mismatch');

    } else {

        passInit.classList.remove('mismatch');
        passConfirm.classList.remove('mismatch');

        const alertWarning = document.querySelector('.warn');
        alertWarning.style.cssText = '';
        alertWarning.textContent = '';
        
    }
});

    

    submitBtn.addEventListener('click',(event) => {

        const passClass = passInit.classList;

        if (passClass.contains('mismatch')){

    const alertWarning = document.querySelector('.warn');
           alertWarning.style.cssText = 'background-color: red; padding: 10px; margin: 10px; opacity: 1; transition: opacity 0.6s';
           alertWarning.textContent = 'Please correct the above issues in red'; 
           event.preventDefault();

            
                
                

                const closeBtn = document.createElement('span');
                closeBtn.textContent = 'x';
                closeBtn.className = 'closeBtn';

                closeBtn.addEventListener('click',()=>{
                    alertWarning.style.display = "none";
                });


            alertWarning.appendChild(closeBtn);

            


                    

        } else {

            

            dispatchEvent();
        }
    })