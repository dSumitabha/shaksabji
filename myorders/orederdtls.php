<?php
$prVal = $_POST['orderId'];
$fileName = "../cart/".$prVal.".csv";
$file = fopen($fileName, 'r');
while(!feof($file))
  {
  $line = fgetcsv($file);
  $arLine = json_encode($line);
  var_dump($arLine);
  }
  
  

?>