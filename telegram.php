<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$textarea = $_POST['textarea'];

// токен нашего бота из botFather
$token = "1860450945:AAG65Cz2iOFpes064E42n5Gn8w8KhyS-MaE";
// $chat_id = "https://api.telegram.org/bot1860450945:AAG65Cz2iOFpes064E42n5Gn8w8KhyS-MaE/getUpdates";
$chat_id = "-521223655";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Емеил: ' => $email,
  'Вопрос пользователя' => $textarea
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
