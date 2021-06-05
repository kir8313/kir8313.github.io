<?
require_once 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);

// post request to server

// От кого письмо
$mail->setFrom('admin@' . $_SERVER['HTTP_HOST'], 'Письмо с твоего сайта');
// Кому отправлять
$mail->addAddress('arzamaskinkirill@gmail.com');
// Тема письма
$mail->Subject = 'Привет! Это письмо с cайта';


// Тело письма
$body = '<h1>Встречай первое лучшее письмо!</h1>';

if(trim(!empty($_POST['email']))){
	$body.='<p><strong>Почта:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['checkbox']))){
	if($_POST['checkbox'] == ''){
				$body.='<span><strong>Отправлять новости:</strong> Нет</span>';
	} else {
			$body.='<span><strong>Отправлять новости:</strong> Да</span>';
	}
}


$mail->Body = $body;

// Отправляем
if (!$mail->send()) {
	$response = 'Ошибка';
} else {
	$response = 'Данные отправлены!';
}

header('Content-type: application/json');
echo json_encode($response);

?>