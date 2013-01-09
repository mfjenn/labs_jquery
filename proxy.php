<?php
$base_url = 'http://yamba.marakana.com/';
$requested_url = str_replace('/proxy.php', '', $_SERVER["PHP_SELF"]);

$url      = $base_url.$requested_url;
$method   = (!empty($_POST)) ? 'post' : 'get';

if (!isset($_SERVER['PHP_AUTH_USER'])) {
  header("WWW-Authenticate: Basic realm=\"Private Area\"");
  header("HTTP/1.0 401 Unauthorized");
  exit;
} else {
  $ch = curl_init();
  if ($method == 'get')
  {
    if ($_SERVER['QUERY_STRING']) $url .= '?' . $_SERVER['QUERY_STRING'];
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, $_SERVER['PHP_AUTH_USER'].':'.$_SERVER['PHP_AUTH_PW']);
    curl_setopt($ch, CURLOPT_URL, $url);
  }
  else
  {
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, $_SERVER['PHP_AUTH_USER'].':'.$_SERVER['PHP_AUTH_PW']);
    curl_setopt($ch, CURLOPT_URL, $url);
  }
   
  $data = curl_exec($ch);
  curl_close($ch);
}
?>