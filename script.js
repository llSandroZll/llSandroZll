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
            site_title: "Toolbox S.L. | Montaje de Mobiliario Hotelero e Instalación de Iluminación de Diseño",
            partners_title: "PROVEEDORES Y SOCIOS DE CONFIANZA:",
            nav_home: "Inicio",
            nav_heritage: "Quiénes Somos",
            nav_services: "Servicios",
            nav_low_season: "Proceso de Trabajo",
            nav_local: "Manitas Local",
            nav_portfolio: "Trabajos Destacados",
            nav_connect: "Contacto",
            ambience_text: "Ambiente",
            
            hero_subtitle: "TOOLBOX S.L. • MONTAJE DE MOBILIARIO HOTELERO E INSTALACIONES DE DISEÑO",
            hero_title: "INSTALADORES DE ACABADOS DE LUJO E <span class=\"gold-gradient-text\">ILUMINACIÓN DE DISEÑO</span> EN HOTELES.",
            hero_description: "Especialistas en la instalación, montaje y ajuste técnico de equipamiento para el sector hotelero de lujo. Con más de 10 años de experiencia técnica, nos encargamos del despliegue impecable de luminarias de diseño, accesorios de baño premium, panelados acústicos de madera y mobiliario a medida, asegurando acabados de máxima precisión y cumplimiento de plazos en cada suite.",
            hero_cta: "Solicitar Consulta Técnica",
            hero_stat_1: "Años de Experiencia",
            hero_stat_2: "Habitaciones Equipadas",
            hero_stat_3: "Eficiencia en Temporada Baja",
 
            heritage_badge: "Sede de coordinación logística y técnica en Campo de Criptana. Servicio a nivel local y nacional.",
            heritage_subtitle: "Quiénes Somos",
            heritage_title: "Trayectoria Técnica de Toolbox S.L.",
            heritage_p1: "Toolbox S.L. es una sociedad limitada formada por dos socios fundadores: Harvey Braga y Enyerson Gómez, con una experiencia contrastada de más de 10 años en el sector del montaje y la instalación de equipamientos en hoteles de primera clase. Harvey Braga aporta una trayectoria invaluable al haber trabajado como subcontratista principal para firmas de iluminación de gran prestigio como Grantlamp S.L. (fabricante líder de lámparas y aparatos eléctricos de iluminación) y ALVE (destacada en diseño y consultoría de iluminación contract & retail). Este bagaje técnico les permite liderar cuadrillas eficientes en todo tipo de acabados hoteleros de lujo.",
            heritage_quote: "\"En Toolbox, cada miembro del equipo es una herramienta clave, ¡y juntos damos vida a espacios extraordinarios! Llevamos la precisión del milímetro en nuestra caja de soluciones.\"",
            heritage_p2: "Conscientes de que la temporada baja es el momento crítico para las reformas hoteleras en destinos como Ibiza, Mallorca, Marbella o Madrid, movilizamos nuestros equipos técnicos para completar el montaje de mobiliario hotelero, luminarias complejas, cabeceros alistonados y accesorios de diseño en plazos extremadamente ajustados. Nuestra red de proveedores de confianza y nuestra experiencia de subcontratación nos posiciona como el partner perfecto para los proyectos más ambiciosos.",
            heritage_btn: "Ver Nuestros Servicios",
 
            services_subtitle: "Nuestros Servicios",
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
            low_desc: "Cuando los materiales de equipamiento hotelero llegan a la obra, entra en acción nuestro proceso planificado de cinco fases para garantizar la máxima rapidez y acabados perfectos.",
            low_b1_title: "1. Recepción de Material",
            low_b1_desc: "Recibimos y catalogamos minuciosamente todo el equipamiento y materiales en la obra, verificando cada pieza contra las especificaciones del fabricante.",
            low_b2_title: "2. Almacenamiento Seguro",
            low_b2_desc: "Resguardamos las piezas en almacenes secos y climatizados en el propio hotel, protegiendo maderas nobles y luminarias delicadas.",
            low_b3_title: "3. Distribución por Kits",
            low_b3_desc: "Agrupamos y distribuimos herrajes y accesorios en kits numerados por habitación, eliminando pérdidas de tiempo o extravíos en pasillos.",
            low_b4_title: "4. Instalación de Precisión",
            low_b4_desc: "Nuestras cuadrillas instalan apliques, frentes de armarios y cabeceros con tolerancias milimétricas y herramientas profesionales.",
            low_b5_title: "5. Certificación y Entrega",
            low_b5_desc: "Limpiamos cada espacio con aspiración industrial y entregamos un boletín técnico de calidad y correcto funcionamiento listo para el huésped.",
            local_subtitle: "Presencia Internacional",
            local_title: "Logística Sin Fronteras en el Sector Contract Europeo.",
            local_desc: "Movilizamos nuestras cuadrillas técnicas y coordinamos el transporte de herrajes, luminarias y mobiliario desde nuestra central logística en España hacia los principales enclaves del turismo del lujo europeo.",
            local_c1_title: "España",
            local_c1_desc: "Nuestra base operativa de coordinación. Despliegues de primer nivel en Madrid, Barcelona, Marbella, Mallorca e Ibiza, respondiendo de forma ágil a las reformas hoteleras nacionales.",
            local_c2_title: "Portugal",
            local_c2_desc: "Operaciones de montaje en Lisboa y el Algarve, colaborando activamente en la instalación técnica de luminarias de diseño para el prestigioso Hotel Sofitel.",
            local_c3_title: "Italia",
            local_c3_desc: "Rigor milimétrico en enclaves del diseño como Florencia, realizando la instalación integral de iluminación contract y mesas de restaurante exclusivas.",
            local_c4_title: "",
            local_c4_desc: "",

            portfolio_subtitle: "TRABAJOS DESTACADOS • PROYECTOS REALES",
            portfolio_title: "Garantía de Grandes Hoteles",
            
            port_title_1: "Rosewood & Westin Palace",
            port_tag_1: "Iluminación de Lobbies",
            port_loc_1: "Madrid, España",
            port_desc_1: "Montaje e instalación de luminarias monumentales, chandeliers de diseño y sistemas de control de iluminación en el exclusivo hotel Rosewood Villa Magna y en The Westin Palace.",
            port_meta_lbl_1: "Completado en",
            port_meta_val_1: "Plazo Récord",
            port_meta_lbl_2: "Partners",
            port_meta_val_2: "Grantlamp & ALVE",
            
            port_title_2: "Sistemas de Smart TV",
            port_tag_2: "Montaje Audiovisual",
            port_loc_2: "Madrid & Barcelona, España",
            port_desc_2: "Instalación de soportes de pared articulados reforzados, guiado oculto de cableado y montaje nivelado de televisores de alta gama y Smart TVs en suites presidenciales.",
            port_meta_lbl_3: "Fases Certificadas",
            port_meta_val_3: "100% Calidad",
            port_meta_lbl_4: "Equipamiento",
            port_meta_val_4: "Suites de Ensueño",
            
            port_title_3: "Hotel Westin Excelsior",
            port_tag_3: "Mesas y Comedores",
            port_loc_3: "Florencia, Italia",
            port_desc_3: "Ensamblaje e instalación de mesas de comedor de mármol a medida, luminarias suspendidas de gran formato y mobiliario premium en el restaurante del Hotel Westin Excelsior en Florencia, Italia.",
            port_meta_lbl_5: "Control",
            port_meta_val_5: "Mesas y Sillas",
            port_meta_lbl_6: "Garantía",
            port_meta_val_6: "Montaje Contract",

            port_title_4: "Rosewood Grand Lobby",
            port_tag_4: "Chandeliers de Lujo",
            port_loc_4: "Madrid, España",
            port_desc_4: "Precisión técnica en el equilibrado, montaje y suspensión de lámparas monumentales y chandeliers de cristal de más de 3 metros de altura en el lobby principal.",
            port_meta_lbl_7: "Montaje",
            port_meta_val_7: "Calibrado",
            port_meta_lbl_8: "Materiales",
            port_meta_val_8: "Cristal y Latón",

            port_title_5: "Hotel Sofitel de Lisboa",
            port_tag_5: "Suites de Lujo",
            port_loc_5: "Lisboa, Portugal",
            port_desc_5: "Instalación técnica de cabeceros integrados, luminarias de diseño y mobiliario premium en las suites de lujo del Hotel Sofitel de Lisboa, Portugal.",
            port_meta_lbl_9: "Suite Premium",
            port_meta_val_9: "Acabado Contract",
            port_meta_lbl_10: "Precisión",
            port_meta_val_10: "Instalación Integral",

            contact_subtitle: "CONTACTO Y CONSULTAS",
            contact_title: "Inicia tu Consulta de Proyecto con Toolbox S.L.",
            contact_desc: "Planificamos los suministros de los fabricantes y el despliegue de cuadrillas con antelación en nuestra base de Campo de Criptana. Escríbenos hoy para asegurar tu plaza.",
            contact_h1: "Base de Coordinación y Logística",
            contact_h2: "Oficina Técnica",
            contact_h3: "Teléfonos de Contacto Directo",
            contact_est: "MÁS DE 10 AÑOS TRANSFORMANDO ESPACIOS EN LUGARES DE ENSUEÑO",

            form_title: "Iniciar Consulta de Proyecto",
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
            label_message: "Descríbenos tu proyecto con detalle...",
            btn_submit: "Transmitir Consulta",

            success_title: "Consulta Recibida con Éxito",
            success_desc: "Tu solicitud ha sido catalogada y enviada a nuestra oficina en Campo de Criptana. Coordinaremos la planificación de instaladores para contactarte a la mayor brevedad. ¡Gracias por confiar en Toolbox S.L.!",
            success_btn: "Volver a la Web",
            
            footer_desc: "Toolbox S.L. se especializa en la instalación y montaje de luminarias, mobiliario de alta gama y accesorios contract para el sector hotelero e institucional de lujo. Arraigados en Campo de Criptana, prestando servicio internacional y nacional."s, mobiliario de alta gama y accesorios contract para el sector hotelero e institucional de lujo. Arraigados en Campo de Criptana, prestando servicio local e internacional.",
            footer_nav_title: "Navegación",
            footer_contact_title: "Oficinas y Contacto",
            footer_privacy: "Política de Privacidad (RGPD)",
            footer_terms: "Términos de Servicio",
            footer_tagline: "Montajes de Precisión. Más de 10 años transformando espacios en lugares de ensueño."
        },
        en: {
            site_title: "Toolbox S.L. | Hotel Furniture Assembly & Custom Lighting Installation",
            partners_title: "TRUSTED SUPPLIERS & PARTNERS:",
            nav_home: "Home",
            nav_heritage: "About Us",
            nav_services: "Services",
            nav_low_season: "Work Process",
            nav_local: "Local Handyman",
            nav_portfolio: "Featured Works",
            nav_connect: "Contact",
            ambience_text: "Ambience",
            
            hero_subtitle: "TOOLBOX S.L. • HOTEL FURNITURE ASSEMBLY & HIGH-END LIGHTING DEPLOYMENTS",
            hero_title: "LUXURY FINISH INSTALLERS & <span class=\"gold-gradient-text\">DESIGNER LIGHTING</span> IN HOTELS.",
            hero_description: "Specialists in the installation, assembly, and technical calibration of equipment for the luxury hospitality sector. With over 10 years of experience, we deliver the flawless deployment of designer lighting, premium bathroom fittings, acoustic wood paneling, and custom furniture, ensuring high-precision finishes and strict deadline compliance in every suite.",
            hero_cta: "Request Technical Consultation",
            hero_stat_1: "Years of Experience",
            hero_stat_2: "Rooms Calibrated",
            hero_stat_3: "Off-Season Efficiency",
 
            heritage_badge: "Logistics and technical coordination base in Campo de Criptana, Spain. Serving locally and globally.",
            heritage_subtitle: "Who We Are",
            heritage_title: "Toolbox S.L. Technical Excellence",
            heritage_p1: "Toolbox S.L. is a limited liability company formed by two founding partners: Harvey Braga and Enyerson Gómez, with a proven track record of over 10 years of experience in the installation and assembly of equipment for first-class hotels. Harvey Braga brings invaluable experience from his years working as a primary subcontractor for prestigious lighting manufacturers like Grantlamp S.L. (leading manufacturer of designer lamps and electric lighting fixtures) and ALVE (prominent in lighting design and retail contract consulting). This strong technical background enables them to lead efficient crews across all luxury hotel finishes.",
            heritage_quote: "\"At Toolbox, each member of the team is a key tool, and together we bring extraordinary spaces to life! We carry millimeter precision in our box of solutions.\"",
            heritage_p2: "Knowing that the off-season is the critical window for hotel renovations in premier destinations like Ibiza, Mallorca, Marbella, and Madrid, we deploy our technical crews to complete hotel furniture assembly, complex lighting arrays, slatted headboards, and designer bathroom fixtures within record schedules. Our trusted supplier network and subcontracting heritage make us the perfect partner for high-end hospitality projects.",
            heritage_btn: "View Services",
 
            services_subtitle: "Our Specialties",
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
 
            srv_3_title: "Designer Hardware & Fittings",
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
            low_desc: "When the hotel equipment and materials arrive on-site, our structured five-phase process goes into action to guarantee absolute speed and perfect finishes.",
            low_b1_title: "1. Receipt of Materials",
            low_b1_desc: "We receive and catalog all equipment and materials on-site, verifying every single element against manufacturer specifications.",
            low_b2_title: "2. Secure Storage",
            low_b2_desc: "We secure all pieces in dry, temperature-controlled on-site storage, protecting fine wood and delicate lighting fixtures.",
            low_b3_title: "3. Kit-Based Distribution",
            low_b3_desc: "We pre-sort and distribute hardware and fixtures into numbered room kits, eliminating search delays and material loss in the corridors.",
            low_b4_title: "4. Precision Mounting",
            low_b4_desc: "Our professional crews install light fixtures, wardrobe doors, and custom headboards to millimeter tolerances using specialized tools.",
            low_b5_title: "5. Certification & Handover",
            low_b5_desc: "We thoroughly clean each space and issue a technical quality certification, delivering rooms completely ready for guest check-in.",
 
            local_subtitle: "International Presence",
            local_title: "Seamless Logistics Across the European Contract Sector.",
            local_desc: "We mobilize our specialized technical crews and coordinate the transportation of fittings, designer lighting, and custom furniture from our logistics center in Spain to Europe's premier luxury hubs.",
            local_c1_title: "Spain",
            local_c1_desc: "Our primary coordination base. First-class deployments in Madrid, Barcelona, Marbella, Mallorca, and Ibiza, responding with high agility to national hotel renovations.",
            local_c2_title: "Portugal",
            local_c2_desc: "Active mounting operations in Lisbon and the Algarve, collaborating on the high-end lighting installations for the prestigious Sofitel Lisbon Hotel.",
            local_c3_title: "Italy",
            local_c3_desc: "Millimeter precision in historical design hubs like Florence, completing full integrations of luxury contract lighting and bespoke restaurant dining tables.",
            local_c4_title: "",
            local_c4_desc: "",
 
            portfolio_subtitle: "RECENT WORKS • REAL HOTELS",
            portfolio_title: "Proven Luxury Hospitality Pedigree",
            
            port_title_1: "Rosewood & Westin Palace",
            port_tag_1: "Lobby Lighting",
            port_loc_1: "Madrid, Spain",
            port_desc_1: "Fitting custom linear chandeliers, grand orb lighting arrays, and smart control panels in the ultra-luxury Rosewood Villa Magna and The Westin Palace.",
            port_meta_lbl_1: "Completed",
            port_meta_val_1: "On Schedule",
            port_meta_lbl_2: "Partners",
            port_meta_val_2: "Grantlamp & ALVE",
            
            port_title_2: "Smart TV Systems",
            port_tag_2: "Audiovisual Mounting",
            port_loc_2: "Madrid & Barcelona, Spain",
            port_desc_2: "Installing heavy-duty articulating wall mounts, concealed cable routing, and precise leveling of high-end Smart TVs in luxury presidential suites.",
            port_meta_lbl_3: "Certified Work",
            port_meta_val_3: "100% Quality",
            port_meta_lbl_4: "Scope",
            port_meta_val_4: "Exquisite Suites",
            
            port_title_3: "Westin Excelsior Hotel",
            port_tag_3: "Dining & Tables",
            port_loc_3: "Florence, Italy",
            port_desc_3: "Assembly and installation of custom marble dining tables, large-format suspended lighting fixtures, and premium furniture in the restaurant of the Westin Excelsior Hotel in Florence, Italy.",
            port_meta_lbl_5: "Scope",
            port_meta_val_5: "Tables & Chairs",
            port_meta_lbl_6: "Warranty",
            port_meta_val_6: "Contract Fitting",
 
            port_title_4: "Rosewood Grand Lobby",
            port_tag_4: "Grand Chandeliers",
            port_loc_4: "Madrid, Spain",
            port_desc_4: "Technical precision in balancing, mounting, and suspending monumental custom glass pendant chandeliers over 3 meters in height.",
            port_meta_lbl_7: "Fitting",
            port_meta_val_7: "Calibrated",
            port_meta_lbl_8: "Materials",
            port_meta_val_8: "Crystal & Brass",
 
            port_title_5: "Sofitel Lisbon Hotel",
            port_tag_5: "Luxury Suites",
            port_loc_5: "Lisbon, Portugal",
            port_desc_5: "Technical installation of integrated headboards, designer lighting, and premium furniture in the luxury suites of the Sofitel Lisbon Hotel in Portugal.",
            port_meta_lbl_9: "Premium Suite",
            port_meta_val_9: "Contract Finish",
            port_meta_lbl_10: "Precision",
            port_meta_val_10: "Full Installation",
 
            contact_subtitle: "CONTACT & INQUIRIES",
            contact_title: "Start Your Project Consultation with Toolbox S.L.",
            contact_desc: "We coordinate manufacturer supplies and technician team schedules in advance at our Campo de Criptana center. Write to us today to book your renovation slot.",
            contact_h1: "Logistics & Coordination Base",
            contact_h2: "Technical Office",
            contact_h3: "Direct Inquiry Hotline",
            contact_est: "OVER 10 YEARS OF TRANSFORMING SPACES INTO LUXURIOUS DESTINATIONS",
 
            form_title: "Start Project Inquiry",
            label_name: "Full Name",
            label_email: "Email Address",
            label_hotel: "Hotel / Company / Interior Design Studio",
            opt_loc_balearic: "Ibiza & Formentera",
            opt_loc_mallorca: "Mallorca & Menorca",
            opt_loc_marbella: "Marbella & Costa del Sol",
            opt_loc_europe: "Resto of Europe (Lisbon, Florence, etc.)",
            opt_loc_other: "Other Region of Spain",
            label_location: "Project Location",
            opt_srv_lighting: "Lighting Installation (Fixtures & LEDs)",
            opt_srv_doors: "Furniture Assembly & Wardrobes",
            opt_srv_hardware: "Bathroom Hardware & Contract Accessories",
            opt_srv_panels: "Timber Panelling & Wood Slatting",
            opt_srv_full: "Full Suite Turnkey Installation",
            label_service: "Requested Service",
            opt_time_upcoming: "Upcoming Low Season (Oct - Apr)",
            opt_time_next: "Next Low Season",
            opt_time_urgent: "Urgent Renovation",
            label_timing: "Execution Timeline",
            label_message: "Tell us about your project in detail...",
            btn_submit: "Transmit Inquiry",
 
            success_title: "Inquiry Received Successfully",
            success_desc: "Your request has been filed and dispatched to our logistics headquarters in Campo Criptana. We will organize project schedules and reach back to you shortly. Thank you for choosing Toolbox S.L.!",
            success_btn: "Return to Website",
             
            footer_desc: "Toolbox S.L. specializes in the installation and assembly of luminaires, high-end furniture, and contract accessories for the luxury hospitality and institutional sectors. Rooted in Campo de Criptana, serving internationally and nationally.",
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
        
        console.log(`[Toolbox Translation Engine] Page translated to: ${lang.toUpperCase()}`);
    }

    // Connect triggers to translation buttons
    langEsBtn.addEventListener('click', () => translatePage('es'));
    langEnBtn.addEventListener('click', () => translatePage('en'));

    // --- 2. DYNAMIC ACTIVE NAV LINK SCROLLER ---
    // Section and navigation updates handled below.

    // --- 3. AMBIENCE LIGHTING CONTROLLER ---
    const ambienceBtn = document.getElementById('ambience-btn');
    const bodyElement = document.body;
    
    ambienceBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('ambient-bright');
        const currentMode = bodyElement.classList.contains('ambient-bright') ? 'Daylight Shift (Grid Day - Light Theme)' : 'Worklight Shift (Night Shift - Dark Theme)';
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
