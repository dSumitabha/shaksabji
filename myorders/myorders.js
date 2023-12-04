function gtOdDtl() {
    var lsOid = localStorage.getItem('orderid');
    if (lsOid===null) {
        document.getElementById('noOd').style.display = "block";
        document.getElementById('noOd').innerHTML=
        "Sorry you have not ordered any item from us .Go to to order your requirments."
    }
    else {
        document.getElementById('orderIds').style.display = "block"
        var ods = JSON.parse(lsOid);
        ods.forEach(showIds);
    }
    function showIds(item,index) {
            document.getElementById('orderIds').innerHTML += "<li class='odliEm' id="+index+" onclick='getDet(event)'>"+item+"</li>";
        }
}

function getDet(event){
    var nId = event.target.id;
    console.log(nId);
    var lsOid = localStorage.getItem('orderid');
    var ods = JSON.parse(lsOid);
    var oId = 'orderId='+ods[nId];
    console.log(oId);
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState ==4) {
			if (xhttp.status == 200 ) {
			    var res = xhttp.responseText;
			    var clRes = res.replace(/string/gi,'<br/>');
			    var clres = clRes.trim("false");
			    console.log(clRes);
			    document.getElementById(nId).innerHTML=clres;
		  //      eval(document.getElementById('sc1').innerHTML);
			   }
		}        
			if (xhttp.status == 404) {
				console.log("something is went wrong") ;
			}
		}
	
	xhttp.open("POST","orederdtls.php");
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(oId);
}




