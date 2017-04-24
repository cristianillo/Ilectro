var Menu = {
	//variables que no deben cambiarse de posición
	ordenarAlfabeticamente : false,
	//información del menú
	opcionesMenu : {
		//Si se cambia el orden del menú, tambien se ve reflejado en la página
		ingenieriaElectrica : 
	    [//Se toma el primer elemento como título principal del menú en cada serie o elemento del array
	        {
	           	orden : 1,
	           	nombreMenu : "Ingeniería eléctrica",
	           	codigoDeLaOpcion: "INGELEC",
	           	icono: "",
	           	contenidoTexto: "ILECTRO SAS cuenta con un equipo de ingenieros electricistas con amplia experiencia en el desarrollo de proyectos eléctricos en media y baja tensión, en capacidad de diseñar, suministrar, instalar, poner en marcha y hacer interventoría de proyectos eléctricos así como llevar a cabo labores de consultoría para nuevos proyectos o para ampliación de instalaciones existentes.<br><br>Más información acerca de nuestros servicios puede ser consultada en las secciones de nuestro sitio web."
	        },
	        {
	          	orden : 2,
	           	nombreMenu : "Diseño de subestaciones y sistemas de media tensión",
	           	codigoDeLaOpcion: "DISSUBSIS",
	           	icono: "",
	           	contenidoTexto: "Ofrecemos el diseño, suministro e instalación de subestaciones de media tensión y de media a baja tensión, así como el acompañamiento en la evaluación de la necesidad de nuestros clientes para lograr un proyecto completo y plenamente funcional.<br><br>Nuestra experiencia nos ha permitido mejorar continuamente hasta ponernos a la altura de compañías reconocidas en el mercado nacional y lo hemos logrado gracias a la confianza que nuestros clientes nos han otorgado."
	        },
	        {
	           	orden : 3,
	           	nombreMenu : "Diseño de sistemas en baja tensión",
	           	codigoDeLaOpcion: "DISSISBAJTEN",
	           	icono: "",
	           	contenidoTexto: "Elaboramos diseño de tableros de distribución y CCM, instalaciones industriales y comerciales en baja tensión, atendemos desde nuestra especialidad eléctrica al sector de la construcción comercial y residencial, y ejecutamos los proyectos que diseñamos para ofrecer una solución completa cuando nuestros clientes lo requieren."
	        },
	        {
	           	orden : 4,
	           	nombreMenu : "Diseño de iluminación",
	           	codigoDeLaOpcion: "DISILU",
	           	icono: "",
	           	contenidoTexto: "Nuestros proyectos cumplen con las normas y reglamentos aplicables, y esto incluye las consideraciones respecto a la iluminación de las áreas en las que se ejecutarán y operarán los proyectos al terminar.<br><br>En ILECTRO SAS no sólo nos preocupamos por dar cumplimiento al RETIE y RETILAP, además es nuestro compromiso promover la mejora en las condiciones estéticas y operacionales de los proyectos finalizados procurando economizar energía al máximo y aplicando las nuevas y mejores tecnologías en iluminación disponibles en el mercado en la actualidad."
	        },
	        {
	          	orden : 5,
	           	nombreMenu : "Diseño de puestas a tierra",
	           	codigoDeLaOpcion: "DISPUSTI",
	           	icono: "",
	           	contenidoTexto: "Diseñamos sistemas de puesta a tierra (SPT) y apantallamiento para protección contra descargas atmosféricas.<br><br>Ofrecemos también medición de resistividad del terreno para proyectos nuevos y medición de tierra instalada para proyectos o instalaciones existentes.<br><br>Complementamos esta actividad brindando un diagnóstico de las condiciones de su instalación o su terreno y ofreciendo alternativas para mejorarlas.<br><br>No se debe olvidar que una buena instalación de puesta a tierra protege principalmente a los usuarios de una instalación eléctrica, y una falla en la puesta a tierra de un equipo o una edificación puede traer consecuencias que vale la pena prevenir."
	        },
	        {
	           	orden : 6,
	           	nombreMenu : "Corto circuito y flujo de carga",
	           	codigoDeLaOpcion: "CORTOCIRFLU",
	           	icono: "",
	           	contenidoTexto: "Ofrecemos simulación de corto circuito, flujo de carga y coordinación de protecciones en los proyectos que diseñamos, usando nuestra licencia de NEPLAN®.<br><br>Ofrecemos también estos servicios de simulación de corto circuito, flujo de carga y coordinación de protecciones para los proyectos propios de nuestros clientes, complementados con diagnósticos y recomendaciones aplicables."
	        },
	        {
	           	orden : 7,
	          	nombreMenu : "Instalaciones eléctricas",
	           	codigoDeLaOpcion: "INSTELE",
	           	icono: "",
	           	contenidoTexto: "Ponemos a su disposición personal técnico electricista con calificación y experiencia para llevar a cabo el montaje eléctrico de los proyectos que nosotros diseñamos.<br><br>Nuestros técnicos también están disponibles para llevar a cabo el montaje de los proyectos que nuestros clientes ya tienen diseñados.<br><br>Así mismo ponemos a su disposición la experiencia de ingenieros electricistas para la supervisión de los montajes de nuestros proyectos o de sus propios proyectos.<br><br>Nuestro portafolio incluye el suministro de los materiales requeridos para la construcción de su instalación eléctrica como parte de nuestra oferta de proyectos 'llave en mano'."
	        }             
	    ],
	    automatizacion : 
	    [
	        {
	           	orden : 1,
	           	nombreMenu : "Automatización",
	           	codigoDeLaOpcion: "AUTO",
	           	icono: "",
	           	contenidoTexto: "Los avances tecnológicos actuales han llevado a la optimización de tareas en casi todos los entornos del mercado. ILECTRO SAS nace en medio de esta nueva revolución tecnológica para contribuir con la modernización de plantas antiguas y ofrecer soluciones de automatización modernas que aprovechan al máximo las herramientas de comunicación y atención remota que están disponibles actualmente.<br><br>Con la experiencia de nuestros ingenieros en proyectos de automatización, estamos a la vanguardia en soluciones de automatización y soporte para procesos industriales, instalaciones comerciales e incluso instalaciones residenciales."
	        },
	        {
	          	orden : 2,
	           	nombreMenu : "Programación de PLCs",
	           	codigoDeLaOpcion: "PPLCS",
	           	icono: "",
	           	contenidoTexto: "Ofrecemos el diseño, suministro y puesta en operación de proyectos de automatización de pequeño a gran tamaño.<br><br>Ofrecemos también el servicio de programación de sus equipos instalados para las mejoras aplicables a sus procesos existentes, y por supuesto ofrecemos la modernización de sus PLCs y controladores de tecnologías antiguas u obsoletas a equipos modernos con amplias opciones de comunicación y soporte remoto."
	        },
	        {
	          	orden : 3,
	           	nombreMenu : "Programación de IHM y sistemas SCADA",
	           	codigoDeLaOpcion: "PIHMSCADA",
	           	icono: "",
	           	contenidoTexto: "Ofrecemos el diseño de interfases gráficas para control de procesos, en pantallas de operador IHM (Interfase Hombre Máquina) de las marcas más reconocidas del mercado.<br><br>Nuestro portafolio también incluye el desarrollo de aplicaciones SCADA en varias marcas reconocidas y utilizadas en el mercado nacional.<br><br>Ofrecemos soporte en la resolución de fallas de sus sitemas SCADA y también tenemos en nuestro portafolio el suministro y actualización de las licencias de los mismos."
	        },
	        {
	         	orden : 4,
	           	nombreMenu : "Comunicaciones industriales",
	           	codigoDeLaOpcion: "COMIND",
	          	icono: "",
	           	contenidoTexto: "Hemos desarrollado en ILECTRO SAS proyectos de automatización con diagnóstico y soporte remoto, via Internet, de modo que las fallas en los procesos se puedan diagnosticar y solucionar desde nuestras instalaciones en Bogotá, aún cuándo el equipo a intervenir se encuentre en otra ciudad y esté alejado de centros urbanos.<br><br>Para este tipo de soluciones basta con tener acceso a Internet en su planta y otorgar los permisos de acceso requeridos para que el soporte se pueda prestar inmediatamente de manera remota.<br><br>Minimizar los efectos negativos y pérdidas económicas que una falla en un proceso de producción puede llegar a causar a una planta o a una cadena de producción es nuestro principal objetivo.<br><br>Además de esta propuesta de valor, ofrecemos tambien el diseño e implementación de comunicaciones industriales entre procesos y controladores para hacer más eficientes y robustos sus procesos de producción."
	        },
	        {
	          	orden : 5,
	           	nombreMenu : "Comercialización de productos y licencias",
	           	codigoDeLaOpcion: "COMPRODLIC",
	           	icono: "",
	           	contenidoTexto: "Ofrecemos el suministro de productos para sus proyectos de automatización: PLC y módulos de expansión, IHM, elementos de accionamiento y maniobra para tableros de control y CCM, variadores de velocidad y arrancadores suaves, controles de temperatura, instrumentación para medición y control, en marcas reconocidas y vigentes en el mercado.<br><br>Así mismo nuestras alianzas comerciales nos permiten ofrecer licencias de ejecución (RUN TIME) y de desarrollo de productos SCADA como PULSE o PCIM del fabricante AFCON Control & Automation, y de otros fabricantes reconocidos."
	        }
	    ],
	    otrosServicios : 
	    [
	        {
	           	orden : 1,
	           	nombreMenu : "Otros servicios",
	           	codigoDeLaOpcion: "OTROS",
	           	icono: "",
	           	contenidoTexto: "La experiencia de nuestro equipo de ingenieros en proyectos eléctricos, de cogeneración y de automatización permiten a ILECTRO SAS ofrecer y desarrollar proyectos eléctricos y de automatización en sistemas térmicos y calderas.<br><br>Esta experiencia incluye el diseño e implementación de sistemas de control para calderas y también considera estado de operación como análisis de gases de combustión de calderas e intervención en la calibración de sensores y controles de combustión para llevar la concentración de gases a valores aceptados por las normas locales, lo que a su vez se puede traducir en aumento de la eficiencia del equipo térmico y reducción en el consumo de combustible.<br><br>Esta experiencia complementaria en campos, proyectos y clientes específicos ha llevado a ILECTRO SAS a ser un participante activo en proyectos de diseño y consultoría multidisciplinarios y ha aportado a varios clientes no sólo conocimiento, experiencia y buenos resultados en proyectos de ingeniería eléctrica y automatización, sino también en aspectos ambientales y de mejor uso de los recursos."
	        },
	        {
	          	orden : 2,
	           	nombreMenu : "Tableros eléctricos para baja tensión",
	           	codigoDeLaOpcion: "TABBAJTEN",
	           	icono: "",
	           	contenidoTexto: "Ofrecemos el ensamble de nuestros tableros de control y CCM dentro de nuestra propuesta de desarrollo de proyectos llave en mano. Nuestas alianzas comerciales hacen que podamos ser competitivos en la comercialización de sus componentes, generando así la tranquilidad para nuestros clientes cuando el desarrollo de sus proyectos está completamente en nuestras manos."
	        },
	        {
	          	orden : 3,
	           	nombreMenu : "Consultoría e interventoría",
	           	codigoDeLaOpcion: "CONSULINTER",
	           	icono: "",
	           	contenidoTexto: "Nuestros ingenieros cuentan con amplia experiencia en el desarrollo de labores de consultoría, culminadas con el diseño detallado de los proyectos derivados de la misma.<br><br>ILECTRO SAS cuenta con experiencia en el desarrollo de labores de consultoría de proyectos multidisciplinarios, participando en las especialidades eléctrica y de automatización. Esto fortalece la oferta de este producto en nuestro portafolio y por supuesto la confianza depositada en ILECTRO SAS por nuestros clientes."
	        },
	        {
	         	orden : 4,
	           	nombreMenu : "Control de sistemas térmicos",
	           	codigoDeLaOpcion: "CONTSISELEC",
	          	icono: "",
	           	contenidoTexto: "Los ingenieros de ILECTRO SAS cuentan con amplia experiencia en el control de sistemas térmicos, de calderas de vapor y calentadores industriales de agua con combustible fluido (gas, crudo, ACPM) y con combistible sólido (carbón, biomasa).<br><br>Ofrecemos el ajuste de los controles de combustión de calderas para lograr la reducción de los gases de chimenea a valores aceptados por la legislación local, en procura de mejorar la eficiencia del equipo y de lograr ahorro de combustible."
	        }
	    ],
	    nosotros : 
	    [
	        {
	           	orden : 1,
	           	nombreMenu : "Nosotros",
	           	codigoDeLaOpcion: "NOSOTROS",
	           	icono: "",
	           	contenidoTexto: "Somos INGENIERÍA ELÉCTRICA Y CONTROL SAS, una compañía creada en el contexto actual del mercado de proyectos y servicios de ingeniería eléctrica y automatización, cuyo objetivo es el desarrollo de proyectos con un alto nivel de calidad y experticia, optimizando los costos de desarrollo de los mismos para lograr ser competitivos en la ejecución de proyectos con excelencia y calidad.<br><br>Nacido en el año 2014, nuestro equipo de ingenieros electricistas cuenta con experiencia de más de 35 años en el diseño y ejecución de proyectos eléctricos y más de 10 años en el diseño y ejecución de proyectos de automatización."
	        },
	        {
	          	orden : 3,
	           	nombreMenu : "Misión",
	           	codigoDeLaOpcion: "MISION",
	           	icono: "",
	           	contenidoTexto: "Proveer servicios de ingeniería eléctrica como diseño de proyectos en media y baja tensión, consultoría e interventoria de proyectos, construcción de instalaciones eléctricas en media y baja tensión; comercialización de productos para control y automatización y prestación de servicios de programación de PLC, IHM, SCADA; asesorías y proyectos llave en mano para la industria en general."
	        },
	        {
	         	orden : 4,
	           	nombreMenu : "Visión",
	           	codigoDeLaOpcion: "VISION",
	          	icono: "",
	           	contenidoTexto: "Ser una empresa consolidada en el mercado de proyectos eléctricos y de automatización, reconocida por su seriedad, calidad y cumplimiento en el desarrollo de proyectos y comercialización de productos."
	        },
	        {
	          	orden : 2,
	           	nombreMenu : "Política de calidad",
	           	codigoDeLaOpcion: "POLITICA",
	           	icono: "",
	           	contenidoTexto: "La satisfacción del cliente es la base y a su vez objetivo de cualquier actividad que desarrolle ILECTRO SAS. Para lograrlo asimilamos las expectativas de nuestros clientes desde el inicio del proyecto a fin de mantenerlas y cumplirlas hasta la culminación. Entregamos para esto todo nuestro empeño, experiencia y por supuesto nuestros valores corporativos:<br><br>♦ Honestidad, respecto y colaboración para nuestros clientes y proveedores.<br><br>♦ Cumplimiento de las normas y reglamentos que nos regulan.<br><br>♦ Responsabilidad en todas las etapas de un proyecto o servicio.<br><br>♦ Lealtad. Construimos alianzas de cooperación con nuestros clientes y proveedores sin malas prácticas."
	        }
	    ],
	    contactenos : 
	    [
	        {
	           	orden : 1,
	           	nombreMenu : "Contáctenos",
	           	codigoDeLaOpcion: "CONTACTO",//data-target="#myModal"
	           	icono: ""
	           	//contenidoTexto: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."
	        }
	    ]
	}
};
//file:///D:/Cristian/Ilectro/Web_Ilt_v1.0/public_html/com/ilectro/web/paginas/index.html