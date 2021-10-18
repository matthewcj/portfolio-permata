$(document).ready(function () {

	// menambahkan class open saat menklik menu-toggler atau hamburger
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});


	//untuk menghilangkan class open saat user mengklik nav-item yang ada di dalam navbar
	$('.top-nav .nav-link').on('click', function() {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});


	//untuk membuat perpindahan ke section menjadi smooth saat user mengklik nav-item di navbar
	$('nav a[href*="#"]').on('click', function(){
		$('html, body').animate(  {
			scrollTop: $($(this).attr('href')).offset().top - 5
		},  1500);
	});

	// untuk icon to top
	$('#up').on('click', function(){
		$('html, body').animate(  {
			scrollTop: 0
		},  1500);
	});

	// ease item yang ada di web
	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true    //efek hanya akan terjadi sekali saat merefresh web
	});

});



// Landing effects
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".menu-toggler", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".landing-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".about", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".pengurus", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".kegiatan", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".bible", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".contact", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("footer", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbz3oDL26wZBlNjCWLj3YNtDdRmC5_rqc4aXEE6W8gGy8KLfIqpmWvenNq3nkERphVpV/exec'
const form = document.forms['matthew-contact-form']
// const btnKirim = document.querySelector('.btn-kirim');
// const btnLoading = document.querySelector('.btn-loading');
const alert = document.querySelector('.alert');


form.addEventListener('submit', e => {
e.preventDefault()
// ketika tombol submit diklik
// tampilkan tombol loading, hilangkan tombol kirim
// btnLoading.classList.toggle('d-none');
// btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    // tampilkan tombol kirim, hilangkan tombol
    // btnLoading.classList.toggle('d-none');
    // btnKirim.classList.toggle('d-none');
    // tampilkan alert
    alert.classList.toggle('d-none');
    // reset form
    form.reset();
    console.log('Success!', response)
  })
  .catch(error => console.error('Error!', error.message))
})