function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let passwordInput = document.getElementById('password').value
    let confirmpasswordInput = document.getElementById('confirmpassword').value
    let tnCInput = document.getElementById('tnC').checked

    let errors = false

    if (firstNameInput.length >= 3) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'

    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        errors = true
    }


    if (lastNameInput.length >= 3) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'

    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        errors = true
    }

    if (
        emailInput.length &&
        emailInput.includes('@') &&
        emailInput.includes('.') &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf('@') !== 0

    ) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'

    } else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        errors = true
    }

    if (passwordInput && passwordInput.length >= 8 && passwordInput.search(/[0-4]/)!=-1 && passwordInput.search(/[0-4]/)!=-1 && passwordInput.search(/[$\#\@]/)!=-1){
        document.getElementById('password-valid').style.display = 'block'
        document.getElementById('password-invalid').style.display = 'none'

    } else {
        document.getElementById('password-invalid').style.display = 'block'
        document.getElementById('password-valid').style.display = 'none'
        errors = true
    }

    console.log(confirmpassword)
    if(passwordInput == confirmpasswordInput){
        document.getElementById('confirmpassword-valid').style.display = 'block'
        document.getElementById('confirmpassword-invalid').style.display = 'none'

    } else {
        document.getElementById('confirmpassword-invalid').style.display = 'block'
        document.getElementById('confirmpassword-valid').style.display = 'none'
        errors = true
    }

    if (tnCInput) {
        document.getElementById('tnC-invalid').style.display = 'none'

    } else {
        document.getElementById('tnC-invalid').style.display = 'block'
        errors = true
    }

    if (!errors) {
        alert("Your details have been saved successfully!")
        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('confirmpassword').value = ''
        document.getElementById('tnC').checked = false

    }

}