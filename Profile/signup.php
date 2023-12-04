<?php
    $person = $_POST["people"];
    $fileName = $_POST['Phone'].'.csv';
    $file=fopen($fileName, 'w');
    fwrite($file,$person);
    fclose($file);
    echo $fileName;
?>