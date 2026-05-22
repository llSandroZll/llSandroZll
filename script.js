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
            site_title: "TOOLBOX | Montajes de Precisión y Despliegues Técnicos",
            nav_home: "Inicio",
            nav_heritage: "Legado",
            nav_services: "Especialidades",
            nav_low_season: "Proyectos B2B",
            nav_local: "Cerca de Casa",
            nav_portfolio: "Portafolio",
            nav_connect: "Contacto",
            ambience_text: "Ambiente",
            
            hero_subtitle: "OPERACIÓN Y MONTAJES TÉCNICOS EN EUROPA",
            hero_title: "DESPLEGAMOS ACABADOS DE <span class=\"gold-gradient-text\">ALTO RENDIMIENTO</span> EN SUITES Y PROYECTOS.",
            hero_description: "Desde sistemas de iluminación indirecta hasta puertas acústicas de alta densidad y herrajes de diseño. Toolbox Deployment & Solutions monta y ajusta detalles en resorts hoteleros en temporada baja con velocidad absoluta y precisión técnica manchega.",
            hero_cta: "Iniciar Proyecto",
            hero_stat_1: "Años de Taller",
            hero_stat_2: "Habitaciones Ajustadas",
            hero_stat_3: "Cumplimiento en Plazos",

            heritage_badge: "Base técnica y taller de Campo de Criptana. Desde aquí preparamos plantillas de corte y herramientas para el despliegue.",
            heritage_subtitle: "Ficha de Campo",
            heritage_title: "Fuerza de Trabajo Manchega en Proyectos B2B.",
            heritage_p1: "La caja de herramientas es nuestro símbolo. Empezamos en Campo de Criptana montando griferías, nivelando puertas de madera y ajustando bisagras a nivel de milímetro. Hoy, esa mentalidad de taller la llevamos a proyectos hoteleros B2B en toda Europa. Preparamos herramientas, fabricamos plantillas de alineación en nuestro taller y cargamos furgonetas listos para trabajar con la máxima velocidad y limpieza.",
            heritage_quote: "\"Nuestra reputación se mide por la precisión del nivel de burbuja y el encaje exacto de cada bisagra. Si una puerta roza o un LED no está enrasado, el trabajo no está terminado.\"",
            heritage_p2: "Cuando la temporada hotelera termina, nuestras cuadrillas se movilizan a destinos clave: desde la costa de Ibiza y Mallorca hasta Marbella o Madrid. Ajustamos y renovamos frentes de armario, cabeceros alistonados, sistemas de luz indirecta y herrajes metálicos en semanas récord, garantizando que el hotel esté impecable antes del primer cliente de temporada.",
            heritage_btn: "Ver Ficha Técnica",

            services_subtitle: "Nuestra Especialidad",
            services_title: "Calibrado de Puntos de Contacto e Instalaciones",
            services_desc: "Instalamos y calibramos acabados de alto tránsito y alto rendimiento acústico: iluminación indirecta, ajuste de puertas y herrajes metálicos.",
            
            srv_1_title: "Luminarias LED e Iluminación",
            srv_1_desc: "Montaje de canales de luz empotrados, tiras de LED bajo armario y sistemas de encendido para crear ambientes limpios sin cables a la vista.",
            srv_1_item_1: "Montaje de fosados LED lineales integrados",
            srv_1_item_2: "Ajuste de canales y perfiles de luz en madera noble",
            srv_1_item_3: "Colocación de embellecedores e interruptores de diseño",

            srv_2_title: "Ajuste y Nivelado de Puertas",
            srv_2_desc: "Instalación y calibración de puertas pesadas, bisagras ocultas y nivelación micrométrica para asegurar el aislamiento de las habitaciones.",
            srv_2_item_1: "Nivelado y cuelgue de puertas de gran formato",
            srv_2_item_2: "Calibración de bisagras ocultas y topes de goma",
            srv_2_item_3: "Ajuste de marcos y revestimientos de madera",

            srv_3_title: "Herrajes y Placas Metálicas",
            srv_3_desc: "Sustitución y montaje de manillas pesadas, cerraduras de alta seguridad, pomos y placas de interruptor en latón cepillado o acero.",
            srv_3_item_1: "Fijación de manillas y tiradores de latón macizo",
            srv_3_item_2: "Sustitución de placas de enchufe e interruptor",
            srv_3_item_3: "Montaje de bombines y cerrojos de seguridad",

            srv_4_title: "Alistonados y Revestimientos",
            srv_4_desc: "Montaje y encaje perfecto de paneles de pared alistonados, cabeceros de madera y molduras decorativas a medida.",
            srv_4_item_1: "Instalación de alistonados decorativos en roble y nogal",
            srv_4_item_2: "Montaje de cabeceros de madera y repisas",
            srv_4_item_3: "Ajuste y enrasado de frentes de armario y molduras",

            low_subtitle: "LOGÍSTICA Y VELOCIDAD",
            low_title: "Despliegues en Temporada Baja",
            low_desc: "Las fechas de apertura no se mueven. Por eso, en Toolbox Deployment & Solutions organizamos la ingeniería de instalación con antelación en nuestro taller de Campo de Criptana. Pre-cortamos las guías de luz, calibramos los herrajes y preparamos plantillas para que cuando lleguemos al hotel la instalación sea rápida, limpia y silenciosa.",
            low_b1_title: "Kits de Montaje y Plantillas",
            low_b1_desc: "Agrupamos herrajes, tornillería y perfiles LED por suites en cajas numeradas. Evitamos esperas y pérdidas de tiempo durante la instalación.",
            low_b2_title: "Cuadrillas Técnicas de Viaje",
            low_b2_desc: "Equipos de instaladores de Campo de Criptana autónomos que viajan con todo lo necesario para trabajar en destino sin depender de terceros.",
            low_b3_title: "Entrega Limpia de Suites",
            low_b3_desc: "Toda la carpintería, persianas y luces ajustadas al milímetro, aspiradas y listas para recibir a los huéspedes.",

            local_subtitle: "Manos de Confianza en Campo de Criptana",
            local_title: "Dos Mundos, Una Sola Precisión.",
            local_desc: "Cuando los hoteles vuelven a llenarse de huéspedes y nuestras cuadrillas regresan a La Mancha, dedicamos nuestro oficio a cuidar de nuestros vecinos. Aplicamos el mismo rigor de nivelación, materiales excelentes y nivel de detalle de un hotel de cinco estrellas a las reparaciones, mantenimiento y mejoras de tu hogar.",
            local_c1_title: "Restauración de Puertas de Madera",
            local_c1_desc: "Lijado minucioso, tratamiento protector y barnizado de puertas exteriores de madera. Revivimos el brillo de tu fachada contra el sol y frío manchego.",
            local_c2_title: "Persianas y Mosquiteras",
            local_c2_desc: "Arreglo rápido de cintas rotas, cambio de lamas atascadas y motorización. Instalación de mosquiteras enrollables a medida para proteger tu confort veraniego.",
            local_c3_title: "Fontanería Antical",
            local_c3_desc: "Sustitución de griferías calcificadas por modelos ecológicos de diseño, reparación de cisternas con componentes reforzados y montaje de columnas de ducha premium.",
            local_c4_title: "Iluminación y Cerrajería",
            local_c4_desc: "Instalación de luminarias LED, renovación de mecanismos y enchufes dated por acabados de diseño, y cambio de bombines por seguridad anti-bumping.",

            portfolio_subtitle: "REGISTRO DE INSTALACIONES",
            portfolio_title: "Proyectos Recientes",
            port_tag_1: "Iluminación LED y Ajuste de Madera",
            port_loc_1: "Ibiza, Islas Baleares",
            port_desc_1: "Ajuste de armarios empotrados, enrasado de puertas y colocación de luces LED indirectas en dormitorios del hotel.",
            port_meta_lbl_1: "Completado en",
            port_meta_val_1: "45 Días",
            port_meta_lbl_2: "Habitaciones",
            port_meta_val_2: "140 Suites",
            port_tag_2: "Herrajes y Cuelgue de Puertas",
            port_loc_2: "Marbella, Costa del Sol",
            port_desc_2: "Sustitución de bisagras desgastadas por modelos ocultos y cambio de tiradores de latón en las villas principales.",
            port_meta_val_3: "30 Días",
            port_meta_lbl_3: "Holgura",
            port_meta_val_4: "0.5mm Tolerancia",
            port_tag_3: "Alistonados y Armarios",
            port_loc_3: "Mallorca, Islas Baleares",
            port_desc_3: "Instalación de paneles de nogal alistonados en paredes, ajuste de cajoneras y montaje de cabeceros de madera.",
            port_meta_val_5: "60 Días",
            port_meta_lbl_4: "Escala",
            port_meta_val_6: "180 Llaves",

            contact_subtitle: "PLANIFICACIÓN",
            contact_title: "Agenda tu Renovación",
            contact_desc: "Planificamos los despliegues de hotel con meses de antelación en nuestra base de Campo de Criptana. Contáctanos hoy para reservar fecha o solicitar un trabajo local.",
            contact_h1: "Base Logística y Taller",
            contact_h2: "Consultas Técnicas",
            contact_h3: "Teléfonos de Contacto",
            contact_est: "TALLER ABIERTO EN 2006 • ESPAÑA",

            form_title: "Solicitud de Presupuesto",
            opt_profile_gc: "Gestión Hotelera / Diseñadores (Montajes B2B)",
            opt_profile_local: "Residente Local (Manitas / Campo de Criptana)",
            label_profile: "Tipo de Cliente",
            label_name: "Nombre Completo",
            label_email: "Correo Electrónico",
            label_hotel: "Hotel / Marca o Empresa",
            opt_loc_balearic: "Ibiza & Formentera",
            opt_loc_mallorca: "Mallorca & Menorca",
            opt_loc_marbella: "Marbella & Costa del Sol",
            opt_loc_europe: "Resto de Europa (Francia, Italia, etc.)",
            opt_loc_other: "Otra Región de España",
            label_location: "Ubicación del Trabajo",
            opt_srv_lighting: "Luces LED y Fosos",
            opt_srv_doors: "Puertas y Bisagras",
            opt_srv_hardware: "Herrajes y Cerrajería",
            opt_srv_panels: "Panelados y Armarios",
            opt_srv_full: "Ajustes Generales de Suites",
            label_service: "Área de Interés",
            opt_time_upcoming: "Próxima Temporada Baja (Oct - Apr)",
            opt_time_next: "Siguiente Temporada",
            opt_time_urgent: "Trabajo Urgente",
            label_timing: "Plazo de Ejecución",
            opt_l_srv_wood: "Restauración de Puertas de Madera",
            opt_l_srv_shutters: "Persianas y Mosquiteras",
            opt_l_srv_plumb: "Fontanería (Grifos y Cisternas)",
            opt_l_srv_lights: "Luces LED y Bombines",
            opt_l_srv_other: "Otros Trabajos de Manitas",
            label_local_service: "Servicio Solicitado",
            opt_l_urg_now: "Lo antes posible / Urgente",
            opt_l_urg_month: "Este mes",
            opt_l_urg_flexible: "Flexible / Sin prisa",
            label_local_urgency: "Urgencia del Trabajo",
            label_message: "Detalles del trabajo a realizar...",
            btn_submit: "Enviar Solicitud",

            success_title: "Solicitud Registrada",
            success_desc: "Tu consulta ha sido transmitida a nuestro taller en Campo de Criptana. Revisaremos los materiales y la planificación para ponernos en contacto en breve. ¡Gracias por confiar en Toolbox!",
            success_btn: "Volver a la Web",
            
            footer_desc: "Instalando y poniendo a punto espacios hoteleros y locales con precisión meticulosa. Arraigados en Campo de Criptana, operando en toda España y Europa.",
            footer_nav_title: "Navegación",
            footer_contact_title: "Contacto y Legal",
            footer_privacy: "Política de Privacidad",
            footer_terms: "Términos del Oficio",
            footer_tagline: "Diseñado con rigor técnico y profesionalidad."
        },
        en: {
            site_title: "TOOLBOX | Precision Fittings & Technical Deployments",
            nav_home: "Home",
            nav_heritage: "Heritage",
            nav_services: "Specialties",
            nav_low_season: "B2B Projects",
            nav_local: "Close to Home",
            nav_portfolio: "Portfolio",
            nav_connect: "Connect",
            ambience_text: "Ambience",
            
            hero_subtitle: "TECHNICAL FIELD OPERATIONS & FITTINGS IN EUROPE",
            hero_title: "WE DEPLOY <span class=\"gold-gradient-text\">HIGH-PERFORMANCE</span> FINISHES & FITTINGS.",
            hero_description: "From custom ambient lighting arrays to solid sound-insulated doors and industrial ironmongery. Toolbox Deployment & Solutions installs and refines premium suites during the off-season with technical windmill-inspired precision.",
            hero_cta: "Initiate Project",
            hero_stat_1: "Years in Shop",
            hero_stat_2: "Rooms Calibrated",
            hero_stat_3: "Low-Season Delivery",

            heritage_badge: "Campo de Criptana workshop base. Where we calibrate templates, select high-end fittings, and pack toolboxes for operations.",
            heritage_subtitle: "Field Log",
            heritage_title: "B2B Field Work and Handyman Operations.",
            heritage_p1: "The toolbox is our central symbol. We started in Campo de Criptana adjusting wooden doors, replacing faucets, and aligning hinges with millimeter precision. Today, we bring that practical workshop mindset to B2B resort upgrades across Europe. We pre-cut templates, calibrate alignment fixtures in our workshop, and pack our vans, ready to deploy.",
            heritage_quote: "\"Our reputation is measured by the bubble of the level and the exact fit of the hinge. If a door rubs or an LED channel is not flush, the job is not done.\"",
            heritage_p2: "During the hotel off-season, our mobile crews deploy to key locations—from the beaches of Ibiza and Mallorca to Marbella and Madrid. We adjust and refresh wardrobe fronts, wooden slats, under-cabinet LEDs, and metal locksets within tight schedules, ensuring the site is perfectly calibrated.",
            heritage_btn: "View Tech Specs",

            services_subtitle: "Technical Specs",
            services_title: "Calibrating Suite Details & Fixtures",
            services_desc: "We fit and adjust heavy architectural finishes built for technical performance and high traffic: ambient light channels, doors, and hardware.",
            
            srv_1_title: "LED Fixtures & Lighting",
            srv_1_desc: "Fitting architectural light grooves, under-cabinet warm LED strips, and custom smart switches to create clean, seamless glowing setups.",
            srv_1_item_1: "Mounting linear LED cove integrations",
            srv_1_item_2: "Adjusting timber linear lighting slots",
            srv_1_item_3: "Swapping designer faceplates and switches",

            srv_2_title: "Door Adjustments & Leveling",
            srv_2_desc: "Precision alignment, leveling, and fitting of suite entrance doors, hidden hinges, and acoustic draft seals for sound insulation.",
            srv_2_item_1: "Hanging and leveling heavy suite doors",
            srv_2_item_2: "Calibrating hidden hinges & rubber seal stops",
            srv_2_item_3: "Fitting solid frames and wooden surrounds",

            srv_3_title: "Hardware & Metal Plates",
            srv_3_desc: "We replace and fit door handles, secure locks, faceplates, and metal trims in brass, bronze, and brushed steel for a tactile feel of quality.",
            srv_3_item_1: "Fitting solid knurled brass door handles",
            srv_3_item_2: "Swapping out cover plates and switch bezels",
            srv_3_item_3: "Mounting high-security cylinder deadbolts",

            srv_4_title: "Slatted Panels & Trim work",
            srv_4_desc: "Assembling and aligning custom wood wall slats, wooden headboards, wardrobe doors, and precise wood trim moldings.",
            srv_4_item_1: "Fitting decorative slatted panels in oak and walnut",
            srv_4_item_2: "Mounting wooden headboards and shelving",
            srv_4_item_3: "Leveling and aligning custom wardrobe fronts",

            low_subtitle: "LOGISTICS & SPEED",
            low_title: "Off-Season B2B Deployments",
            low_desc: "Opening dates are non-negotiable. That is why Toolbox Deployment & Solutions plans the installation logistics at our Campo de Criptana workshop. We pre-cut lighting tracks, pre-drill hardware guides, and align templates so that onsite work is clean, quiet, and fast.",
            low_b1_title: "Pre-Assembled Fitting Kits",
            low_b1_desc: "We pack screws, custom brackets, and LED tracks in labeled room kits. No searching, no waiting—just fast, precise assembly.",
            low_b2_title: "Sovereign Mobile Crews",
            low_b2_desc: "Self-sufficient installation crews from La Mancha who travel with full tools and equipment to complete the job independently.",
            low_b3_title: "Pristine Finish Handover",
            low_b3_desc: "Every wood joint, shutter slat, and LED strip adjusted to the millimeter, vacuumed clean, and ready for guests.",

            local_subtitle: "Close to Home: Trusted Craft",
            local_title: "Two Worlds, One Precision.",
            local_desc: "When we are not deployed at grand European hotels, we dedicate our passion to caring for the homes in our region. We bring the exact same technical leveling rigor, excellent materials, and five-star precision to your household upgrades.",
            local_c1_title: "Wood Door Restoration",
            local_c1_desc: "Precision sanding, weatherproof coating, and varnishing of exterior wood doors. Reviving the shine and durability of your home entrances.",
            local_c2_title: "Shutters & Insect Screens",
            local_c2_desc: "Repairing rolling shutter straps, swapping stuck slats, blind motorization, and installing custom roll-up insect screens for summer protection.",
            local_c3_title: "Plumbing & Lime Control",
            local_c3_desc: "Upgrading faucets to custom eco-friendly designer hardware, flushing cistern repairs, and custom premium shower column retrofits.",
            local_c4_title: "Lighting & Security Upgrades",
            local_c4_desc: "Installing high-efficiency warm LED arrays, swapping dated switches for designer plates, and installing high-security cylinder locks.",

            portfolio_subtitle: "WORK LOG",
            portfolio_title: "Recent Projects",
            port_tag_1: "LED Strips & Wood Tuning",
            port_loc_1: "Ibiza, Balearic Islands",
            port_desc_1: "Adjusting built-in closets, flush doors, and fitting integrated ambient LED strips in hotel guestrooms.",
            port_meta_lbl_1: "Completed in",
            port_meta_val_1: "45 Days",
            port_meta_lbl_2: "Rooms",
            port_meta_val_2: "140 Suites",
            port_tag_2: "Hinges & Hardware Tuning",
            port_loc_2: "Marbella, Costa del Sol",
            port_desc_2: "Replacing worn door hinges with concealed models and installing brass handles across high-end villas.",
            port_meta_val_3: "30 Days",
            port_meta_lbl_3: "Gap Space",
            port_meta_val_4: "0.5mm Tolerance",
            port_tag_3: "Slatted Walls & Wardrobes",
            port_loc_3: "Mallorca, Balearic Islands",
            port_desc_3: "Fitting decorative walnut slat paneling, adjusting drawer slides, and mounting wooden headboards.",
            port_meta_val_5: "60 Days",
            port_meta_lbl_4: "Scale",
            port_meta_val_6: "180 Keys",

            contact_subtitle: "PROJECT PLANNING",
            contact_title: "Book a Project Slot",
            contact_desc: "We schedule hotel deployments months ahead at our Campo de Criptana workshop. Get in touch today to reserve a slot or request local handyman work.",
            contact_h1: "Workshop & Logistics Hub",
            contact_h2: "Technical Enquiries",
            contact_h3: "Phone Lines",
            contact_est: "WORKSHOP ESTABLISHED 2006 • SPAIN",

            form_title: "Request a Project Quote",
            opt_profile_gc: "Hotel Management / Designers (B2B Project)",
            opt_profile_local: "Local Resident (Handyman / Campo de Criptana)",
            label_profile: "Client Type",
            label_name: "Full Name",
            label_email: "Email Address",
            label_hotel: "Hotel / Brand Name",
            opt_loc_balearic: "Ibiza & Formentera",
            opt_loc_mallorca: "Mallorca & Menorca",
            opt_loc_marbella: "Marbella & Costa del Sol",
            opt_loc_europe: "Rest of Europe (France, Italy, etc.)",
            opt_loc_other: "Other Spain Region",
            label_location: "Project Location",
            opt_srv_lighting: "LED Strips & Cove Lighting",
            opt_srv_doors: "Doors & Concealed Hinges",
            opt_srv_hardware: "Brass Handles & Locks",
            opt_srv_panels: "Wall Slats & Wardrobes",
            opt_srv_full: "General Guestroom Adjustments",
            label_service: "Focus Area of Interest",
            opt_time_upcoming: "Upcoming Low Season (Oct - Apr)",
            opt_time_next: "Next Year Low Season",
            opt_time_urgent: "Urgent Work",
            label_timing: "Target Schedule",
            opt_l_srv_wood: "Wood Door Restoration",
            opt_l_srv_shutters: "Rolling Shutters & Screens",
            opt_l_srv_plumb: "Plumbing (Taps & Cisterns)",
            opt_l_srv_lights: "LED Upgrades & Lock Cylinders",
            opt_l_srv_other: "Other Handyman Tasks",
            label_local_service: "Requested Service",
            opt_l_urg_now: "As soon as possible / Urgent",
            opt_l_urg_month: "Within this month",
            opt_l_urg_flexible: "Flexible / No rush",
            label_local_urgency: "Service Urgency",
            label_message: "Job details...",
            btn_submit: "Send Request",

            success_title: "Inquiry Logged",
            success_desc: "Your inquiry has been successfully logged at our workshop base in Campo de Criptana. We will review the custom fittings schedule and contact you shortly. Thank you for trusting Toolbox!",
            success_btn: "Return to Site",
            
            footer_desc: "Installing and tuning B2B hotel finishes and residential homes with precision. Rooted in Campo de Criptana, operating all over the country and Europe.",
            footer_nav_title: "Navigation",
            footer_contact_title: "Legal & Contact",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Craft",
            footer_tagline: "Designed with technical rigor and professionalism."
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
