


function menuShow() {
    let menuMobile = document.querySelector(".menumobile")
        var header = document.querySelector('header');
        var main = document.querySelector('main');
        var footer = document.querySelector('footer');
        var logo = document.querySelector('.logo')
    if(menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open")
        document.querySelector(".icon").src = "./quero-trabalhar-na-enext/assets/images/1308367-200.png"
        logo.style.display = 'block'
        main.style.display = 'block';
        footer.style.display = 'block';
    
        


        
    } else {
        menuMobile.classList.add("open")
        document.querySelector(".icon").src = "./quero-trabalhar-na-enext/assets/images/close-512.png"
        main.style.display = 'none';
        footer.style.display = 'none';
       
    }} 

    function openLightbox(imageUrl) {
        var lightbox = document.getElementById('lightbox');
        var lightboxImg = document.getElementById('lightbox-img');
        
        lightbox.style.display = 'block';
        lightboxImg.src = imageUrl;
        
      }
      
      function closeLightbox() {
        var lightbox = document.getElementById('lightbox');
        
        lightbox.style.display = 'none';
      }

      