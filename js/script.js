var $body = document.getElementsByTagName('body')[0];
      var $btnCopy = document.getElementById('btnCopy');
      var secretInfo = document.getElementById('secretInfo').innerHTML;

      var copyToClipboard = function(secretInfo) {
        var $tempInput = document.createElement('INPUT');
        $body.appendChild($tempInput);
        $tempInput.setAttribute('value', secretInfo)
        $tempInput.select();
        document.execCommand('copy');
        $body.removeChild($tempInput);
      }

      $btnCopy.addEventListener('click', function(ev) {
        copyToClipboard(secretInfo);
        alert("E-mail is copied");
      });




const navbar = document.querySelector('.navbar');

navbar.querySelector('.toggle').addEventListener('click', () => {

  navbar.classList.toggle('collapsed');

});



window.addEventListener('scroll', e => {

  let windowY = window.pageYOffset;

  let navbarHeight = document.querySelector('.navbar').offsetHeight;

  if (windowY > navbarHeight) navbar.classList.add('sticky');else
  navbar.classList.remove('sticky');




});