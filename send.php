<?php

$name = $_POST['name'];
$subj = "Mohammad Al-Ahdal - Contact Form";
$msg = $_POST['message'];
$fromEmail = $_POST['email'];
$tc = "mohammad@enggmomo.me.test-google-a.com";
$body  = "$name\n$fromEmail\n\n$msg";

mail($tc, $subj, $body);

header('Location: ' . $_SERVER['HTTP_REFERER']);
exit();

?>
