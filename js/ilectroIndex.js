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
                                            menuSuperior += "<a href='#redireccionContenido' class='dropdown-toggle menuSuperior' codigo-opcion='" + menu.codigoDeLaOpcion + "' data-toggle='dropdown'>" + nombreDelMenu + "</a>" +
									"<ul class='dropdown-menu'>";
				}else{
                                    menuSuperior += "<li><a href='#redireccionContenido' codigo-opcion='" + menu.codigoDeLaOpcion + "'><i class='icon-right-open'></i>" + menu.nombreMenu + "</a></li>";
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
                        window.location.href = "#redireccionContenido";
		});
                
                $(".contacto").click(function(){
                    $("#formularioContacto").modal("show");
		});
                
	}
};

