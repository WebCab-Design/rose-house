(function(){var a=document.querySelector('.testimonial');if(a){var b=1;setInterval(function(){b===a.children.length?(a.children[b-1].classList.toggle('active'),b=0,a.children[b].classList.toggle('active'),console.log('index')):(console.log(b),console.log(a.children[b]),a.children[b-1].classList.toggle('active'),a.children[b].classList.toggle('active')),b++},1e4)}})(),function(){var a=document.querySelector('.contact-widget-body');if(a){var b,c,d=a.getBoundingClientRect().height,e=a.parentNode;window.addEventListener('scroll',function(){window.requestAnimationFrame(function(){return c=e.getBoundingClientRect().top,b=c+d,940>window.innerWidth?a.classList.remove('fixed'):0>=c?a.classList.add('fixed'):0<=b?a.classList.remove('fixed'):void 0})})}}();