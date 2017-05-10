<?php

require 'PHPMailerAutoload.php';

$mail = new PHPMailer;


@$asunto = addslashes($_POST['asunto']);
@$mensajeHtml = addslashes($_POST['mensajeHtml']);
/*
@$mensaje = addslashes($_POST['mensaje']);
@$nombresYApellidos = addslashes($_POST['nombresYApellidos']);
@$nombreEmpresa = addslashes($_POST['nombreEmpresa']);
@$correoElectronico = addslashes($_POST['correoElectronico']);*/
$mensajeHtml = utf8_decode($mensajeHtml);
$mensajeHtml = str_replace('\\\'', '"', $mensajeHtml);

$mail->SMTPDebug = 2;                               // Habilitar el debug

$mail->isSMTP();                                      // Usar SMTP
//$mail->Host = 'mail.ilectro.com.co';
$mail->Host = 'smtp.gmail.com'; // Especificar el servidor SMTP reemplazando por el nombre del servidor donde esta alojada su cuenta
$mail->SMTPAuth = true; 

$mail->Username = 'contacto.ilectro@gmail.com';                 // Nombre de usuario SMTP donde debe ir la cuenta de correo a utilizar para el envio
$mail->Password = 'xxxx';                           // Clave SMTP donde debe ir la clave de la cuenta de correo a utilizar para el envio
$mail->SMTPSecure = 'tls';
$mail->Port = 587;                                    // Puerto SMTP

/*
$mail->Username = 'milor.roco@gmail.com';
$mail->Password = 'TodoPodreEnCristo1012';
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;                            // Habilitar encriptacion
$mail->Port = 587;*/

$mail->setFrom('contacto.ilectro@gmail.com');     //Direccion de correo remitente
//$mail->addAddress('milor.roco@gmail.com');     // Agregar el destinatario
$mail->addAddress('contacto@ilectro.com.co');     // Agregar el destinatario
//$mail->addReplyTo('milor.roco@gmail.com');     //Direccion de correo para respuestas
//$mail->AddBCC('milor.roco@gmail.com');


$mail->Subject = $asunto ;
//$mail->AltBody= $mensajeHtml ;
$mail->Body= $mensajeHtml ;
//$mail->Body= get_file_contents('http://www.google.com.co/') ;
//$mail->Body= get_file_contents('contactoEstilo.html') ;

//$mail->msgHTML($mensajeHtml);
//$mail->msgHTML(get_file_contents('contactoEstilo.html'));
$mail->isHTML(true);                                  // Habilitar contenido HTML


if(!$mail->send()) {
    //echo '{"codigoErrorApp":1, "errorSendMail":"'.$mail->ErrorInfo.'", "mensaje": "'.$mensajeHtml .'"}';
	echo '{"codigoErrorApp":1, "errorSendMail":"'.$mail->ErrorInfo.'"}';
} else {
    echo '{"codigoErrorApp":0, "errorSendMail": "Mensaje enviado"}';
}

?>
