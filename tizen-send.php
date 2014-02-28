<?php

$filePath = $_FILES["file"]["tmp_name"];
$email = $_POST["email"];
$type = $_POST["type"];
$app_name = $_POST["app_name"];
$app_url = $_POST["app_url"];
$endpoint = "http://www.appbackr.com/TizenApi/SubmitApp";
$params = array(
"file" => "$filePath",
"type" => "$type",
"apiKey" => "openFL",
"email" => "$email",
"app_name" => "$app_name",
"app_url" => "$app_url"
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_URL, $endpoint);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
$response = curl_exec($ch);
echo $response;
curl_close($ch);

?>