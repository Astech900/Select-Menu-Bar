const displayEl = document.getElementById("display");
let iconEl = document.getElementById("icon");
let selectField = document.querySelector(".select-field");
let socialMediaDiv = document.querySelector(".social-media");
let app = document.querySelectorAll('#apps');
let appArr = Array.from(app);


selectField.addEventListener("click",()=>{
    if (!socialMediaDiv.classList.contains("visible")) {
        iconEl.classList.add("rotateicon");
        socialMediaDiv.classList.add("visible");
    }else{
        iconEl.classList.remove("rotateicon");
        socialMediaDiv.classList.remove("visible");
        
    };   
});
appArr.forEach(el =>{
    el.addEventListener("click",function(){
        let para = this.querySelector('p').innerHTML;
        displayEl.innerHTML = para;
        socialMediaDiv.classList.remove("visible");
        iconEl.classList.remove("rotateicon");
        
    });
    
});
