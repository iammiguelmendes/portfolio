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


window.addEventListener('scroll', function(){
  var header = document.querySelector('.header');
  header.classList.toggle("sticky", window.scrollY > 0);
  var text1 = document.querySelector('#nav1');
  text1.classList.toggle("sticky", window.scrollY > 0);
  var text2 = document.querySelector('#nav2');
  text2.classList.toggle("sticky", window.scrollY > 0);
  var text3 = document.querySelector('#nav3');
  text3.classList.toggle("sticky", window.scrollY > 0);
  var text4 = document.querySelector('#nav4');
  text4.classList.toggle("sticky", window.scrollY > 0);
});