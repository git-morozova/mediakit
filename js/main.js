$(function () {
	$('.scroll-page').on('click', function () {
		var offset = 0;
		var speed = 1000;
		var target = $(this.hash);

		$('nav .menu a').each(function () {
			
			$(this).removeClass('active');
		});

		$(this).addClass('active');

		$('html, body').animate({
			scrollTop: target.offset().top - offset
		}, speed, 'swing');
		
	});

});

$(window).scroll(function (event) {
	event.preventDefault();
	//event.stopImmediatePropagation();

	var scrollPos = $(document).scrollTop();
	//console.log(scrollPos);
	$('nav .menu a').each(function () {
		var curLink = $(this);
		var refElement = $(curLink.attr('href'));

		if (refElement.position().top <= scrollPos + 60) {
			$('nav .menu a').removeClass('active');
			curLink.addClass('active');
		} else {
			curLink.removeClass('active');
		}
	});
});

/* tooltips */
let tooltipToggle = (item) => {
	let el = document.querySelector(`.mask-${item}`);
	el.addEventListener('mouseenter', function() {
		document.querySelector(`.tooltip_${item}`).style.cssText = 'visibility: visible; opacity: 1;';
	});
	el.addEventListener('mouseleave', function() {
		document.querySelector(`.tooltip_${item}`).style.cssText = 'visibility: hidden; opacity: 0;';
	});
}
tooltipToggle("journals");
tooltipToggle("tv");
tooltipToggle("smm");
tooltipToggle("mail");
tooltipToggle("projects");

/* progress bar + toTop btn */
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  //console.log("Scroll Height: ", scrollContainer().scrollHeight);
  //console.log("Client Height: ", scrollContainer().clientHeight);
	setTimeout(() => {
		const scrolledPercentage =
			(scrollContainer().scrollTop /
			(scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
			100;

		pageProgressBar.style.width = `${scrolledPercentage}%`;

		if (scrollContainer().scrollTop > showOnPx) {
			backToTopButton.classList.remove("hidden");
		} else {
			backToTopButton.classList.add("hidden");
		}
	}, 100)
});

backToTopButton.addEventListener("click", goToTop);


/* animation */
const box = document.querySelectorAll('.animation');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  
  box.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}