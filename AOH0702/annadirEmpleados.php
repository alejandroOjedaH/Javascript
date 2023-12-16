<?php
    header('Content-Type: application/json');
    $id=null;
    $con = mysqli_connect('localhost','root','','ejemplodept');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_set_charset($con, "utf8");

    $sql="SELECT EMP_NO FROM empleados ORDER BY EMP_NO DESC LIMIT 1;";
    $result = mysqli_query($con,$sql);
    while($row = mysqli_fetch_assoc($result)) {
        $id=intval($row['EMP_NO']);
        $id++;
    }

    $sql="INSERT INTO empleados (EMP_NO,".$_GET['campo'].") value(".$id.",'".$_GET["valor"]."')";
    $result = mysqli_query($con,$sql);

    echo json_encode($datos);
    mysqli_close($con);
?>