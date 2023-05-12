const router = require('express').Router(); 

router.get('/light-mode', (req, res) => {

    document.addEventListener("click", function(event) {
        
        event.preventDefault(); 
        document.getElementById("body").className = "light-mode"; 
        console.log(body.className); 
    })
}); 

router.get('/dark-mode', (req, res) => {
    document.addEventListener("click", function(event) {
        event.preventDefault(); 
        document.getElementById("body").className = "dark-mode"; 
    })
}); 

module.exports = router; 