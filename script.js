var g=0;
function knowMore() {
    if(g===0) {
        document.getElementById('mrTxt').style.display="block";
        document.getElementById('about').style.boxShadow="0px 0px 15px 1px var(--colorz)";
        document.getElementById('mrBtn').innerHTML="Read Less";
        g=1;
    }
    else {
        document.getElementById('mrTxt').style.display="none";
        document.getElementById('mrBtn').innerHTML="Read Less";
        document.getElementById('mrBtn').innerHTML="Know Less";
        document.getElementById('about').style.boxShadow="0px 0px 10px -1px var(--colorz)";
        g=0;
    }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
          console.log('Service worker registered.', reg);
        });
  });
}

function openCart() {
	window.location.href='cart/index.htm';
}
'undefined'=== typeof _trfq || (window._trfq = []);'undefined'=== typeof _trfd &&
(window._trfd=[]),_trfd.push(

{'tccl.baseHost':'$BASEHOST'}),_trfd.push(

{'ap':'$AP'},{'server':'$HOSTNAME'})