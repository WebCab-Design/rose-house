(function(){var a=document.querySelector(".testimonial");if(a){var b=1;setInterval(function(){b===a.children.length?(a.children[b-1].classList.toggle("active"),b=0,a.children[b].classList.toggle("active")):(a.children[b-1].classList.toggle("active"),a.children[b].classList.toggle("active")),b++},1e4)}})(),function(){var a=document.querySelector(".contact-widget-body");if(a){var b,c,d=a.getBoundingClientRect().height,e=a.parentNode;window.addEventListener("scroll",function(){window.requestAnimationFrame(function(){return c=e.getBoundingClientRect().top,b=c+d,940>window.innerWidth?a.classList.remove("fixed"):0>=c?a.classList.add("fixed"):0<=b?a.classList.remove("fixed"):void 0})})}}(),function(){var a=document.querySelector(".form-response"),b=document.querySelector(".contact-form")||document.querySelector(".insurance-form");b&&b.addEventListener("submit",function(c){c.preventDefault(),a.innerText="Submitting Form";var d={},e=[];e.push.apply(e,b.querySelectorAll("input")),e.push.apply(e,b.querySelectorAll("textarea"));for(var f=0;f<e.length;f++){var g=e[f],h=g.name,j=g.value;h&&(d[h]=j)}d.$to="ahill@rosehousecolorado.com,alex.steven.elias@gmail.com",d.$cc="mchambers101@gmail.com,ngrebe@rosehousecolorado.com",fetch("/email",{method:"POST",body:JSON.stringify(d)}).then(function(a){if(200!==a.status)throw new Error(a.statusText);b.reset()}).then(function(){b.style.display="none",a.style.color="#B0BF7F",a.innerText="Success: Form Sent"}).catch(function(b){console.log(b),a.style.color="#89293D",a.innerText="Error: Please Call"})})}();