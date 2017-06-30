$(document).ready(function() {
    if (!String.prototype.includes) {
        String.prototype.includes = function (search, start) {
            'use strict';
            if (typeof start !== 'number') {
                start = 0;
            }

            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }
    Ilectro.cargarMenuPagina();
    Ilectro.cargarMenuLateral("ingenieriaElectrica", "INGELEC");
    $(document).on('submit',function (e) {
      e.preventDefault();
      return false;
    });
});
var Ilectro = {
	nombreMenuSeleccionado : "",
	cargarMenuPagina : function(){
		var menuSuperior = "<ul id='menuSuperior' class='nav navbar-nav navbar-right'>";//navbar-left
		$.each(Menu.opcionesMenu, function(nombreArray, menuArray){
			menuSuperior += "<li class='dropdown' nombreMenu='" + nombreArray + "'>";
			$.each(menuArray, function(j, menu){
				if(j === 0){
					var nombreDelMenu = menu.nombreMenu;
					if(menu.nombreMenu.includes(" "))
						nombreDelMenu = menu.nombreMenu.replace(" ", "<br>");

                                        if(menu.codigoDeLaOpcion === "CONTACTO"){
                                            menuSuperior += "<a href='#' class='contacto' data-target='#formularioContacto'>" + nombreDelMenu + "</a>" +
									"<ul class=''>";
                                        }else
                                            menuSuperior += "<a href='#contenidoMenuLateral' class='dropdown-toggle menuSuperior' codigo-opcion='" + menu.codigoDeLaOpcion + "' data-toggle='dropdown'>" + nombreDelMenu + "</a>" +
									"<ul class='dropdown-menu'>";
				}else{
                                    menuSuperior += "<li><a href='#contenidoMenuLateral' codigo-opcion='" + menu.codigoDeLaOpcion + "'><i class='icon-right-open'></i>" + menu.nombreMenu + "</a></li>";
				}
			});
			menuSuperior += "</ul></li>";
		});
		menuSuperior += "</ul>";
		$("#contenedorMenuSuperior").html(menuSuperior);

		Ilectro.inicializarEventos();
	},
	cargarMenuLateral : function(nombreMenuArray, codigoMenuActivo){
		var menuLateral = "";
		var contenidoMenuLateral = "";
		$("#menuLateral").html(menuLateral);
		$("#contenidoMenuLateral").html(contenidoMenuLateral);
		var activoMenuLateral = "active";
		var activoContenidoMenuLateral = "in active";
		$.each(Menu.opcionesMenu, function(nombreArray, menuArray){
			if(nombreMenuArray === nombreArray){
				$.each(menuArray, function(indice, menu){
					if(codigoMenuActivo !== menu.codigoDeLaOpcion){
						activoMenuLateral = "";
					    activoContenidoMenuLateral = "";
				    }else{
				    	activoMenuLateral = "active";
				    	activoContenidoMenuLateral = "in active";
				    }

					menuLateral += "<li class='" + activoMenuLateral + "'><a href='#tab" + indice + "' role='tab' data-toggle='tab'><i class='fa fa-plug '></i>  " + menu.nombreMenu + "</a></li>";

					contenidoMenuLateral += "<div class='tab-pane fade " + activoContenidoMenuLateral + "' id='tab" + indice + "'>" +
											"<h1 class='text-center title'>" + menu.nombreMenu + "</h1><div class='space'></div>" +
											"<div class='row'><div class='col-md-12 text-justify'>" +
											"<p>" + menu.contenidoTexto + "</p></div></div></div>" ;
				});
			}
		});
		$("#menuLateral").append(menuLateral);
		$("#contenidoMenuLateral").append(contenidoMenuLateral);
	},
	inicializarEventos : function(){
		$( "li a.menuSuperior" ).hover(function() {
			if(Ilectro.nombreMenuSeleccionado !== $( this ).parent().attr("nombreMenu") && Ilectro.nombreMenuSeleccionado !== ""){
				$( "ul li[nombreMenu=" + Ilectro.nombreMenuSeleccionado + "]" ).removeClass("open");
			}
		    $( this ).parent().addClass("open");
		    Ilectro.nombreMenuSeleccionado = $( this ).parent().attr("nombreMenu");
		  }
		);
		$( "ul.dropdown-menu" ).hover(null,function() {
		  	$( this ).parent().removeClass("open");
		  }
		);
		$("a").click(function(){
			if($(this).attr("codigo-opcion")!= null && $(this).attr("codigo-opcion").length){
				var valorCodigo = $(this).attr("codigo-opcion");
				Ilectro.cargarMenuLateral(Ilectro.nombreMenuSeleccionado, valorCodigo);
			}
                        window.location.href = "#contenidoMenuLateral";
		});

        $(".contacto").click(function(){
            $("#formularioContacto").modal("show");
		});

	},
  enviar : function(evento){
    if($("#contacto-form")[0].checkValidity()){
    var informacionEmail = {mensajeHtml : Ilectro.armarMensajeHtml($("#nombresApellidos").val() ,$("#nombreEmpresa").val(), $("#correoElectronico").val(), $("#mensaje").val()),
    asunto : $("#asunto").val()};

    $.ajax({
      type: "POST",
      url: "http://www.ilectro.com.co/contacto/contactoSendMail.php",
      data: informacionEmail,
      success: function(respuesta){

        var respuestaMail = JSON.parse(respuesta);
        if(respuestaMail.codigoErrorApp == 0){
          $("#mensajeUsuario").html("La informaci&oacute;n ha sido enviada exitosamente, pronto nos contactaremos con usted.");
          $("#formularioContacto").modal("hide");
          $("#mensajeInformacion").modal("show");
          $("#nombresApellidos").val(),
          $("#nombresApellidos, #nombreEmpresa, #correoElectronico, #asunto, #mensaje").val("");
        }else{
          $("#mensajeUsuario").html("La informaci&oacute;n no ha sido enviada correctamente debido a inconvenientes t&eacute;cnicos. <br><br>Error enviando mensaje: " + respuestaMail.errorSendMail);
          $("#mensajeInformacion").modal("show");
        }
      },
      error: function(error){
        var mensajeUsuario = "La informaci&oacute;n no ha sido enviada correctamente debido a inconvenientes t&eacute;cnicos.<br><br>Detalles: " + error.status + " " + (error.message == null ? "" : ", " + error.message);
        if(error.status === 404)
          mensajeUsuario = "La informaci&oacute;n no ha sido enviada correctamente debido a inconvenientes t&eacute;cnicos. No se encuentra la p&aacute;gina 'contacto' para enviar la informaci&oacute;n.";

        $("#mensajeUsuario").html(mensajeUsuario);
         $("#mensajeInformacion").modal("show");
      }
    });
  }
  },
  evaluarFormulario : function() {
    var respuesta = true;
    $.each($("#contacto-form").find("input"), function(i, inputForm){
      if($.trim($(inputForm).val()) == ""){
        respuesta = false;
      }
    });
    $.each($("form").find("textarea"), function(i, textareaForm){
      if($.trim($(textareaForm).text()) == ""){
        respuesta = false;
      }
    });

    return respuesta;
  },
	armarMensajeHtml : function(nombresApellidos, nombreEmpresa, correoElectronico, mensaje){
		var estructuraHtml = '<!DOCTYPE html>' +
"<html>" +
"   <head>" +
"      <title>Ilectro.com.co</title>" +
"      <meta charset='UTF-8'>" +
"   </head>" +
"   <body class=''>" +
"      <table width='100%' height='100%' border='0' cellspacing='0' cellpadding='0' style='min-width:348px'>" +
"         <tbody>" +
"            <tr height='32px'></tr>" +
"            <tr align='center'>" +
"               <td width='32px'></td>" +
"               <td>" +
"                  <table border='0' cellspacing='0' cellpadding='0' style='max-width:600px'>" +
"                     <tbody>" +
"                        <tr>" +
"                           <td>" +
"                              <table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
"                                 <tbody>" +
"                                    <tr>" +
"                                       <td align='left'>" +
"                                          <div style='display: inline-block;'><button type='button' class='_at_6 o365button' aria-labelledby='_ariaId_525' style='border-width: 0;background-color:transparent; -webkit-tap-highlight-color: transparent;-webkit-font-smoothing: antialiased;'><img src='http://www.ilectro.com.co/imagenes/LogoIlectroX680.png' width='165' height='65' style='display:block; width:165px; height:65px'><span class='_fc_3 owaimg' style='display: none;'> </span><span class='_fc_4 o365buttonLabel' id='_ariaId_525' style='display: none;'></span></button></div>" +
"                                       </td>" +
"                                       <td align='right'>" +
"                                          <div style='display: inline-block;'></div>" +
"                                       </td>" +
"                                    </tr>" +
"                                 </tbody>" +
"                              </table>" +
"                           </td>" +
"                        </tr>" +
"                        <tr height='16'></tr>" +
"                        <tr>" +
"                           <td>" +
"                              <table bgcolor='#D94235' width='100%' border='0' cellspacing='0' cellpadding='0' style='min-width:332px; max-width:600px; border:1px solid #E0E0E0; border-bottom:0; border-top-left-radius:3px; border-top-right-radius:3px'>" +
"                                 <tbody>" +
"                                    <tr>" +
"                                       <td height='72px' colspan='3'></td>" +
"                                    </tr>" +
"                                    <tr>" +
"                                       <td width='32px'></td>" +
"                                       <td style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif; font-size:24px; color:#FFFFFF; line-height:1.25'>¡Gracias por contactarnos!" +
"                                       </td>" +
"                                       <td width='32px'></td>" +
"                                    </tr>" +
"                                    <tr>" +
"                                       <td height='18px' colspan='3'></td>" +
"                                    </tr>" +
"                                 </tbody>" +
"                              </table>" +
"                           </td>" +
"                        </tr>" +
"                        <tr>" +
"                           <td>" +
"                              <table bgcolor='#FFFFFF' width='100%' border='0' cellspacing='0' cellpadding='0' style='min-width:332px; max-width:600px; border:1px solid #F0F0F0; border-top:0'>" +
"                                 <tbody>" +
"                                    <tr>" +
"                                       <td height='18px' colspan='3'></td>" +
"                                    </tr>" +
"                                    <tr>" +
"                                       <td width='32px'></td>" +
"                                       <td style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif; font-size:14px; color:#202020; line-height:1.5'>" +
"                                          Hemos recibido la siguiente información, pronto nos contactaremos." +
"                                       </td>" +
"                                       <td width='10px'></td>" +
"                                    </tr>" +
"                                    <tr>" +
"                                       <td height='18px' colspan='3'></td>" +
"                                    </tr>" +
"                                 </tbody>" +
"                              </table>" +
"                           </td>" +
"                        </tr>" +
"                        <tr>" +
"                           <td>" +
"                              <table bgcolor='#FAFAFA' width='100%' border='0' cellspacing='0' cellpadding='0' style='min-width:332px; max-width:600px; border:1px solid #F0F0F0; border-bottom:1px solid #C0C0C0; border-top:0; border-bottom-left-radius:3px; border-bottom-right-radius:3px'>" +
"                                 <tbody>" +
"                                    <tr height='16px'>" +
"                                       <td width='32px' rowspan='3'></td>" +
"                                       <td></td>" +
"                                       <td width='32px' rowspan='3'></td>" +
"                                    </tr>" +
"                                    <tr>" +
"                                       <td>" +
"                                          <table border='0' cellspacing='0' cellpadding='0' style='min-width:300px'>" +
"                                             <tbody>" +
"                                                <tr>" +
"                                                   <td style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif; font-size:14px; color:#202020; line-height:1.5; padding-bottom:4px'>" +
"                                                      Nombre" +
"                                                   </td>" +
"                                                </tr>" +
"                                                <tr>" +
"                                                   <td style='padding-left:5;margin:0;line-height:1px;border-radius:5px;background-color:#FFD2B4;border:1px solid #FF9148 ;direction:ltr; text-align:left; font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#4D677A;font-size:18px;font-weight:400;line-height:24px;text-align:left;word-break:break-word'>" +
"                                                      @nombreYApellidos" +
"                                                   </td>" +
"                                                </tr>" +
"                                                <tr>" +
"                                                   <td style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif; font-size:14px; color:#202020; line-height:1.5; padding-bottom:4px'>" +
"                                                      <br>Empresa" +
"                                                   </td>" +
"                                                </tr>" +
"                                                <tr>" +
"                                                   <td style='padding-left:5;margin:0;line-height:1px;border-radius:5px;background-color:#FFD2B4;border:1px solid #FF9148 ;direction:ltr; text-align:left; font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#4D677A;font-size:18px;font-weight:400;line-height:24px;text-align:left;word-break:break-word'>" +
"                                                      @nombreEmpresa" +
"                                                   </td>" +
"                                                </tr>" +
"                                                <tr>" +
"                                                   <td style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif; font-size:14px; color:#202020; line-height:1.5; padding-bottom:4px'>" +
"                                                      <br>Correo electrónico" +
"                                                   </td>" +
"                                                </tr>" +
"                                                <tr>" +
"                                                   <td style='padding-left:5;margin:0;line-height:1px;border-radius:5px;background-color:#FFD2B4;border:1px solid #FF9148 ;direction:ltr; text-align:left; font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#4D677A;font-size:18px;font-weight:400;line-height:24px;text-align:left;word-break:break-word'>" +
"                                                      @correoElectronico" +
"                                                   </td>" +
"                                                </tr>" +
"                                                <tr>" +
"                                                   <td style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif; font-size:14px; color:#202020; line-height:1.5; padding-bottom:4px'>" +
"                                                      <br>Mensaje" +
"                                                   </td>" +
"                                                </tr>" +
"                                                <tr>" +
"                                                   <td style='padding-left:5;margin:0;line-height:1px;border-radius:5px;background-color:#FFD2B4;border:1px solid #FF9148 ;direction:ltr; text-align:left; font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#4D677A;font-size:18px;font-weight:400;line-height:24px;text-align:left;word-break:break-word'>" +
"                                                      @mensaje" +
"                                                   </td>" +
"                                                </tr>" +
"                                             </tbody>" +
"                                          </table>" +
"                                       </td>" +
"                                    </tr>" +
"                                    <tr height='32px'></tr>" +
"                                 </tbody>" +
"                              </table>" +
"                           </td>" +
"                        </tr>" +
"                        <tr height='16'></tr>" +
"                        <tr>" +
"                           <td style='max-width:600px; font-family:Roboto-Regular,Helvetica,Arial,sans-serif; font-size:10px; color:#BCBCBC; line-height:1.5'></td>" +
"                        </tr>" +
"                        <tr>" +
"                           <td>" +
"                              <table style='font-family:Roboto-Regular,Helvetica,Arial,sans-serif; font-size:14px; color:#666666; line-height:18px; padding-bottom:10px'>" +
"                                 <tbody>" +
"                                    <tr>" +
"                                       <td>Este correo se ha enviado automaticamente, por favor no lo responda.</td>" +
"                                    </tr>" +
"                                    <tr height='6px'></tr>" +
"                                    <tr>" +
"                            <td bgcolor='' align='center' style='padding:40px 0px;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:normal;font-size:14px;line-height:24px;color:#4D677A'>" +
"                              Ingeniería Eléctrica y Control SAS<br>" +
"                            <a href='http://www.ilectro.com.co' style='color:#D94235;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:normal;text-decoration:none'>www.ilectro.com.co</a>‌</tr>" +
"                                 </tbody>" +
"                              </table>" +
"                           </td>" +
"                        </tr>" +
"                     </tbody>" +
"                  </table>" +
"               </td>" +
"               <td width='32px'></td>" +
"            </tr>" +
"            <tr height='32px'></tr>" +
"         </tbody>" +
"      </table>" +
"   </body>" +
"</html>" ;


	estructuraHtml = estructuraHtml.replace(/@nombreYApellidos/i, nombresApellidos);
	estructuraHtml = estructuraHtml.replace(/@nombreEmpresa/i, nombreEmpresa);
	estructuraHtml = estructuraHtml.replace(/@correoElectronico/i, correoElectronico);
	estructuraHtml = estructuraHtml.replace(/@mensaje/i, mensaje);

		return estructuraHtml;
	}
};
