<?php
require 'PHPMailerAutoload.php';

//Importamos las variables del formulario de contacto
@$nombresApellidos = addslashes($_POST['nombresApellidos']);
@$nombreEmpresa = addslashes($_POST['nombreEmpresa']);
@$correoElectronico = addslashes($_POST['correoElectronico']);
@$asunto = addslashes($_POST['asunto']);
@$mensajeHtml = addslashes($_POST['mensajeHtml']);

$mail = new PHPMailer;

//$mail->SMTPDebug = 4;                               // Habilitar el debug

$mail->isSMTP();                                      // Usar SMTP
$mail->Host = 'smtp.gmail.com';  // Especificar el servidor SMTP reemplazando por el nombre del servidor donde esta alojada su cuenta
$mail->SMTPAuth = true;                               // Habilitar autenticacion SMTP
$mail->Username = 'milor.roco@gmail.com';                 // Nombre de usuario SMTP donde debe ir la cuenta de correo a utilizar para el envio
$mail->Password = 'TodoPodreEnCristo1012';                           // Clave SMTP donde debe ir la clave de la cuenta de correo a utilizar para el envio
$mail->SMTPSecure = 'ssl';                            // Habilitar encriptacion
$mail->Port = 465;                                    // Puerto SMTP

$mail->setFrom('milor.roco@gmail.com');     //Direccion de correo remitente
$mail->addAddress('milor.roco@gmail.com');     // Agregar el destinatario
$mail->addReplyTo('milor.roco@gmail.com');     //Direccion de correo para respuestas

$mail->isHTML(true);                                  // Habilitar contenido HTML

$mail->Subject = $asunto;
$mail->Body    = $mensajeHtml;

if(!$mail->send()) {
    echo 'El mensaje no pudo ser enviado';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'El mensaje ha sido enviado';
}
?>
