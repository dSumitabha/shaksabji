<?php
    $cart = $_POST['Cart'];
    $person = $_POST['person'];
    $unix = (string)time();
    $strUnix = substr($unix,3,6);
    $rNum = (string)rand(10,100);
    $orderId = "SJ".$strUnix.$rNum;
    $fileName = $orderId.'.csv';
    $file = fopen($fileName,"w");
    
    
    
    $order = json_decode($cart);
    foreach ($order as $item) { 
        fputcsv($file, $item); 
    }
    
    fwrite($file, $person);

    fclose($file);
    echo "your order is placed with Order ID ".$orderId."<br/>Thank You :)";    
    echo "<script id='sc1'>
            var orderid = ['$orderId'];
            localStorage.setItem('orderid',JSON.stringify(orderid));
        </script>";
    echo "<script id='sc2'>
            var exOid = localStorage.getItem('orderid');
            var nwOid = JSON.parse(exOid);
            nwOid.push('$orderId');
            localStorage.setItem('orderid',JSON.stringify(nwOid))
        </script>";
?>