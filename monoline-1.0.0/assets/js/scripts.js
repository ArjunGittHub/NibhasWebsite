
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/				
		
		/*Image Popup*/
		 $('.gallery_enlarge_icon').magnificPopup({
			 type:'image',
			 gallery:{
				enabled:true
			  }
			});
		
		/*START Tour Slider JS*/			

		
		/* START MIX JS */
		$('.portfolio-grid').mixItUp({
		
		});		

		/* END MIX JS */
		
		/*START PROGRESS BAR*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/		
		
		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/		
		
		/* START COUNTDOWN JS */
$('.stats-section').on('inview', function(event, visible){

    if(visible){

        $(this).find('.counter').each(function(){

            let $this = $(this);
            let target = parseInt($this.text(),10);

            $({count:0}).animate({count:target},{

                duration:2200,

                easing:'swing',

                step:function(){

                    $this.text(Math.floor(this.count));

                },

                complete:function(){

                    $this.text(target);

                }

            });

        });

        $(this).off('inview');

    }

});
/* END COUNTDOWN JS */
		
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/	
		
	}); 

	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */	

	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


/*=====================================
PREMIUM FOOTER JS
=====================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
      BACK TO TOP
    ==========================*/

    const backTop = document.getElementById("backTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });



    /*==========================
      MAGNETIC BUTTON
    ==========================*/

    const magnetic = document.querySelector(".magnetic-btn");

    magnetic.addEventListener("mousemove",(e)=>{

        const rect = magnetic.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const moveX = (x - rect.width/2)/6;

        const moveY = (y - rect.height/2)/6;

        magnetic.style.transform =
        `translate(${moveX}px,${moveY}px)`;

    });

    magnetic.addEventListener("mouseleave",()=>{

        magnetic.style.transform="translate(0,0)";

    });





    /*==========================
      SPOTLIGHT EFFECT
    ==========================*/

    const island = document.querySelector(".footer-island");

    const spotlight = document.createElement("div");

    spotlight.className = "spotlight";

    island.appendChild(spotlight);

    island.addEventListener("mousemove",(e)=>{

        const rect = island.getBoundingClientRect();

        spotlight.style.left =
        (e.clientX - rect.left)+"px";

        spotlight.style.top =
        (e.clientY - rect.top)+"px";

        spotlight.style.opacity="1";

    });

    island.addEventListener("mouseleave",()=>{

        spotlight.style.opacity="0";

    });





    /*==========================
      FLOATING BLOBS
    ==========================*/

    const blobs=document.querySelectorAll(".blob");

    blobs.forEach((blob,index)=>{

        let angle=Math.random()*360;

        function animate(){

            angle+=0.2+(index*.05);

            blob.style.transform=

            `translate(
            ${Math.sin(angle*Math.PI/180)*25}px,
            ${Math.cos(angle*Math.PI/180)*20}px)
            scale(${1+Math.sin(angle*Math.PI/180)*0.05})`;

            requestAnimationFrame(animate);

        }

        animate();

    });





    /*==========================
      FOOTER REVEAL
    ==========================*/

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{

        threshold:.2

    });

    observer.observe(island);





    /*==========================
      SOCIAL ICONS
    ==========================*/

    document.querySelectorAll(".footer-social a").forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.style.transform="translateY(-8px) rotate(10deg)";

        });

        icon.addEventListener("mouseleave",()=>{

            icon.style.transform="translateY(0) rotate(0deg)";

        });

    });

});

  
    /*==========================
      IT SOLUTION
    ==========================*/
const wrapper = document.querySelector(".tech-wrapper");
const techs = document.querySelectorAll(".tech");

let angle = 0;

const radius = 240;
const speed = 0.003;

let paused = false;

wrapper.addEventListener("mouseenter", () => {

    paused = true;

});

wrapper.addEventListener("mouseleave", () => {

    paused = false;

});

function orbitAnimation() {

    if (!paused) {

        angle += speed;

    }

    const centerX = wrapper.clientWidth / 2;
    const centerY = wrapper.clientHeight / 2;

    techs.forEach((item, index) => {

        const theta = angle + index * (Math.PI * 2 / techs.length);

        const x = centerX + radius * Math.cos(theta);
        const y = centerY + radius * Math.sin(theta);

        item.style.left = `${x - item.offsetWidth / 2}px`;
        item.style.top = `${y - item.offsetHeight / 2}px`;

    });

    requestAnimationFrame(orbitAnimation);

}

orbitAnimation();