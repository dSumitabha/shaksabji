function logIn() {
	var phable = localStorage.getItem('phoneNumber');
	if (phable===null){
		document.getElementById('signin').style.display="block";
		var node = document.createElement("P");
        var textnode = document.createTextNode("Sign Up First");
        node.appendChild(textnode);
        document.getElementById("cartCont").appendChild(node);
	}
	else {
		document.getElementById('existing').style.display="block";
		
		document.getElementById('fnameresult').innerHTML = localStorage.getItem("firstName");
		document.getElementById('contact').innerHTML = localStorage.getItem("phoneNumber");
		document.getElementById('areaname').innerHTML = localStorage.getItem("areaName");
		document.getElementById('landmark').innerHTML = localStorage.getItem("landMark");
	}
}

var potatoRate = 1.8 ;
var beanRate = 1.4 ;
var bitterRate = 2 ;
var groudRate = 1 ;
var cabbgeRate = 1.5 ;
var carrotRate = 2 ;
var eggplantRate = 1.6 ;
var pumpkinRate = 1 ;
var tomatoRate = 1.5 ;
var orkaRate = 1.5 ;
var jackfruitRate = 2.5 ;


function assignRate() {
document.getElementById('rateOutput101').innerHTML= potatoRate*10;
document.getElementById('rateOutput111').innerHTML= beanRate*10;
document.getElementById('rateOutput121').innerHTML= bitterRate*10;
document.getElementById('rateOutput131').innerHTML= groudRate*10;
document.getElementById('rateOutput141').innerHTML= cabbgeRate*10;
document.getElementById('rateOutput151').innerHTML= carrotRate*10;
document.getElementById('rateOutput161').innerHTML= eggplantRate*10;
document.getElementById('rateOutput171').innerHTML= pumpkinRate*10;
document.getElementById('rateOutput181').innerHTML= tomatoRate*10;
document.getElementById('rateOutput191').innerHTML= orkaRate*10;
document.getElementById('rateOutput201').innerHTML= jackfruitRate*10;
localStorage.removeItem('total');
}

function saveLocally() {
	var phoneNumber = document.getElementById('cntnum').value ;
	var firstName = document.getElementById('fname').value ;
	var lastName = document.getElementById('lname').value ;
	var landMark = document.getElementById('lmark').value ;
	var areaName = document.getElementById('area').value ;
	
	localStorage.setItem("phoneNumber" , phoneNumber);
	localStorage.setItem("firstName" , firstName);
	localStorage.setItem("lastName" , lastName);
	localStorage.setItem("landMark" , landMark);
	localStorage.setItem("areaName" , areaName);
}

function showUserinfo() {
	document.getElementById('hidden-data').style.display = "block";
	document.getElementById('existing').style.backgroundImage = "url('res/blob1.svg')";

}

function showScale(event){
	var gPar = event.target.parentNode.parentNode.id;
	var gPartg = document.getElementById(gPar);
	gPartg.childNodes[1].style.display="flex";
	gPartg.children[0].children[3].style.display="none";
	gPartg.children[0].children[4].style.display="block";
	gPartg.children[1].childNodes[1].style.display="block";
	gPartg.children[1].childNodes[3].style.display="block";
}
function getWt(event) {
	var pridN = document.getElementById(event.target.parentNode.parentNode.id);
	var wtq = pridN.children[1].childNodes[1].value;
	var kj = pridN.children[1].children[1].childNodes[0].innerHTML=wtq;
}



var cart = new Array (
						
					);	
		
function addtoCart(event) {
	var x = event.target.parentNode.parentNode.id ;
	var z = document.getElementById(x).children[1].childNodes[1].value;
	var itsrate = document.getElementById(x).children[0].children[2].childNodes[1].innerText / 1000 ;
	var cost = (itsrate * z).toFixed(1) ;
	
	cart.push([ x,  z , cost],);
	localStorage.setItem("cart" ,JSON.stringify(cart));
	var cartElem = document.getElementById(x+'added');
	cartElem.style.display="flex";
	cartElem.children[2].children[0].innerHTML=z;
	cartElem.children[3].childNodes[1].innerHTML=cost;
	
	document.getElementById(x).children[0].children[2].innerHTML = z+" gm";
	document.getElementById(x).children[1].style.display="none";
	document.getElementById(x).children[0].children[4].style.backgroundImage = 'url(../res/checkmark.svg)';
	document.getElementById(x).children[0].children[4].style.backgroundSize = "100%";
	
	
	var lsTtl = localStorage.getItem('total');
	if(lsTtl==null) {
	    document.getElementById('ttl').style.display = "block";
	    document.getElementById('dlCost').style.display = "flex";
	    var fstTotal = parseInt(cost)+0;
	    document.getElementById('total').innerHTML=fstTotal;
	    localStorage.setItem('total', fstTotal);
	}
	else {
	   var preTtl = parseInt(localStorage.getItem('total'));
	   var total = parseInt(cost)+preTtl;
	   document.getElementById('total').innerHTML=total;
	   localStorage.setItem('total',total);
	}
	
	if (localStorage.getItem('cart').length>1) {
		document.getElementById('placeorder').style.display ="block";
		document.getElementById('cartAlert').style.display = "none";
	}
}
	
function placeOrder() {
    var phable = localStorage.getItem('phoneNumber');
	if (phable===null){
	    warn();
	}
	else {
        var pson = [
                localStorage.getItem('phoneNumber'),
                localStorage.getItem('firstName')+" "+localStorage.getItem('lastName'),
                localStorage.getItem('areaName')+" "+localStorage.getItem('landMark')
                ];
        var person = JSON.stringify(pson);


        var toSend ="Cart="+localStorage.getItem('cart')+"&person="+pson;
        var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function () {
		if (xhttp.readyState ==4) {
			if (xhttp.status == 200 ) {
			    document.getElementById('placeorder').remove();
			    document.getElementById('cartCont').remove();
			    document.getElementById('svop').style.display ="block";
				document.getElementById('svop').innerHTML=xhttp.responseText;
				var lsIdchk = localStorage.getItem('orderid');
				if (lsIdchk==null){
				    eval(document.getElementById('sc1').innerHTML);
                }
                else {
                    eval(document.getElementById('sc2').innerHTML) 
                }
		    }        
			if (xhttp.status == 404) {
				console.log("Something is going wrong") 
			}
		}
	}
	    xhttp.open("POST","getorder.php");
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send(toSend);
	    console.log(toSend);
}
}

function warn(){
    document.getElementById('signin').style.position="fixed";
    document.getElementById('signin').style.left="5%";
    document.getElementById('signin').style.width="90%";
    document.getElementById('signin').style.boxShadow="0px 0px 15px 0px var(--colorz)";
    document.getElementById('signin').style.top="25%";
    document.getElementById('signin').style.backgroundColor="var(--colorx)";
}
'undefined'=== typeof _trfq || (window._trfq = []);'undefined'=== typeof _trfd &&
(window._trfd=[]),_trfd.push(

{'tccl.baseHost':'$BASEHOST'}),_trfd.push(

{'ap':'$AP'},{'server':'$HOSTNAME'})



		