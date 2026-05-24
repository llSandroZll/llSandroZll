/* 
   =================================================
   TOOLBOX DEPLOYMENT & SOLUTIONS - INTERACT ENGINE
   =================================================
   Coordinating premium animations, dynamic bilingual translations,
   adaptive form profiling, slide actions, and lighting.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. BILINGUAL TRANSLATION ENGINE ---
    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');
    let currentLang = 'es'; // default load language is Spanish

    const translationDictionary = {
        es: {
            site_title: "Toolbox S.L. | Montaje de Mobiliario Hotelero y Instalación de Luminarias Contract",
            partners_title: "PROVEEDORES Y SOCIOS DE CONFIANZA:",
            nav_home: "Inicio",
            nav_heritage: "Quiénes Somos",
            nav_services: "Servicios B2B",
            nav_low_season: "Proceso de Trabajo",
            nav_local: "Manitas Local",
            nav_portfolio: "Trabajos Destacados",
            nav_connect: "Contacto",
            ambience_text: "Ambiente",
            
            hero_subtitle: "TOOLBOX S.L. • MONTAJE DE MOBILIARIO HOTELERO Y DESPLIEGUE CONTRACT",
            hero_title: "INSTALADORES DE ACABADOS DE LUJO Y <span class=\"gold-gradient-text\">LUMINARIAS CONTRACT</span> EN HOTELES.",
            hero_description: "Especialistas en montaje y ajuste de elementos esenciales para transformar y optimizar espacios del sector hotelero de lujo. De la mano de socios como Harvey Braga y Enyerson Gómez, instalamos luminarias, accesorios de baño premium, panelados de madera y mobiliario de alta gama con más de 10 años de experiencia técnica.",
            hero_cta: "Solicitar Consulta Técnica",
            hero_stat_1: "Años de Experiencia",
            hero_stat_2: "Habitaciones Equipadas",
            hero_stat_3: "Eficiencia en Temporada Baja",

            heritage_badge: "Socios fundadores: Harvey Braga y Enyerson Gómez. Sede de coordinación logística y técnica en Campo de Criptana.",
            heritage_subtitle: "Quiénes Somos y Historia",
            heritage_title: "Trayectoria Técnica de Toolbox S.L.",
            heritage_p1: "Toolbox S.L. es una sociedad limitada formada por dos socios fundadores: Harvey Braga y Enyerson Gómez, con una experiencia contrastada de más de 10 años en el sector del montaje y la instalación de equipamientos en hoteles de primera clase. Harvey Braga aporta una trayectoria invaluable al haber trabajado como subcontratista principal para firmas de iluminación de gran prestigio como Grantlamp S.L. (fabricante líder de lámparas y aparatos eléctricos de iluminación) y ALVE (destacada en diseño y consultoría de iluminación contract & retail). Este bagaje técnico les permite liderar cuadrillas eficientes en todo tipo de acabados hoteleros de lujo.",
            heritage_quote: "\"En Toolbox, cada miembro del equipo es una herramienta clave, ¡y juntos damos vida a espacios extraordinarios! Llevamos la precisión del milímetro en nuestra caja de soluciones.\"",
            heritage_p2: "Conscientes de que la temporada baja es el momento crítico para las reformas hoteleras en destinos como Ibiza, Mallorca, Marbella o Madrid, movilizamos nuestros equipos técnicos para completar el montaje de mobiliario hotelero, luminarias complejas, cabeceros alistonados y accesorios de diseño en plazos extremadamente ajustados. Nuestra red de proveedores de confianza y nuestra experiencia de subcontratación nos posiciona como el partner perfecto para los proyectos más ambiciosos.",
            heritage_btn: "Ver Nuestros Servicios",

            services_subtitle: "Nuestros Servicios B2B",
            services_title: "Instalación y Ajuste de Equipamiento Hotelero de Lujo",
            services_desc: "Ofrecemos soluciones integrales y un servicio profesional y personalizado para el montaje de elementos esenciales de confort y estética en hoteles de cinco estrellas.",
            
            srv_1_title: "Instalación de Luminarias y Iluminación",
            srv_1_desc: "Especialistas en sistemas de iluminación interior y exterior. Instalamos de forma impecable lámparas colgantes, apliques de pared empotrados, lámparas de mesa y modernos sistemas de control de iluminación.",
            srv_1_item_1: "Montaje de lámparas colgantes y chandeliers monumentales",
            srv_1_item_2: "Ajuste de apliques de pared y tiras LED integradas",
            srv_1_item_3: "Instalación de sistemas y paneles de control de iluminación",

            srv_2_title: "Montaje de Mobiliario y Armarios",
            srv_2_desc: "Ensamblaje y colocación milimétrica de muebles de alta gama a medida. Ajustamos camas premium, frentes de armarios empotrados, cómodas, mesas, sillas y estanterías en suites.",
            srv_2_item_1: "Montaje de mobiliario personalizado para áreas específicas",
            srv_2_item_2: "Ensamblaje de camas, cómodas y frentes de armario empotrados",
            srv_2_item_3: "Instalación de mobiliario exterior, tumbonas y cabanas de lujo",

            srv_3_title: "Herrajes y Accesorios Premium",
            srv_3_desc: "Sustitución y colocación de herrajes de diseño y accesorios de baño contract: portarrollos, toalleros, jaboneras, percheros, barras y obras de arte o espejos de alta gama.",
            srv_3_item_1: "Montaje de accesorios de baño contract en acero y latón",
            srv_3_item_2: "Instalación de espejos, ventiladores, cuadros y relojes de pared",
            srv_3_item_3: "Cambio de manillas, cerraduras integrales y pomos de diseño",

            srv_4_title: "Panelados y Alistonados Decorativos",
            srv_4_desc: "Colocación experta de revestimientos acústicos de pared y alistonados decorativos en roble y nogal noble para crear cabeceros de cama o molduras excepcionales.",
            srv_4_item_1: "Instalación de alistonados decorativos en nogal y roble",
            srv_4_item_2: "Montaje de cabeceros integrados retroiluminados a medida",
            srv_4_item_3: "Ajuste y enrasado de revestimientos y molduras de madera",

            low_subtitle: "METODOLOGÍA DE DESPLIEGUE",
            low_title: "Nuestro Proceso de Trabajo de 5 Fases",
            low_desc: "Cuando los materiales para instalar o montar llegan al hotel de destino, entran en acción nuestras fases de trabajo estrictamente planificadas para garantizar rapidez, limpieza y un cuidado exquisito de los materiales delicados.",
            low_b1_title: "1. Recepción y Almacenamiento Seguro",
            low_b1_desc: "Recibimos todo el equipamiento y lo almacenamos bajo condiciones óptimas en seco, previniendo daños en acabados delicados de iluminación y madera noble.",
            low_b2_title: "2. Distribución y Kits de Habitación",
            low_b2_desc: "Distribuimos los herrajes y luminarias suite por suite mediante kits pre-ordenados, eliminando tiempos muertos de búsqueda o pérdidas de material en obra.",
            low_b3_title: "3. Instalación, Montaje y Certificación",
            low_b3_desc: "Nuestros instaladores cualificados montan las piezas con precisión micrométrica, limpian cada estancia y emiten un certificado de calidad e instalación impecable.",

            local_subtitle: "Manitas a domicilio en Campo de Criptana y Alrededores",
            local_title: "Manitas de Confianza: El Rigor Hotelero en tu Hogar",
            local_desc: "Cuando no estamos de despliegue en grandes suites de Europa, ponemos a tu disposición el mismo nivel de detalle, calidad y materiales excelentes para tu hogar. Confía en Toolbox S.L. para tus pequeñas reformas y reparaciones locales con total confianza y rapidez.",
            local_c1_title: "Restauración de Puertas de Madera",
            local_c1_desc: "Lijado minucioso de puertas de madera exteriores en Ciudad Real. Tratamiento protector contra el clima y barnizado de alta resistencia para embellecer tu fachada.",
            local_c2_title: "Arreglo de Persianas y Mosquiteras",
            local_c2_desc: "Reparación de persianas atascadas en Campo de Criptana, cambio de cintas rotas, lamas dañadas y motorización. Instalación de mosquiteras a medida enrollables y fijas.",
            local_c3_title: "Fontanero de Confianza (Grifería y Cisternas)",
            local_c3_desc: "Sustitución de griferías calcificadas por grifos antical de diseño ecológico, reparación rápida de cisternas con repuestos reforzados y montaje de columnas de ducha.",
            local_c4_title: "Instalar Luces LED y Bombines de Seguridad",
            local_c4_desc: "Instalación de luminarias LED, sustitución de mecanismos e interruptores fechados por placas modernas, y cambio de bombines por cilindros anti-bumping de alta seguridad.",

            portfolio_subtitle: "TRABAJOS DESTACADOS • PROYECTOS REALES",
            portfolio_title: "Garantía de Grandes Hoteles",
            port_tag_1: "Instalación de Luminarias y Lobbies",
            port_loc_1: "Madrid, España",
            port_desc_1: "Montaje e instalación de luminarias monumentales, chandeliers de diseño y sistemas de control de iluminación en el exclusivo hotel Rosewood Villa Magna y en The Westin Palace.",
            port_meta_lbl_1: "Completado en",
            port_meta_val_1: "Plazo Récord",
            port_meta_lbl_2: "Partners",
            port_meta_val_2: "Grantlamp & ALVE",
            port_tag_2: "Acabados de Suites y Luminarias",
            port_loc_2: "Ibiza & Barcelona, España",
            port_desc_2: "Instalación de luminarias de lujo, apliques de cabecero de cama de diseño y tiras LED indirectas en el Hotel W Barcelona, Hotel One Shot y en Six Senses Ibiza.",
            port_meta_val_3: "Fases Certificadas",
            port_meta_lbl_3: "Equipamiento",
            port_meta_val_4: "Suites de Ensueño",
            port_tag_3: "Montaje de Mobiliario y Baños Premium",
            port_loc_3: "Mallorca, Islas Baleares",
            port_desc_3: "Montaje de alistonados decorativos de nogal, cabeceros retroiluminados, ensamblaje de frentes de armario y colocación de accesorios de baño contract en Alcudia Hotel Palace de Muro.",
            port_meta_val_5: "100% Calidad",
            port_meta_lbl_4: "Control",
            port_meta_val_6: "180 Habitaciones",

            contact_subtitle: "CONTACTO Y RESERVAS",
            contact_title: "Inicia tu Consulta de Proyecto con Toolbox S.L.",
            contact_desc: "Planificamos los suministros de los fabricantes y el despliegue de cuadrillas con antelación en nuestra base de Campo de Criptana. Escríbenos hoy para asegurar tu plaza o solicitar asistencia técnica.",
            contact_h1: "Base de Coordinación y Logística",
            contact_h2: "Oficina Técnica",
            contact_h3: "Teléfonos de Contacto Directo",
            contact_est: "MÁS DE 10 AÑOS TRANSFORMANDO ESPACIOS EN LUGARES DE ENSUEÑO",

            form_title: "Iniciar Consulta de Proyecto",
            opt_profile_gc: "Gestión Hotelera / Diseñadores e Interiorismo (Proyecto B2B)",
            opt_profile_local: "Residente Local (Manitas a Domicilio / Campo de Criptana)",
            label_profile: "Perfil del Interesado",
            label_name: "Nombre Completo",
            label_email: "Correo Electrónico",
            label_hotel: "Hotel / Empresa / Estudio de Interiorismo",
            opt_loc_balearic: "Ibiza & Formentera",
            opt_loc_mallorca: "Mallorca & Menorca",
            opt_loc_marbella: "Marbella & Costa del Sol",
            opt_loc_europe: "Resto de Europa (Lisboa, Florencia, etc.)",
            opt_loc_other: "Otra Región de España",
            label_location: "Ubicación del Proyecto",
            opt_srv_lighting: "Instalación de Luminarias (Lámparas y LED)",
            opt_srv_doors: "Montaje de Mobiliario y Armarios",
            opt_srv_hardware: "Herrajes y Accesorios de Baño Contract",
            opt_srv_panels: "Panelado y Alistonado de Madera",
            opt_srv_full: "Instalación Integral de Suites",
            label_service: "Servicio Requerido",
            opt_time_upcoming: "Próxima Temporada Baja (Oct - Apr)",
            opt_time_next: "Siguiente Temporada",
            opt_time_urgent: "Renovación Urgente",
            label_timing: "Plazo de Ejecución",
            opt_l_srv_wood: "Restauración de Puertas de Madera",
            opt_l_srv_shutters: "Arreglo de Persianas / Mosquiteras",
            opt_l_srv_plumb: "Fontanería (Grifería y Cisterna Antical)",
            opt_l_srv_lights: "Luces LED / Cambio de Bombín de Seguridad",
            opt_l_srv_other: "Otros Trabajos de Manitas a Domicilio",
            label_local_service: "Trabajo Solicitado",
            opt_l_urg_now: "Lo antes posible / Urgente",
            opt_l_urg_month: "Este mes",
            opt_l_urg_flexible: "Flexible / Sin prisa",
            label_local_urgency: "Urgencia del Servicio",
            label_message: "Descríbenos tu necesidad o proyecto con detalle...",
            btn_submit: "Transmitir Consulta",

            success_title: "Consulta Recibida con Éxito",
            success_desc: "Tu solicitud ha sido catalogada y enviada a nuestra oficina en Campo de Criptana. Coordinaremos la planificación de instaladores para contactarte a la mayor brevedad. ¡Gracias por confiar en Toolbox S.L.!",
            success_btn: "Volver a la Web",
            
            footer_desc: "Toolbox S.L. se especializa en la instalación y montaje de luminarias, mobiliario de alta gama y accesorios contract para el sector hotelero e institucional de lujo. Arraigados en Campo de Criptana, prestando servicio local e internacional.",
            footer_nav_title: "Navegación",
            footer_contact_title: "Oficinas y Contacto",
            footer_privacy: "Política de Privacidad (RGPD)",
            footer_terms: "Términos de Servicio",
            footer_tagline: "Montajes de Precisión. Más de 10 años transformando espacios en lugares de ensueño."
        },
        en: {
            site_title: "Toolbox S.L. | Hotel Furniture Assembly & Contract Lighting Installation",
            partners_title: "TRUSTED SUPPLIERS & PARTNERS:",
            nav_home: "Home",
            nav_heritage: "About Us",
            nav_services: "B2B Services",
            nav_low_season: "Work Process",
            nav_local: "Local Handyman",
            nav_portfolio: "Featured Works",
            nav_connect: "Contact",
            ambience_text: "Ambience",
            
            hero_subtitle: "TOOLBOX S.L. • HOTEL FURNITURE ASSEMBLY & CONTRACT DEPLOYMENTS",
            hero_title: "LUXURY FINISH INSTALLERS & <span class=\"gold-gradient-text\">CONTRACT LIGHTING</span> IN HOTELS.",
            hero_description: "Specialists in the installation and assembly of essential elements to transform and optimize luxury hotel spaces. Led by partners Harvey Braga and Enyerson Gómez, we install luminaires, premium bathroom accessories, wood paneling, and high-end furniture with over 10 years of technical experience.",
            hero_cta: "Request Technical Consultation",
            hero_stat_1: "Years of Experience",
            hero_stat_2: "Rooms Calibrated",
            hero_stat_3: "Off-Season Efficiency",

            heritage_badge: "Founding partners: Harvey Braga and Enyerson Gómez. Logistics and technical coordination base in Campo de Criptana, Spain.",
            heritage_subtitle: "Who We Are & History",
            heritage_title: "Toolbox S.L. Technical Excellence",
            heritage_p1: "Toolbox S.L. is a limited liability company formed by two founding partners: Harvey Braga and Enyerson Gómez, with a proven track record of over 10 years of experience in the installation and assembly of equipment for first-class hotels. Harvey Braga brings invaluable experience from his years working as a primary subcontractor for prestigious lighting manufacturers like Grantlamp S.L. (leading manufacturer of designer lamps and electric lighting fixtures) and ALVE (prominent in lighting design and retail contract consulting). This strong technical background enables them to lead efficient crews across all luxury hotel finishes.",
            heritage_quote: "\"At Toolbox, each member of the team is a key tool, and together we bring extraordinary spaces to life! We carry millimeter precision in our box of solutions.\"",
            heritage_p2: "Knowing that the off-season is the critical window for hotel renovations in premier destinations like Ibiza, Mallorca, Marbella, and Madrid, we deploy our technical crews to complete hotel furniture assembly, complex lighting arrays, slatted headboards, and designer bathroom fixtures within record schedules. Our trusted supplier network and subcontracting heritage make us the perfect partner for high-end hospitality projects.",
            heritage_btn: "View B2B Services",

            services_subtitle: "Our B2B Services",
            services_title: "Installation & Tuning of Luxury Hotel Equipment",
            services_desc: "We offer comprehensive solutions and professional, personalized service for fitting the essential elements of comfort and aesthetics in five-star hotels.",
            
            srv_1_title: "Lighting Installation & Luminaires",
            srv_1_desc: "Specialists in interior and exterior lighting systems. We flawlessly install pendant lamps, recessed wall sconces, decorative table lamps, and modern lighting control systems.",
            srv_1_item_1: "Mounting linear cove lighting and grand lobby chandeliers",
            srv_1_item_2: "Fitting linear warm LED strips under cabinets and closets",
            srv_1_item_3: "Installing smart control systems and designer switch plates",

            srv_2_title: "Furniture Assembly & Wardrobes",
            srv_2_desc: "Millimeter-precise assembly and placement of high-end custom furniture. We adjust premium beds, built-in wardrobes, dressers, tables, chairs, and suite shelving.",
            srv_2_item_1: "Assembling customized furniture for specific hotel areas",
            srv_2_item_2: "Fitting luxury beds, dressers, and flush wardrobe fronts",
            srv_2_item_3: "Installing outdoor resort furniture, cabanas, and sunbeds",

            srv_3_title: "Designer Hardware & Contract Fittings",
            srv_3_desc: "Replacing and mounting designer ironmongery and contract bathroom accessories: toilet paper holders, soap dishes, towel rails, mirrors, bars, and fine artwork.",
            srv_3_item_1: "Mounting high-end bathroom hardware in steel and brass",
            srv_3_item_2: "Installing cosmetic mirrors, wooden fans, and art frames",
            srv_3_item_3: "Upgrading door handles, secure deadbolts, and designer pulls",

            srv_4_title: "Decorative Wood Paneling & Slats",
            srv_4_desc: "Expert mounting of acoustic wood wall paneling and decorative slatted panels in premium oak and walnut to construct outstanding bed headboards and wood trims.",
            srv_4_item_1: "Fitting custom slatted wall panels in walnut and oak",
            srv_4_item_2: "Assembling retro-lit integrated timber headboards",
            srv_4_item_3: "Leveling and aligning wardrobe moldings and wood surrounds",

            low_subtitle: "DEPLOYMENT METHODOLOGY",
            low_title: "Our 5-Phase Work Process",
            low_desc: "When the materials to be installed or assembled arrive at the project site, our structured 5-phase workflow goes into action to guarantee speed, absolute cleanliness, and the careful handling of delicate finishes.",
            low_b1_title: "1. Receipt and Secure Storage",
            low_b1_desc: "We receive all hotel equipment at destination and secure it in dry, temperature-controlled storage to protect fine wood and sensitive lighting.",
            low_b2_title: "2. Distribution & Suite Kits",
            low_b2_desc: "We distribute hardware and light fixtures suite-by-suite in pre-sorted room kits, eliminating search delays and preventing material loss.",
            low_b3_title: "3. Precision Mounting & Handover",
            low_b3_desc: "Our highly-qualified crews complete the assembly to millimeter tolerances, vacuum every space, and deliver an official quality certification.",

            local_subtitle: "Trusted Local Handyman in Campo de Criptana",
            local_title: "Handyman Services: Hotel-Grade Quality for Your Home",
            local_desc: "When we are not deployed at premier European resorts, we bring the exact same precision, excellent materials, and quality standards to your local residence. Trust Toolbox S.L. for your home repairs and small upgrades with total confidence and speed.",
            local_c1_title: "Wood Door Restoration",
            local_c1_desc: "Precision sanding of exterior wood doors in Ciudad Real. Weather-proof protective treatment and high-durability varnishing to beautify your entrance.",
            local_c2_title: "Shutter Repair & Insect Screens",
            local_c2_desc: "Fast repair of stuck rolling shutters in Campo de Criptana, swapping broken straps, slats, and motorization. Custom roll-up insect screens installation.",
            local_c3_title: "Trusted Plumber (Faucets & Cisterns)",
            local_c3_desc: "Upgrading calcified bathroom hardware to designer eco-friendly faucets, rapid toilet cistern repairs with heavy-duty parts, and new shower columns.",
            local_c4_title: "LED Lighting & Security Cylinders",
            local_c4_desc: "Installing high-efficiency LED arrays, replacing outdated switches with designer plates, and installing high-security cylinder locks.",

            portfolio_subtitle: "RECENT WORKS • REAL HOTELS",
            portfolio_title: "Proven Luxury Hospitality Pedigree",
            port_tag_1: "Lighting Installation & Lobbies",
            port_loc_1: "Madrid, Spain",
            port_desc_1: "Fitting custom linear chandeliers, grand orb lighting arrays, and smart control panels in the ultra-luxury Rosewood Villa Magna and The Westin Palace.",
            port_meta_lbl_1: "Completed",
            port_meta_val_1: "On Schedule",
            port_meta_lbl_2: "Partners",
            port_meta_val_2: "Grantlamp & ALVE",
            port_tag_2: "Suite Finishes & Luminaires",
            port_loc_2: "Ibiza & Barcelona, Spain",
            port_desc_2: "Installing designer bedside pendants, custom cove lighting arrays, and bedroom finishes in W Barcelona, One Shot, and Six Senses Ibiza.",
            port_meta_val_3: "Certified Work",
            port_meta_lbl_3: "Project Scale",
            port_meta_val_4: "Exquisite Suites",
            port_tag_3: "Furniture Assembly & Bath Fittings",
            port_loc_3: "Mallorca, Balearic Islands",
            port_desc_3: "Mounting slatted walnut panels, integrated retro-lit timber headboards, custom wardrobe doors, and black bathroom hardware in Alcudia Hotel Palace de Muro.",
            port_meta_val_5: "100% Quality",
            port_meta_lbl_4: "Scope",
            port_meta_val_6: "180 Rooms",

            contact_subtitle: "CONTACT & BOOKINGS",
            contact_title: "Start Your Project Inquiry with Toolbox S.L.",
            contact_desc: "We coordinate manufacturer logistics and crew schedules months in advance at our Campo de Criptana base. Reach out today to secure your slot or request local service.",
            contact_h1: "Coordination & Logistics Hub",
            contact_h2: "Technical Office",
            contact_h3: "Direct Phone Lines",
            contact_est: "OVER 10 YEARS OF EXPERIENCE TRANSFORMING HOSPITALITY SPACES",

            form_title: "Start a Project Consultation",
            opt_profile_gc: "Hotel Management / Interior Designers (B2B Project)",
            opt_profile_local: "Local Resident (Handyman Services / Campo de Criptana)",
            label_profile: "Interested Profile",
            label_name: "Full Name",
            label_email: "Email Address",
            label_hotel: "Hotel / Company / Interior Design Studio",
            opt_loc_balearic: "Ibiza & Formentera",
            opt_loc_mallorca: "Mallorca & Menorca",
            opt_loc_marbella: "Marbella & Costa del Sol",
            opt_loc_europe: "Rest of Europe (Lisbon, Florence, etc.)",
            opt_loc_other: "Other Spanish Region",
            label_location: "Project Location",
            opt_srv_lighting: "Lighting Installation (Lamps & LEDs)",
            opt_srv_doors: "Furniture Assembly & Wardrobes",
            opt_srv_hardware: "Designer Hardware & Bath Accessories",
            opt_srv_panels: "Wood Slat Wall Paneling & Trims",
            opt_srv_full: "Full Suite Finishing Package",
            label_service: "Required Service",
            opt_time_upcoming: "Upcoming Low Season (Oct - Apr)",
            opt_time_next: "Next Season",
            opt_time_urgent: "Urgent Renovation",
            label_timing: "Execution Schedule",
            opt_l_srv_wood: "Wood Door Restoration",
            opt_l_srv_shutters: "Shutter Repairs / Screen Fitting",
            opt_l_srv_plumb: "Plumbing (Designer Faucets & Cisterns)",
            opt_l_srv_lights: "LED Lighting / High-Security Lock Swap",
            opt_l_srv_other: "Other Handyman Tasks",
            label_local_service: "Requested Task",
            opt_l_urg_now: "As soon as possible / Urgent",
            opt_l_urg_month: "Within this month",
            opt_l_urg_flexible: "Flexible / No rush",
            label_local_urgency: "Service Urgency",
            label_message: "Please describe your project or needs in detail...",
            btn_submit: "Transmit Inquiry",

            success_title: "Inquiry Logged Successfully",
            success_desc: "Your inquiry has been cataloged and sent to our Campo de Criptana technical office. We will coordinate our installation schedule and contact you shortly. Thank you for trusting Toolbox S.L.!",
            success_btn: "Back to Site",
            
            footer_desc: "Toolbox S.L. specializes in the installation, mounting, and calibration of custom lighting, high-end furniture, and contract accessories for the hospitality sector. Rooted in Campo de Criptana, serving clients globally.",
            footer_nav_title: "Navigation",
            footer_contact_title: "Offices & Contact",
            footer_privacy: "Privacy Policy (GDPR)",
            footer_terms: "Terms of Service",
            footer_tagline: "Precision Installations. Over 10 years of experience transforming spaces into dream places."
        }
    };

    function translatePage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        
        // Loop through all items marked with data-translate
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const translationKey = element.getAttribute('data-translate');
            if (translationDictionary[lang] && translationDictionary[lang][translationKey]) {
                const translatedValue = translationDictionary[lang][translationKey];
                
                // If it is the page title, handle it separately
                if (element.tagName.toLowerCase() === 'title') {
                    document.title = translatedValue;
                } else if (element.tagName.toLowerCase() === 'option') {
                    element.text = translatedValue;
                } else {
                    // Use innerHTML to preserve spans or inline text styling inside titles
                    element.innerHTML = translatedValue;
                }
            }
        });

        // Switch active buttons in translation widget
        if (lang === 'es') {
            langEsBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langEsBtn.classList.remove('active');
        }

        // Keep form labels responsive to language
        updateFormLabelsText(lang);
        
        console.log(`[Toolbox Translation Engine] Page translated to: ${lang.toUpperCase()}`);
    }

    // Connect triggers to translation buttons
    langEsBtn.addEventListener('click', () => translatePage('es'));
    langEnBtn.addEventListener('click', () => translatePage('en'));

    // --- 2. ADAPTIVE CONTACT FORM PROFILER ---
    const formProfile = document.getElementById('form-profile');
    const conditionalGCElements = document.querySelectorAll('.conditional-gc');
    const conditionalLocalElements = document.querySelectorAll('.conditional-local');
    const formMessageLabel = document.getElementById('form-message-label');

    // Fields inside GC/Local to toggle required state
    const gcSelects = [
        document.getElementById('form-location'),
        document.getElementById('form-service'),
        document.getElementById('form-timing')
    ];
    const localSelects = [
        document.getElementById('form-local-service'),
        document.getElementById('form-local-urgency')
    ];

    function updateFormLabelsText(lang) {
        if (!formProfile.value) return; // only run if profile is selected
        
        if (formProfile.value === 'contractor') {
            formMessageLabel.innerHTML = lang === 'es' 
                ? 'Descríbenos tu proyecto o necesidad con detalle...' 
                : 'Tell us about your architectural goals in detail...';
        } else {
            formMessageLabel.innerHTML = lang === 'es' 
                ? 'Descríbenos tu necesidad o arreglo en casa con detalle...' 
                : 'Tell us about your home repair or upgrade needs in detail...';
        }
    }

    formProfile.addEventListener('change', () => {
        const selectedProfile = formProfile.value;

        if (selectedProfile === 'contractor') {
            // Show GC fields, Hide local fields
            conditionalGCElements.forEach(el => el.style.display = 'block');
            conditionalLocalElements.forEach(el => el.style.display = 'none');

            // Apply B2B GC validation rules
            gcSelects.forEach(select => select.setAttribute('required', ''));
            localSelects.forEach(select => {
                select.removeAttribute('required');
                select.value = ""; // clear value
            });
            
            // Toggle form message label
            formMessageLabel.innerHTML = currentLang === 'es' 
                ? 'Descríbenos tu proyecto o necesidad con detalle...' 
                : 'Tell us about your architectural goals in detail...';

        } else if (selectedProfile === 'local') {
            // Hide GC fields, Show local fields
            conditionalGCElements.forEach(el => el.style.display = 'none');
            conditionalLocalElements.forEach(el => el.style.display = 'block');

            // Apply Local Resident validation rules
            localSelects.forEach(select => select.setAttribute('required', ''));
            gcSelects.forEach(select => {
                select.removeAttribute('required');
                select.value = ""; // clear value
            });
            document.getElementById('form-hotel').value = ""; // clear hotel name

            // Toggle form message label
            formMessageLabel.innerHTML = currentLang === 'es' 
                ? 'Descríbenos tu necesidad o arreglo en casa con detalle...' 
                : 'Tell us about your home repair or upgrade needs in detail...';
        }
    });

    // --- 3. AMBIENCE LIGHTING CONTROLLER ---
    const ambienceBtn = document.getElementById('ambience-btn');
    const bodyElement = document.body;
    
    ambienceBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('ambient-bright');
        const currentMode = bodyElement.classList.contains('ambient-bright') ? 'Worklight Shift (Night Shift)' : 'Daylight Shift (Grid Day)';
        console.log(`[Toolbox Lighting System] Switched to: ${currentMode}`);
    });

    // --- 4. HEADER SCROLL & ACTIVE NAV LINK TRIGGER ---
    const header = document.getElementById('site-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}` || 
                (currentSectionId === '' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    });

    // --- 5. MOBILE MENU HAMBURGER TOGGLE ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // --- 6. SCROLL INTERSECTION REVEALS ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- 7. PORTFOLIO CAROUSEL / SLIDER ---
    const slider = document.getElementById('portfolio-slider');
    const prevBtn = document.getElementById('prev-slide-btn');
    const nextBtn = document.getElementById('next-slide-btn');
    const slides = document.querySelectorAll('.portfolio-slide');
    
    let currentIndex = 0;
    
    function getVisibleSlidesCount() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 991) return 2;
        return 3;
    }
    
    function updateSlider() {
        if (!slider || slides.length === 0) return;
        const visibleSlides = getVisibleSlidesCount();
        const maxIndex = Math.max(0, slides.length - visibleSlides);
        
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;
        
        const slideWidth = slides[0].clientWidth + 30; // slide width + gap
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
        
        prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'all';
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
        nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'all';
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateSlider();
    });
    
    window.addEventListener('resize', updateSlider);
    setTimeout(updateSlider, 200);

    // Touch Swiping Support for Mobile & Tablet Devices
    let touchStartX = 0;
    let touchEndX = 0;
    const sliderContainer = document.querySelector('.portfolio-slider-container');
    
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipeGesture();
        }, { passive: true });
    }
    
    function handleSwipeGesture() {
        const minSwipeDistance = 45; // in pixels
        const visibleSlides = getVisibleSlidesCount();
        const maxIndex = Math.max(0, slides.length - visibleSlides);
        const diffX = touchStartX - touchEndX;
        
        if (Math.abs(diffX) > minSwipeDistance) {
            if (diffX > 0 && currentIndex < maxIndex) {
                // Swipe Left -> Next
                currentIndex++;
                updateSlider();
            } else if (diffX < 0 && currentIndex > 0) {
                // Swipe Right -> Prev
                currentIndex--;
                updateSlider();
            }
        }
    }

    // --- 8. CONTACT FORM SUBMISSION & SUCCESS MODAL ---
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successOverlay = document.getElementById('success-overlay');
    const successCloseBtn = document.getElementById('success-close-btn');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const originalText = submitBtn.textContent;
        submitBtn.textContent = currentLang === 'es' ? 'TRANSMITIENDO EXPEDIENTE...' : 'TRANSMITTING PROJECT FILE...';
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '0.7';
        
        setTimeout(() => {
            successOverlay.classList.add('show');
            
            submitBtn.textContent = originalText;
            submitBtn.style.pointerEvents = 'all';
            submitBtn.style.opacity = '1';
            
            // Reset form
            contactForm.reset();
            
            // Manually re-trigger the profile dropdown toggle reset to clean conditional fields
            // Set it to contractor default style view hidden
            conditionalGCElements.forEach(el => el.style.display = 'block');
            conditionalLocalElements.forEach(el => el.style.display = 'none');
            gcSelects.forEach(select => select.removeAttribute('required'));
            localSelects.forEach(select => select.removeAttribute('required'));
            formMessageLabel.innerHTML = currentLang === 'es' 
                ? 'Descríbenos tu proyecto o necesidad con detalle...' 
                : 'Tell us about your project or home upgrade in detail...';
        }, 1500);
    });
    
    successCloseBtn.addEventListener('click', () => {
        successOverlay.classList.remove('show');
    });
    
    successOverlay.addEventListener('click', (e) => {
        if (e.target === successOverlay) {
            successOverlay.classList.remove('show');
        }
    });

    // Initialize with default Spanish
    translatePage('es');
});
