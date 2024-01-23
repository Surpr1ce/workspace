<?php

$options = [
    'http' => [
        'header' => "Authorization: Bearer CWlpSmAhB4GNyowB3514zhuO2gpGGtlyuvyoF2tB\r\n",
    ],
];

// Get the list of servers
$resultList = file_get_contents("https://www.fakaheda.eu/fhapi/v1/servers/list", false, stream_context_create($options));
$serverList = json_decode($resultList, true);

if ($serverList['result'] && isset($serverList['servers'])) {
    $outputArray = [];

    $servers = $serverList['servers'];

    // Iterate through each server and get details
    foreach ($servers as $server) {
        $serverId = $server['server_id'];

        // Get detailed information for the server
        $resultDetails = file_get_contents("https://www.fakaheda.eu/fhapi/v1/servers/{$serverId}", false, stream_context_create($options));
        $serverDetails = json_decode($resultDetails, true);

        // Process the server details
        if ($serverDetails['result']) {
            $output = [
                'server_id' => $serverId,
                'hostname' => $serverDetails['hostname'],
                'is_running' => $serverDetails['is_running'],
                'ip' => $serverDetails['ip'],
                'port' => $serverDetails['port'],
                'players' => $serverDetails['players'],
                'slots' => $serverDetails['slots'],
            ];

            $outputArray[] = $output;
        }
    }
    echo json_encode($outputArray); 
} else {
    echo json_encode(['error' => 'Failed to fetch server list.']);
}
