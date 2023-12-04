<?php
    $phNo = $_POST['cntnum'];
    $name = $_POST['fname'];
    $title = $_POST['lname'];
    $lmark = $_POST['lmark'];
    $area = $_POST['area'];
    $town = $_POST['town'];
    $dist = $_POST['dist'];
    
    $person['Name'] = $name.$title;
    $person['Phone'] = $phNo;
    $person['Landmark'] = $lmark;
    $person['Area'] = $area;
    $person['Town'] = $town;
    $person['District'] = $dist;
    
    $fileName = "../bspshaksabji/".$phNo.".csv";
    $file=fopen($fileName, 'w');
    
    fputcsv($file, $person);

    fclose($file);
    echo "Thank You ".$name;
    echo "Sign Up Successful";
    echo " Go back to <a href='index.htm'>cart</a> "

    
?>