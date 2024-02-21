<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Origin: *');
require_once "DB.php";

$db = new DB();

try {
    $connection = $db->getConnection();

    $query = "SELECT s.adress, s.port, st.type, st.image
              FROM servers s
              INNER JOIN server_type st ON s.server_type_id = st.id";

    $statement = $connection->prepare($query);
    $statement->execute();

    $servers = [];

    while ($serverData = $statement->fetch(PDO::FETCH_ASSOC)) {
        $address = $serverData['adress'];
        $port = $serverData['port'];
        $type = $serverData['type'];
        $image = $serverData['image'];

        $url = "https://query.fakaheda.eu/{$address}:{$port}.feed";

        $json = file_get_contents($url);

        $data = json_decode($json, true);

        // Check if 'status' is 'notfound', if so, skip adding this record
        if ($data['status'] !== 'notfound') {
            $servers[] = [
                'hostname' => $data['hostname'],
                'is_running' => $data['status'],
                'ip' => $address,
                'port' => $port,
                'players' => $data['players'],
                'slots' => $data['slots'],
                'type' => $type,
                'image' => $image
            ];
        }
    }
    echo json_encode($servers);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Failed to fetch server list.']);
    die("Database connection failed: " . $e->getMessage());
}

