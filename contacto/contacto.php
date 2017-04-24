<?php
//Importamos las variables del formulario de contacto

@$nombresApellidos = addslashes($_POST['nombresApellidos']);
@$nombreEmpresa = addslashes($_POST['nombreEmpresa']);
@$correoElectronico = addslashes($_POST['correoElectronico']);
@$asunto = addslashes($_POST['asunto']);
@$mensaje = addslashes($_POST['mensaje']);

$correoDestino = "contacto@ilectro.com.co";

$estructuraCorreo = "<!DOCTYPE html>" .
"<html>" .
"    <head>" .
"        <title>Ilectro.com.co</title>" .
"        <meta charset='UTF-8'>" .
"        <meta name='viewport' content='width=device-width'>" .
"    <style type='text/css'>" .
"body {" .
"  background: -moz-linear-gradient(top, #fb4343, black);" .
"  background: -webkit-linear-gradient(top, #fb4343, black);" .
"  background: -ms-linear-gradient(top, #fb4343, black);" .
"  background: -op-linear-gradient(top, #fb4343, black);" .
"  height: 800px;" .
"}" .
".container {" .
"    width: 80%;" .
"    max-width: 800px;" .
"    height: 100%;" .
"    margin: 0 auto;" .
"}" .
"#signup {" .
"    padding: 0px 25px 25px;" .
"    background: #fff;" .
"    box-shadow: " .
"        0px 0px 0px 5px rgba( 255,255,255,0.4 ), " .
"        0px 4px 20px rgba( 0,0,0,0.33 );" .
"    -moz-border-radius: 5px;" .
"    -webkit-border-radius: 5px;" .
"    border-radius: 5px;" .
"    display: table;" .
"    position: static;" .
"}" .
"#signup .header {" .
"    margin-bottom: 20px;" .
"}" .
"#signup .header h3 {" .
"    color: #333333;" .
"    font-size: 24px;" .
"    font-weight: bold;" .
"    margin-bottom: 5px;" .
"}" .
"#signup .header p {" .
"    color: #8f8f8f;" .
"    font-size: 14px;" .
"    font-weight: 300;" .
"}" .
"#signup .sep {" .
"    height: 1px;" .
"    background: #e8e8e8;" .
"    width: 100%;" .
"    margin: 0px -25px;" .
"}" .
"#signup .inputs {" .
"    margin-top: 25px;" .
"}" .
"#signup .inputs label {" .
"    color: #8f8f8f;" .
"    font-size: 15px;" .
"    font-weight: 300;" .
"    letter-spacing: 1px;" .
"    margin-bottom: 7px;" .
"    display: block;" .
"}" .
"input::-webkit-input-placeholder {" .
"    color:    #b5b5b5;" .
"}" .
"input:-moz-placeholder {" .
"    color:    #b5b5b5;" .
"}" .
"#signup .inputs input, textarea{" .
"    background: #f5f5f5;" .
"    font-size: 0.8rem;" .
"    -moz-border-radius: 3px;" .
"    -webkit-border-radius: 3px;" .
"    border-radius: 3px;" .
"    border: none;" .
"    padding: 13px 10px;" .
"    width: 90%;" .
"    margin-bottom: 20px;" .
"    box-shadow: inset 0px 2px 3px rgba( 0,0,0,0.1 );" .
"    clear: both;" .
"}" .
"#signup .inputs .checkboxy {" .
"    display: block;" .
"    position: static;" .
"    height: 25px;" .
"    margin-top: 10px;" .
"    clear: both;" .
"}" .
"#signup .inputs input[type=checkbox] {" .
"    float: left;" .
"    margin-right: 10px;" .
"    margin-top: 3px;" .
"}" .
"#signup .inputs label.terms {" .
"    float: left;" .
"    font-size: 16px;" .
"    font-style: italic;" .
"}" .
"#signup .inputs #submit {" .
"    width: 100%;" .
"    margin-top: 20px;" .
"    padding: 15px 0;" .
"    color: #fff;" .
"    font-size: 14px;" .
"    font-weight: 500;" .
"    letter-spacing: 1px;" .
"    text-align: center;" .
"    text-decoration: none;" .
"        background: -moz-linear-gradient(" .
"        top," .
"        #b9c5dd 0%," .
"        #a4b0cb);" .
"    background: -webkit-gradient(" .
"        linear, left top, left bottom, " .
"        from(#b9c5dd)," .
"        to(#a4b0cb));" .
"    -moz-border-radius: 5px;" .
"    -webkit-border-radius: 5px;" .
"    border-radius: 5px;" .
"    border: 1px solid #737b8d;" .
"    -moz-box-shadow:" .
"        0px 5px 5px rgba(000,000,000,0.1)," .
"        inset 0px 1px 0px rgba(255,255,255,0.5);" .
"    -webkit-box-shadow:" .
"        0px 5px 5px rgba(000,000,000,0.1)," .
"        inset 0px 1px 0px rgba(255,255,255,0.5);" .
"    box-shadow:" .
"        0px 5px 5px rgba(000,000,000,0.1)," .
"        inset 0px 1px 0px rgba(255,255,255,0.5);" .
"    text-shadow:" .
"        0px 1px 3px rgba(000,000,000,0.3)," .
"        0px 0px 0px rgba(255,255,255,0);" .
"    display: table;" .
"    position: static;" .
"    clear: both;" .
"}" .
"#signup .inputs #submit:hover {" .
"    background: -moz-linear-gradient(" .
"        top," .
"        #a4b0cb 0%," .
"        #b9c5dd);" .
"    background: -webkit-gradient(" .
"        linear, left top, left bottom, " .
"        from(#a4b0cb)," .
"        to(#b9c5dd));" .
"}" .
"#signup .footer {" .
"    background: -moz-linear-gradient(" .
"        top," .
"        black 80%," .
"        white 10%);" .
"    padding: 10px;" .
"    background: -webkit-linear-gradient(" .
"        top," .
"         black 80%," .
"        white 10%);" .
"    color: white;" .
"    text-align: center;" .
"}" .
"a {" .
"    text-decoration: none;" .
"    color: white;" .
"}" .
"    </style>" .
"        <script src='js/vendor/bootstrap.js'></script>" .
"    </head>" .
"    <body>" .
"        <div class='container'>" .
"            <form id='signup'>" .
"                <div class='header'>                " .
"                    <h3>¡Gracias por contactarnos!</h3>                   " .
"                </div>                " .
"                <div class='sep' style='width:100%'></div>" .
"                <div class='inputs'>                " .
"        <p class='letra_correo'>Hemos recibido la siguiente informaci&oacute;n que ha enviado, pronto nos estaremos contactando con usted. </p>" .
"                                <div class='form-group has-feedback'>" .
"                                        <label for='nombresApellidos'>Nombres y apellidos</label>" .
"                                        <input type='text' class='form-control' id='nombresApellidos' name='nombresApellidos' value='" . $nombresApellidos . "' readonly>" .
"                                        <i class='fa fa-user form-control-feedback'></i>" .
"                                    </div>" .
"                                    <div class='form-group has-feedback'>" .
"                                        <label for='nombreEmpresa'>Nombre de su empresa</label>" .
"                                        <input type='text' class='form-control' id='nombreEmpresa' name='nombreEmpresa' value='" . $nombreEmpresa . "' readonly>" .
"                                        <i class='fa fa-building form-control-feedback'></i>" .
"                                    </div>" .
"                                    <div class='form-group has-feedback'>" .
"                                        <label for='correoElectronico'>Correo electr&oacute;nico</label>" .
"                                        <input type='email' class='form-control' id='correoElectronico' name='correoElectronico' value='" . $correoElectronico . "' readonly>" .
"                                        <i class='fa fa-envelope form-control-feedback'></i>" .
"                                    </div>" .
"                                    <div class='form-group has-feedback'>" .
"                                        <label for='asunto'>Asunto</label>" .
"                                        <input type='text' class='form-control' id='asunto' name='asunto' value='" . $asunto . "' readonly>" .
"                                        <i class='fa fa-navicon form-control-feedback'></i>" .
"                                    </div>" .
"                                    <div class='form-group has-feedback'>" .
"                                        <label for='mensage'>Mensaje</label>" .
"                                        <textarea class='form-control' rows='7' id='mensage' name='mensage'  readonly>" . $mensaje . "</textarea>" .
"                                        <i class='fa fa-pencil form-control-feedback'></i>" .
"                                    </div>                      " .
"                </div>" .
"                <div class='footer'>" .
"                    <h3><a href='http://www.ilectro.com.co'>www.ilectro.com.co</a></h3>" .
"                </div>" .
"            </form>" .
"        </div>" .
"    </body>" .
"</html>";

//Enviamos el mensaje y comprobamos el resultado
if (@mail($correoDestino, $asunto ,$estructuraCorreo ,"Content-type: text/html;charset=UTF-8" )) {

//Si el mensaje se envÃ­a muestra una confirmaciÃ³n
die("Gracias, su mensaje se envio correctamente.");
}else{
//Si el mensaje no se envÃ­a muestra el mensaje de error
die("Error: Su informaciÃ³n no pudo ser enviada, intente mÃ¡s tarde");
}
?>