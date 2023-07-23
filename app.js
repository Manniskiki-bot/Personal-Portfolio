
let options = {
    strings: ['Web Developer! 😊', 'Freelancer! 🥰', 'Web Designer! ❤️'],
    typeSpeed: 70,
    startDelay: 3000,
    loop: true
  };
  
  let typed = new Typed('#typed-text', options);


const downloadBtn = document.getElementById('download-btn');

  downloadBtn.addEventListener('click', function() {
       let downloadLink = document.createElement('a');
       downloadLink.href = '/MARY_KINYANJUI RESUME.pdf';
       downloadLink.setAttribute('target', '_blank');
       downloadLink.setAttribute = ('download', 'MARY_KINYANJUI RESUME.pdf');
       document.body.appendChild(downloadLink);
       downloadLink.click();
       document.body.removeChild(downloadLink);
  });





  