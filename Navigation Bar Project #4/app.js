// PLEASE SEE INDEX.HTML FOR THE COMMENTS OF EACH MODIFICATION.

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    
    links.classList.toggle("show-links");
});

