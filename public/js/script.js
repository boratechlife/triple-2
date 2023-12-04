$(document).ready(function () {
   'use strict';

   // Magnific Popup
   $('.popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
   });

   const counterUp = window.counterUp.default

   const callback = entries => {
      entries.forEach(entry => {
         const el = entry.target
         if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
               duration: 1000,
               delay: 16,
            })
            el.classList.add('is-visible')
         }
      })
   }

   const IO = new IntersectionObserver(callback, { threshold: 1 })

   const els = document.querySelectorAll('.counter')
   els.forEach(el => {
      IO.observe(el)
   })

   <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
   <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
   <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/tripleblue/demo-ai-notulistensoftware-vve', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true }); }</script>
  
   //Show password
   $('.viewPassword').click(function () {
      $(this).toggleClass('fa-eye fa-eye-slash');
      var input = $($(this).attr('toggle'));
      if (input.attr('type') == 'password') {
         input.attr('type', 'text');
      } else {
         input.attr('type', 'password');
      }
   });
});