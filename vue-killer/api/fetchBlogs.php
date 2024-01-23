<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Origin: *');

require_once "DB.php";

$db = new DB();
$connection = $db->getConnection();

$sql = "SELECT * FROM blog INNER JOIN admin ON blog.author = admin.id ORDER BY blog.id DESC LIMIT 3";
$query = $connection->query($sql);

if ($query) {
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
} else {
    echo json_encode(['error' => 'Unable to fetch blogs']);
}