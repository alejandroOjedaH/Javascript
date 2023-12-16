<?php
    header('Content-Type: application/json');
    $id=null;
    $con = mysqli_connect('localhost','root','','ejemplodept');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_set_charset($con, "utf8");

    $sql="UPDATE empleados SET ".$_GET['campo']." = '".$_GET["valor"]."' WHERE EMP_NO = ".$_GET['id'];
    $result = mysqli_query($con,$sql);

    echo json_encode($datos);
    mysqli_close($con);
?>