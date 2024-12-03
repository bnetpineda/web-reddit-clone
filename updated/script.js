// scroll-to-Top Button
window.onscroll = function () {
    var scrollButton = document.querySelector('.scroll-to-top');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        
        scrollButton.classList.add('visible');
    } else {
       
        scrollButton.classList.remove('visible');
    }
};

document.querySelector('.scroll-to-top').addEventListener('click', function (event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


// wait for the entire page to load
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    
    setTimeout(() => {
        loadingScreen.classList.add("hidden"); 
    }, 500); 
});

document.querySelectorAll('.section h3').forEach(header => {
    header.addEventListener('click', () => {
        const section = header.parentElement;
        section.classList.toggle('active');
    });
});



// tonggle filter hot / philippines
const hotGroup = document.getElementById('hot-group');
const philippinesGroup = document.getElementById('philippines-group');

hotGroup.addEventListener('click', function () {
    toggleDropdown(hotGroup, philippinesGroup);
});

philippinesGroup.addEventListener('click', function () {
    toggleDropdown(philippinesGroup, hotGroup);
});

function toggleDropdown(clickedGroup, otherGroup) {
    clickedGroup.classList.toggle('open');

    otherGroup.classList.remove('open');
}







