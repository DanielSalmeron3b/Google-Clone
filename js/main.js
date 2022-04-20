// Accesing the DOM. 
const toggleButton = document.getElementById('toggle-button');
let darkMode = localStorage.getItem('darkMode'); 

const darkModeOn = () => {

    document.body.classList.add('darkmode-active');

    document.getElementById('mainImage').src = '../assets/gohttps://www.google.com.sv/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.pngogle-logo-white.png';
    document.getElementById('appsIcon').style.backgroundImage = "url('../assets/google-apps-icon.png')";

    localStorage.setItem('darkMode', 'enabled');
}

const darkModeOff = () => {

    document.body.classList.remove('darkmode-active');

    document.getElementById('mainImage').src = "../assets/google-logo-color.png";
    document.getElementById('appsIcon').style.backgroundImage = "url('https://static.thenounproject.com/png/654601-200.png')";

    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    darkModeOn();
}

// 'Listening' every time someone clicks the toggleButton.
toggleButton.addEventListener('click', () => {

    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        darkModeOn(); 
        
    } else {  
        darkModeOff(); 
        
    }

});


