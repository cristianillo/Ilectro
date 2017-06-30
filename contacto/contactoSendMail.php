<?php

require 'PHPMailerAutoload.php';

$mail = new PHPMailer;


@$asunto = addslashes($_POST['asunto']);
@$mensajeHtml = addslashes($_POST['mensajeHtml']);

$mensajeHtml = utf8_decode($mensajeHtml);
$mensajeHtml = str_replace('\\\'', '"', $mensajeHtml);

//$mail->SMTPDebug = 2;                               // Habilitar el debug
$mail->isSMTP();                                      // Usar SMTP
$mail->Host = 'smtp.gmail.com'; // Especificar el servidor SMTP reemplazando por el nombre del servidor donde esta alojada su cuenta
$mail->SMTPAuth = true;

$mail->Username = 'contacto.ilectro@gmail.com';                 // Nombre de usuario SMTP donde debe ir la cuenta de correo a utilizar para el envio
$mail->Password = '';                           // Clave SMTP donde debe ir la clave de la cuenta de correo a utilizar para el envio
$mail->SMTPSecure = 'tls';
$mail->Port = 587;                                    // Puerto SMTP

$mail->setFrom('contacto.ilectro@gmail.com');     //Direccion de correo remitente
$mail->addAddress('contacto@ilectro.com.co');     // Agregar el destinatario

$mail->Subject = $asunto ;
$mail->Body= $mensajeHtml ;
$mail->isHTML(true);                                  // Habilitar contenido HTML


if(!$mail->send()) {
	echo '{"codigoErrorApp":1, "errorSendMail":"'.$mail->ErrorInfo.'"}';
} else {
    echo '{"codigoErrorApp":0, "errorSendMail": "Mensaje enviado"}';
}

?>
