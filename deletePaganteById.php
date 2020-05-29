<?php

header('Content-Type: application/json');

$server="localhost";
$username="root";
$password="root";
$dbName="HotelDB";

$id=$_POST["id"];

$conn = new mysqli($server, $username, $password,$dbName);

if ($conn -> connect_errno) {
    echo $conn -> connect_errno;
    return;
}
$sql = "
    DELETE
    FROM paganti
    WHERE id=". $id;

$results = $conn -> query($sql);

$conn->close();
echo json_encode(['reponse'=>"Eliminazione ok"]);