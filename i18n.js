/* Key Launcher homepage localization.
 * Editorial quotes and press headlines intentionally stay in their original language.
 */
(function () {
    const supportedLocales = {
        en: 'English',
        vi: 'Tiếng Việt',
        es: 'Español',
        'pt-BR': 'Português (BR)',
        id: 'Bahasa Indonesia',
        fr: 'Français',
        de: 'Deutsch'
    };

    const translations = {
        vi: {
            meta: ["Key Launcher — Launcher T9 & QWERTY tối giản cho Android", "Tìm ứng dụng bằng T9 hoặc QWERTY, thử vuốt để tìm (Beta) và tập trung với đồng hồ Pomodoro. Tính năng cốt lõi miễn phí, không quảng cáo, tùy chọn Pro."],
            navigation: ['Tính năng', 'Báo chí', 'Bảng giá', 'Đánh giá', 'Câu hỏi', 'Trợ giúp', 'Tải miễn phí'],
            hero: ["Key Launcher 2.0", "Mọi thứ bắt đầu", "từ một phím.", "Mở ứng dụng bằng T9 hoặc QWERTY, thử vuốt để tìm (Beta) và dành chỗ cho sự tập trung. Tùy chỉnh màn hình chính, sắp xếp các kho riêng tư và biến điện thoại thành đồng hồ Pomodoro để bàn.", "100+ đánh giá", "Tìm kiếm T9 & QWERTY", "Vuốt để tìm (Beta)", "Cốt lõi miễn phí · Không quảng cáo"],
            sections: {
                media: ['Báo chí & Đánh giá', 'Khám phá nhận xét của các nhà báo công nghệ và nhà sáng tạo về cách tiếp cận tối giản của Key Launcher.', 'Xem video đánh giá đầy đủ'],
                features: ['Thiết kế cho tốc độ. Tối ưu cho tập trung.', 'Giảm lệ thuộc điện thoại và đơn giản hóa công việc hằng ngày bằng các tính năng thiết thực, không gây xao nhãng.'],
                focus: ['Siêu tập trung', 'Tắt xao nhãng. <br class="hidden sm:inline">Dập tắt ồn ào.', 'Biến điện thoại thành trợ lý để bàn tối giản. Chế độ Siêu tập trung chặn các thông báo gây xao nhãng và cho phép truy cập nhanh trình phát nhạc, lịch, Pomodoro, trình chiếu ảnh và trò chơi ngoại tuyến.'],
                pricing: ['Giá minh bạch', 'Dùng miễn phí. <br class="sm:hidden">Nâng cấp PRO.', 'Các tính năng cốt lõi luôn miễn phí và không quảng cáo. Nâng cấp PRO theo năm hoặc mua trọn đời.'],
                testimonials: ['Phản hồi người dùng', 'Người dùng thật. <br class="sm:hidden">Đánh giá thật.'],
                faq: ['Câu hỏi phổ biến', 'Câu hỏi thường gặp', 'Tìm câu trả lời cho những thắc mắc thường gặp nhất về Key Launcher.'],
                cta: ['Sẵn sàng trải nghiệm tốc độ T9?', 'Tải Key Launcher cho Android để thao tác đơn giản hơn, làm việc hiệu quả hơn và lấy lại thời gian sử dụng màn hình.', 'Tải miễn phí trên Play Store']
            },
            features: [
                ['Tìm kiếm T9 siêu nhanh', "Tìm ứng dụng chỉ với vài phím."],
                ['Gọi tức thì', 'Gọi, nhắn tin hoặc tìm kiếm ngay lập tức.'],
                ['Lời bài hát đồng bộ', 'Thư giãn cùng âm nhạc ngay trên màn hình chính.'],
                ['Trung tâm tiện ích', 'Mọi tiện ích yêu thích ở một nơi.'],
                ['Lịch & Chương trình', 'Lịch trình luôn trong tầm tay.'],
                ['Hẹn giờ Pomodoro', 'Chế độ làm việc sâu tích hợp.'],
                ['Kho riêng tư', "Các kho riêng biệt, mỗi kho có mật mã riêng."],
                ['Material You & Kiểu chữ', 'Chủ đề mang đậm phong cách riêng của bạn.']
            ],
            focusBullets: [['Im lặng 1 chạm', 'Tắt ngay cảnh báo từ các ứng dụng gây xao nhãng.'], ['Trình phát nhạc', 'Thư giãn với lời bài hát đồng bộ ngay trên màn hình.'], ['Lịch & Chương trình', 'Xem toàn bộ lịch trình trong nháy mắt.'], ['Hẹn giờ Pomodoro', 'Bộ hẹn giờ giúp bạn duy trì tập trung.'], ['Trình chiếu album', 'Xem lại kỷ niệm yêu thích trong khi làm việc.'], ['Trò chơi T-Rex', 'Trò chơi ngoại tuyến cổ điển cho giờ nghỉ ngắn.']],
            pricing: ['Gói Miễn phí', 'Miễn phí', '/ trọn đời', 'Lý tưởng cho người muốn cai nghiện kỹ thuật số với giao diện gọn gàng và tốc độ cơ bản.', 'Tải miễn phí', 'Gói PRO', 'Tùy biến mọi khía cạnh của bố cục điện thoại theo phong cách của bạn.', 'Nâng cấp trong ứng dụng', 'Gói đăng ký 1 năm', 'Mua trọn đời', 'Giá dành cho', 'Giá cuối cùng được hiển thị trong ứng dụng.', 'Xem trong ứng dụng', 'Đề xuất'],
            pricingDetails: {
                planFeatures: [
                    ["Tìm kiếm T9 & QWERTY và vuốt để tìm (Beta)", "8 mục ghim, 3 widget mỗi Widget Center và 2 widget trong Stack", "3 Siêu phím tắt", "1 mục trong Kho riêng tư và 1 Giới hạn ứng dụng", "Dùng thử Pro; xem thời hạn và điều kiện trong ứng dụng", "Chấm thông báo, Quick Actions và cử chỉ vuốt màn hình chính"],
                    ["Không giới hạn mục ghim và widget trong Widget Center; tối đa 4 widget trong Stack", "Toàn bộ phím Siêu phím tắt và không giới hạn trang Home", "Nhiều Kho riêng tư, không giới hạn mục và Giới hạn ứng dụng", "Chế độ tập trung, lời bài hát đồng bộ và gói biểu tượng", "Bàn phím Glass, Neon Glow, Ripple và chuyển trang Home 3D", "Font tùy chỉnh, Máy tính, hình nền tự động và Sao lưu / Khôi phục"]
                ],
                categoryNames: ['Cốt lõi', 'Bàn phím', 'Trung tâm widget', 'Xem nhanh', 'Siêu phím tắt & Phím nóng', 'Kho riêng tư', 'Chế độ tập trung', 'Âm nhạc', 'Giao diện', 'Sử dụng ứng dụng', 'Bảng tin khám phá', 'Cài đặt & Dữ liệu', 'Trứng phục sinh'],
                featureNames: [
                    ["Tìm kiếm T9 thông minh", "Mục ghim", "Cử chỉ vuốt", "Tìm kiếm liên hệ", "Ẩn ứng dụng & liên hệ", "Chạm hai lần để khóa", "Trang ứng dụng", "Tìm kiếm QWERTY", "Vuốt để tìm (Beta)"],
                    ["Chế độ máy tính", "Chuyển chế độ chuông", "Bảng màu bàn phím", "Bàn phím Glass", "Neon Glow & Ripple", "Chuyển trang Home 3D"],
                    ["Số lượng widget", "Hình nền tùy chỉnh", "Widget Stack (Home / Trung tâm thông báo)"],
                    ["Widget đồng hồ", "Widget lịch", "Widget thời tiết"],
                    ["Siêu phím tắt"],
                    ["Kho riêng tư", "Tạo thêm Kho riêng tư"],
                    ["Chế độ tập trung", "Màn hình luôn bật"],
                    ["Điều khiển nhạc", "Lời bài hát đồng bộ"],
                    ["Tùy chọn hình nền", "Tự động đổi hình nền", "Hỗ trợ gói biểu tượng", "Font tùy chỉnh", "Tùy chỉnh biểu tượng", "Chấm thông báo", "Lớp phủ hình nền"],
                    ["Theo dõi sử dụng ứng dụng"],
                    ["Nguồn cấp RSS"],
                    ["Sao lưu & Khôi phục"],
                    ["Trò chơi T-Rex"]
                ],
                values: { "8 items": "8 mục", Unlimited: "Không giới hạn", "2 pages": "2 trang", "3 widgets": "3 widget", "3 slots": "3 vị trí", "1 item": "1 mục", "1 app": "1 ứng dụng", "3 sources": "3 nguồn", "In-app trial": "Dùng thử trong ứng dụng", "2 widgets": "2 widget", "4 widgets": "4 widget", "All keys": "Tất cả phím", "10 apps; unlimited contacts": "10 ứng dụng; danh bạ không giới hạn" },
                labels: ['So sánh tính năng chi tiết', 'Tính năng', 'Miễn phí', 'Hiển thị tất cả tính năng', 'Thu gọn', 'Xem giá PRO theo khu vực của bạn trong ứng dụng.'],
                regional: ['Giá được hiển thị bằng USD. Google Play sẽ tính mức giá được đặt cho quốc gia của tài khoản.', 'Thấp hơn giá toàn cầu {pct}%, được điều chỉnh theo sức mua địa phương.', 'Không bao giờ giảm giá. Giá chỉ tăng — mua sớm hơn, trả ít hơn. Giá mua trọn đời sẽ không bị thay đổi.']
            },
            faq: [
                ['Trình khởi chạy ứng dụng T9 là gì?', "Launcher T9 dùng bàn phím 3×4 để lọc ứng dụng theo các chữ cái trên từng phím số. Nhập vài số rồi chọn ứng dụng phù hợp. Key Launcher cũng có tìm kiếm QWERTY và vuốt để tìm (Beta)."],
                ['Key Launcher có an toàn và riêng tư không?', "Tìm kiếm ứng dụng và danh bạ được xử lý trên thiết bị; nội dung Kho riêng tư được lưu cục bộ. Gợi ý tìm kiếm web, thời tiết và lời bài hát sử dụng dịch vụ mạng. Ứng dụng cũng dùng dịch vụ phân tích, báo cáo sự cố và xử lý giao dịch. Xem Chính sách quyền riêng tư để biết chi tiết."],
                ['Key Launcher có hỗ trợ gói biểu tượng và hình nền tùy chỉnh không?', 'Có. Bạn có thể dùng gói biểu tượng, màu hệ thống, kiểu chữ và hình nền tự động. Một số tùy chỉnh nâng cao thuộc gói PRO.'],
                ['Key Launcher có làm hao pin không?', "Mức dùng pin phụ thuộc vào thiết lập. Đồng hồ Focus luôn bật, widget hoạt động, cập nhật thời tiết và các tính năng đang chạy có thể làm tăng mức tiêu thụ pin. Bạn có thể điều chỉnh trong Cài đặt."],
                ['Hỗ trợ những tích hợp gọi điện và nhắn tin nào?', 'Bạn có thể gọi, gửi SMS hoặc mở WhatsApp, Zalo và Viber trực tiếp bằng cách nhập tên liên hệ hoặc số điện thoại.'],
                ['Tôi có thể thử tính năng PRO trước khi mua không?', "Có. Bạn có thể dùng thử tính năng Pro trong ứng dụng trước khi nâng cấp. Xem thời hạn và điều kiện dùng thử trong ứng dụng; lượt cài đặt cũ có thể giữ điều kiện trước đây. Pro có gói năm và lựa chọn mua trọn đời."]
            ],
            footer: ['SẢN PHẨM CỦA LOUSIFY TECH', '© 2026 Lousify Tech. Bảo lưu mọi quyền.', 'Chính sách quyền riêng tư', 'Điều khoản dịch vụ', 'Trợ giúp'],
            ui: ['trên Google Play', 'Ảnh chụp trước', 'Ảnh chụp tiếp theo', 'Đổi giao diện', 'Đổi ngôn ngữ', 'Đã dịch', 'Tính năng & Lợi ích', 'Cuộn để khám phá'],
            compareNav: 'So sánh',
            mediaBadge: 'Báo chí đưa tin',
            compare: {
                badgeText: 'So sánh trực diện',
                title: 'Tại sao nên chọn Key Launcher?',
                subtitle: 'So sánh Key Launcher với các trình khởi chạy tối giản phổ biến nhất. Khám phá lý do hàng ngàn người dùng chuyển sang Key Launcher.',
                featureHeader: 'Tính năng',
                topBadge: 'Đứng đầu',
                mobileLabel: 'So sánh với:',
                mobileHint: 'Chạm để đổi đối thủ',
                allTab: 'Tất cả',
                scrollHint: 'Vuốt ngang để xem toàn bộ bảng',
                rows: [
                    { name: "Tìm kiếm T9 siêu nhanh", desc: "Tìm ứng dụng chỉ với vài phím.", keyLauncher: "Có (Tức thì)", niagara: "❌ Cuộn chữ cái alphabet", minimalistPhone: "❌ Danh sách văn bản", olauncher: "❌ Gõ tìm kiếm văn bản" },
                    { name: "Bàn phím QWERTY & Vuốt lướt (Swipe)", desc: "Tìm bằng QWERTY + Vuốt để tìm (Beta)", keyLauncher: "Có (Cả hai)", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Nhiều Kho riêng tư bảo mật", desc: "Mỗi kho có mật mã riêng", keyLauncher: "Nhiều kho với Pro", niagara: "Chỉ ẩn ứng dụng", minimalistPhone: "Chỉ chặn ứng dụng", olauncher: "Chỉ ẩn ứng dụng" },
                    { name: "Siêu tập trung & Lời bài hát đồng bộ", desc: "Tích hợp Pomodoro, đồng hồ để bàn & lời bài hát", keyLauncher: "Tích hợp sẵn", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Tìm kiếm & Quyền riêng tư", desc: "Tìm ứng dụng và danh bạ trên thiết bị; công khai dịch vụ mạng", keyLauncher: "Tìm cục bộ + tính năng trực tuyến", niagara: "Xem chính sách quyền riêng tư", minimalistPhone: "Xem chính sách quyền riêng tư", olauncher: "Xem chính sách quyền riêng tư" },
                    { name: "Mô hình giá & Chi phí", desc: "Mức giá hợp lý và bền vững", keyLauncherMain: "Bản miễn phí đầy đủ", keyLauncherSub: "Tùy chọn trọn đời giá rẻ", niagara: "Thuê bao theo năm", minimalistPhone: "Thuê bao đắt đỏ ($20+/năm)", olauncher: "Miễn phí / Ủng hộ" }
                ]
            },
            uiDetails: {
                apkSubtext: 'Tải APK trực tiếp',
                apkTitle: 'Tải file APK',
                featuredOn: 'Nổi bật trên',
                listedOn: 'Có mặt trên',
                comparisonSubtitle: 'So sánh tất cả tính năng song song'
            }
        },
        es: {
            meta: ["Key Launcher — Lanzador T9 y QWERTY para Android", "Busca apps con T9 o QWERTY, prueba Swipe Typing (Beta) y concéntrate con un reloj Pomodoro. Funciones básicas gratis, sin anuncios y Pro opcional."],
            navigation: ['Funciones', 'Prensa', 'Precios', 'Reseñas', 'Preguntas', 'Ayuda', 'Descargar gratis'],
            hero: ["Key Launcher 2.0", "Todo empieza", "con una tecla.", "Abre apps con T9 o QWERTY, prueba Swipe Typing (Beta) y deja espacio para concentrarte. Personaliza tu pantalla de inicio, organiza espacios privados y convierte el móvil en un reloj Pomodoro de escritorio.", "100+ reseñas", "Búsqueda T9 y QWERTY", "Swipe Typing (Beta)", "Funciones básicas gratis · Sin anuncios"],
            sections: {media: ['Prensa y reseñas', 'Descubre qué opinan periodistas tecnológicos y creadores sobre el enfoque minimalista de Key Launcher.', 'Ver la reseña completa'], features: ['Diseñado para la velocidad. Optimizado para concentrarte.', 'Reduce la dependencia del móvil y simplifica tu rutina con funciones prácticas y sin distracciones.'], focus: ['Súper concentración', 'Silencia las distracciones. <br class="hidden sm:inline">Apaga el ruido.', 'Convierte tu dispositivo en un compañero de escritorio minimalista. Silencia las notificaciones y accede a música, calendario, Pomodoro, fotos y un juego sin conexión.'], pricing: ['Precios transparentes', 'Úsalo gratis. <br class="sm:hidden">Mejora a PRO.', 'Las funciones esenciales son gratis y sin anuncios para siempre. Mejora a PRO con una suscripción anual o una compra de por vida.'], testimonials: ['Opiniones de usuarios', 'Usuarios reales. <br class="sm:hidden">Reseñas reales.'], faq: ['Preguntas comunes', 'Preguntas frecuentes', 'Encuentra respuestas a las preguntas más habituales sobre Key Launcher.'], cta: ['¿Listo para sentir la velocidad T9?', 'Descarga Key Launcher en Android para simplificar tus tareas, ser más productivo y recuperar tiempo de pantalla.', 'Gratis en Play Store']},
            features: [['Búsqueda T9 ultrarrápida', "Encuentra apps con unas pocas pulsaciones."], ['Llamada instantánea', 'Llama, envía mensajes o busca al instante.'], ['Letras sincronizadas', 'Disfruta de la música en tu pantalla de inicio.'], ['Centro de widgets', 'Tus widgets favoritos en un solo lugar.'], ['Calendario y agenda', 'Tu agenda siempre a mano.'], ['Temporizador Pomodoro', 'Modo de trabajo profundo integrado.'], ['Bóveda privada', "Espacios privados separados, cada uno con su propio código."], ['Material You y tipografía', 'Temas que se sienten realmente tuyos.']],
            focusBullets: [['Silencio en 1 toque', 'Silencia al instante las alertas que te distraen.'], ['Reproductor de música', 'Relájate con letras sincronizadas en pantalla.'], ['Calendario y agenda', 'Consulta tu agenda de un vistazo.'], ['Temporizador Pomodoro', 'Mantén la concentración con intervalos integrados.'], ['Presentación de álbum', 'Recorre tus recuerdos favoritos mientras trabajas.'], ['Juego T-Rex', 'Un clásico sin conexión para descansos cortos.']],
            pricing: ['Plan gratuito', 'Gratis', '/ de por vida', 'Ideal para quien busca una interfaz limpia y rápida.', 'Descargar gratis', 'Plan PRO', 'Adapta cada detalle de tu pantalla a tu estilo.', 'Mejorar en la app', 'Suscripción de 1 año', 'Compra de por vida', 'Precios para', 'Los precios finales se muestran en la app.', 'Ver en la app', 'Recomendado'],
            pricingDetails: {
                planFeatures: [
                    ["Búsqueda T9 y QWERTY con Swipe Typing (Beta)", "8 elementos fijados, 3 widgets por Widget Center y 2 en Stack", "3 Super Shortcuts", "1 elemento privado y 1 límite de uso de app", "Prueba de Pro; consulta las condiciones en la app", "Puntos de notificación, Quick Actions y gestos de inicio"],
                    ["Elementos fijados y widgets de Widget Center ilimitados; hasta 4 en Stack", "Todas las teclas de Super Shortcut y páginas de inicio ilimitadas", "Múltiples bóvedas, elementos privados y límites de apps ilimitados", "Modo Focus, letras sincronizadas y paquetes de iconos", "Teclado Glass, Neon Glow, Ripple y transiciones 3D", "Fuentes, calculadora, fondos automáticos y copia / restauración"]
                ],
                categoryNames: ['Básico', 'Teclado', 'Centro de widgets', 'Vistazo rápido', 'Súper Atajos y Teclas rápidas', 'Bóveda privada', 'Modo concentración', 'Música', 'Apariencia', 'Uso de aplicaciones', 'Feed de noticias', 'Ajustes y datos', 'Huevo de pascua'],
                featureNames: [
                    ["Búsqueda inteligente T9", "Elementos fijados", "Gestos de deslizamiento", "Búsqueda de contactos", "Ocultar apps y contactos", "Doble toque para bloquear", "Páginas de apps", "Búsqueda QWERTY", "Swipe Typing (Beta)"],
                    ["Modo calculadora", "Alternar timbre", "Paletas de color del teclado", "Teclado Glass", "Neon Glow y Ripple", "Transiciones 3D de inicio"],
                    ["Cantidad de widgets", "Fondo de pantalla personalizado", "Widget Stack (inicio / notificaciones)"],
                    ["Widget de reloj", "Widget de calendario", "Widget del tiempo"],
                    ["Súper Atajos"],
                    ["Bóveda privada", "Bóvedas privadas adicionales"],
                    ["Modo concentración", "Pantalla siempre encendida"],
                    ["Controles de música", "Letras sincronizadas"],
                    ["Opciones de fondo de pantalla", "Cambio automático de fondo", "Soporte para paquetes de iconos", "Fuentes personalizadas", "Personalización de iconos", "Puntos de notificación", "Superposición de fondo"],
                    ["Seguimiento de uso de apps"],
                    ["Fuentes de noticias RSS"],
                    ["Copia de seguridad y restauración"],
                    ["Juego T-Rex"]
                ],
                values: { "8 items": "8 elementos", Unlimited: "Ilimitado", "2 pages": "2 páginas", "3 widgets": "3 widgets", "3 slots": "3 ranuras", "1 item": "1 elemento", "1 app": "1 app", "3 sources": "3 fuentes", "In-app trial": "Prueba en la app", "2 widgets": "2 widgets", "4 widgets": "4 widgets", "All keys": "Todas las teclas", "10 apps; unlimited contacts": "10 apps; contactos ilimitados" },
                labels: ['Comparativa detallada de funciones', 'Función', 'Gratis', 'Mostrar todas las funciones', 'Mostrar menos', 'Consulta los precios PRO para tu región en la app.'],
                regional: ['Los precios se muestran en USD. Google Play cobrará el precio establecido para el país de tu cuenta.', 'Un {pct}% por debajo del precio global, ajustado al poder adquisitivo local.', 'Sin descuentos, nunca. Los precios solo suben: compra antes, paga menos. Las compras de por vida nunca se vuelven a cobrar.']
            },
            faq: [['¿Qué es un lanzador T9?', "Un lanzador T9 utiliza un teclado 3×4 para filtrar apps según las letras de cada tecla numérica. Introduce unos dígitos y elige la app. Key Launcher también ofrece búsqueda QWERTY y Swipe Typing (Beta)."], ['¿Key Launcher es seguro y privado?', "La búsqueda de apps y contactos se procesa en el dispositivo; el contenido de las bóvedas privadas se guarda localmente. Las sugerencias web, el tiempo y las letras usan servicios de red. La app también utiliza servicios de analítica, informes de fallos y compras. Consulta la Política de privacidad."], ['¿Admite paquetes de iconos y fondos personalizados?', 'Sí. Admite iconos, colores del sistema, tipografías y cambios automáticos de fondo. Algunas opciones avanzadas requieren PRO.'], ['¿Consumirá más batería?', "El consumo depende de la configuración. El reloj Focus siempre encendido, los widgets activos y las actualizaciones del tiempo pueden aumentar el consumo. Ajusta estas funciones en Configuración."], ['¿Qué integraciones de llamadas y mensajes admite?', 'Puedes llamar, enviar SMS o abrir WhatsApp, Zalo y Viber directamente al escribir un contacto o número.'], ['¿Puedo probar PRO antes de comprar?', "Sí. Puedes probar las funciones Pro antes de comprar. Consulta la duración y las condiciones en la app; las instalaciones anteriores pueden conservar condiciones previas. Pro está disponible con suscripción anual o compra de por vida."]],
            footer: ['UN PRODUCTO DE LOUSIFY TECH', '© 2026 Lousify Tech. Todos los derechos reservados.', 'Política de privacidad', 'Términos del servicio', 'Ayuda'],
            ui: ['en Google Play', 'Captura anterior', 'Captura siguiente', 'Cambiar tema', 'Cambiar idioma', 'Traducido', 'Funciones y ventajas', 'Desplázate para explorar'],
            compareNav: 'Comparar',
            mediaBadge: 'Prensa y reseñas',
            compare: {
                badgeText: 'Comparativa directa',
                title: '¿Por qué elegir Key Launcher?',
                subtitle: 'Compara Key Launcher con otros lanzadores minimalistas populares de Android y descubre por qué miles de usuarios se han cambiado.',
                featureHeader: 'Función',
                topBadge: 'Top',
                mobileLabel: 'Comparar con:',
                mobileHint: 'Toca para cambiar',
                allTab: 'Todos',
                scrollHint: 'Desliza horizontalmente para ver todas las columnas',
                rows: [
                    { name: "Búsqueda T9 rápida", desc: "Encuentra apps con unas pocas pulsaciones.", keyLauncher: "Sí (Instantáneo)", niagara: "❌ Desplazamiento alfabético", minimalistPhone: "❌ Lista de texto", olauncher: "❌ Búsqueda de texto" },
                    { name: "QWERTY y escritura por deslizamiento", desc: "Búsqueda QWERTY + Swipe Typing (Beta)", keyLauncher: "Sí (Ambos)", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Múltiples bóvedas privadas", desc: "Cada bóveda tiene su propio código", keyLauncher: "Múltiples bóvedas con Pro", niagara: "Solo ocultar apps", minimalistPhone: "Solo bloqueador de apps", olauncher: "Solo ocultar apps" },
                    { name: "Súper concentración y letras de música", desc: "Pomodoro, reloj de escritorio y letras sincronizadas", keyLauncher: "Integrado", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Búsqueda y privacidad", desc: "Búsqueda local de apps y contactos; servicios online declarados", keyLauncher: "Búsqueda local + funciones online", niagara: "Consultar política de privacidad", minimalistPhone: "Consultar política de privacidad", olauncher: "Consultar política de privacidad" },
                    { name: "Modelo de precios", desc: "Precios justos y sostenibles", keyLauncherMain: "Esencial gratis", keyLauncherSub: "Opción de por vida asequible", niagara: "Suscripción anual", minimalistPhone: "Suscripción cara ($20+/año)", olauncher: "Gratis / Donación" }
                ]
            },
            uiDetails: {
                apkSubtext: 'Descarga APK directa',
                apkTitle: 'Descargar archivo APK',
                featuredOn: 'Destacado en',
                listedOn: 'Disponible en',
                comparisonSubtitle: 'Compara todas las funciones lado a lado'
            }
        },
        'pt-BR': {
            meta: ["Key Launcher — Launcher T9 e QWERTY para Android", "Busque apps com T9 ou QWERTY, experimente Swipe Typing (Beta) e foque com um relógio Pomodoro. Recursos básicos grátis, sem anúncios e Pro opcional."],
            navigation: ['Recursos', 'Imprensa', 'Preços', 'Avaliações', 'Dúvidas', 'Ajuda', 'Baixar grátis'],
            hero: ["Key Launcher 2.0", "Tudo começa", "com uma tecla.", "Abra apps com T9 ou QWERTY, experimente Swipe Typing (Beta) e dê espaço ao foco. Personalize a tela inicial, organize espaços privados e transforme o celular em um relógio Pomodoro de mesa.", "100+ avaliações", "Busca T9 e QWERTY", "Swipe Typing (Beta)", "Recursos básicos grátis · Sem anúncios"],
            sections: {media: ['Na imprensa e avaliações', 'Veja o que jornalistas de tecnologia e criadores dizem sobre a abordagem minimalista do Key Launcher.', 'Assista à avaliação completa'], features: ['Feito para velocidade. Otimizado para foco.', 'Reduza a dependência do celular e simplifique sua rotina com recursos práticos e sem distrações.'], focus: ['Super Foco', 'Silencie as distrações. <br class="hidden sm:inline">Corte o ruído.', 'Transforme seu aparelho em um companheiro de mesa minimalista. Silencie notificações e acesse música, agenda, Pomodoro, fotos e um jogo offline.'], pricing: ['Preços transparentes', 'Use grátis. <br class="sm:hidden">Atualize para PRO.', 'Os recursos essenciais são grátis e sem anúncios para sempre. Assine anualmente ou compre o PRO uma única vez.'], testimonials: ['Opiniões de usuários', 'Usuários reais. <br class="sm:hidden">Avaliações reais.'], faq: ['Dúvidas comuns', 'Perguntas frequentes', 'Encontre respostas para as perguntas mais comuns sobre o Key Launcher.'], cta: ['Pronto para sentir a velocidade do T9?', 'Baixe o Key Launcher no Android para simplificar tarefas, aumentar a produtividade e recuperar seu tempo de tela.', 'Grátis na Play Store']},
            features: [['Busca T9 ultrarrápida', "Encontre apps com poucas teclas."], ['Chamada instantânea', 'Ligue, envie mensagens ou pesquise na hora.'], ['Letras sincronizadas', 'Curta música na tela inicial.'], ['Central de widgets', 'Seus widgets favoritos em um só lugar.'], ['Calendário e agenda', 'Sua agenda sempre à mão.'], ['Timer Pomodoro', 'Modo de trabalho profundo integrado.'], ['Cofre privado', "Espaços privados separados, cada um com sua própria senha."], ['Material You e tipografia', 'Temas com a sua cara.']],
            focusBullets: [['Silêncio em 1 toque', 'Silencie alertas de apps que distraem.'], ['Player de música', 'Relaxe com letras sincronizadas na tela.'], ['Calendário e agenda', 'Confira seus compromissos rapidamente.'], ['Timer Pomodoro', 'Mantenha o foco com intervalos integrados.'], ['Apresentação de fotos', 'Reveja memórias enquanto trabalha.'], ['Jogo T-Rex', 'Um clássico offline para pausas rápidas.']],
            pricing: ['Plano grátis', 'Grátis', '/ para sempre', 'Ideal para quem busca uma interface limpa e rápida.', 'Baixar grátis', 'Plano PRO', 'Personalize cada detalhe da tela ao seu estilo.', 'Atualizar no app', 'Assinatura de 1 ano', 'Compra vitalícia', 'Preços para', 'Os preços finais são exibidos no app.', 'Ver no app', 'Recomendado'],
            pricingDetails: {
                planFeatures: [
                    ["Busca T9 e QWERTY com Swipe Typing (Beta)", "8 itens fixados, 3 widgets por Widget Center e 2 no Stack", "3 Super Shortcuts", "1 item no cofre privado e 1 limite de app", "Teste do Pro; confira as condições no app", "Pontos de notificação, Quick Actions e gestos na tela inicial"],
                    ["Itens fixados e widgets no Widget Center ilimitados; até 4 no Stack", "Todas as teclas de Super Shortcut e páginas iniciais ilimitadas", "Múltiplos cofres, itens privados e limites de apps ilimitados", "Modo Focus, letras sincronizadas e pacotes de ícones", "Teclado Glass, Neon Glow, Ripple e transições 3D", "Fontes, calculadora, papéis de parede automáticos e backup / restauração"]
                ],
                categoryNames: ['Principal', 'Teclado', 'Central de widgets', 'Visão rápida', 'Super Atalhos e Teclas rápidas', 'Cofre privado', 'Modo foco', 'Música', 'Aparência', 'Uso de aplicativos', 'Feed de notícias', 'Configurações e dados', 'Easter egg'],
                featureNames: [
                    ["Busca inteligente T9", "Itens fixados", "Gestos de deslizamento", "Busca de contatos", "Ocultar apps e contatos", "Toque duplo para bloquear", "Páginas de apps", "Busca QWERTY", "Swipe Typing (Beta)"],
                    ["Modo calculadora", "Alternar toque", "Predefinições de cor do teclado", "Teclado Glass", "Neon Glow e Ripple", "Transições 3D da tela inicial"],
                    ["Quantidade de widgets", "Papel de parede personalizado", "Widget Stack (início / notificações)"],
                    ["Widget de relógio", "Widget de calendário", "Widget de clima"],
                    ["Super Atalhos"],
                    ["Cofre privado", "Cofres privados adicionais"],
                    ["Modo foco", "Tela sempre ativa"],
                    ["Controles de música", "Letras sincronizadas"],
                    ["Opções de papel de parede", "Troca automática de papel de parede", "Suporte a pacotes de ícones", "Fontes personalizadas", "Personalização de ícones", "Pontos de notificação", "Sobreposição de papel de parede"],
                    ["Monitoramento de uso de apps"],
                    ["Fontes de feed RSS"],
                    ["Backup e restauração"],
                    ["Jogo T-Rex"]
                ],
                values: { "8 items": "8 itens", Unlimited: "Ilimitado", "2 pages": "2 páginas", "3 widgets": "3 widgets", "3 slots": "3 slots", "1 item": "1 item", "1 app": "1 app", "3 sources": "3 fontes", "In-app trial": "Teste no app", "2 widgets": "2 widgets", "4 widgets": "4 widgets", "All keys": "Todas as teclas", "10 apps; unlimited contacts": "10 apps; contatos ilimitados" },
                labels: ['Comparação detalhada de recursos', 'Recurso', 'Grátis', 'Mostrar todos os recursos', 'Mostrar menos', 'Veja os preços do PRO para a sua região no app.'],
                regional: ['Preços exibidos em USD. O Google Play cobrará o preço definido para o país da sua conta.', '{pct}% abaixo do preço global, ajustado ao poder de compra local.', 'Sem promoções, nunca. Os preços apenas aumentam — compre mais cedo, pague menos. As compras vitalícias nunca têm o valor alterado.']
            },
            faq: [['O que é um launcher T9?', "Um launcher T9 usa um teclado 3×4 para filtrar apps pelas letras de cada tecla numérica. Digite alguns números e escolha o app. O Key Launcher também oferece busca QWERTY e Swipe Typing (Beta)."], ['O Key Launcher é seguro e privado?', "A busca de apps e contatos é processada no dispositivo; o conteúdo dos cofres privados fica armazenado localmente. Sugestões da web, clima e letras usam serviços de rede. O app também usa serviços de análise, relatórios de falhas e compras. Consulte a Política de Privacidade."], ['Aceita pacotes de ícones e papéis de parede?', 'Sim. Há suporte a ícones, cores do sistema, fontes e troca automática de papel de parede. Algumas opções avançadas exigem PRO.'], ['O Key Launcher consome bateria?', "O consumo depende da configuração. O relógio Focus sempre ligado, widgets ativos e atualizações do clima podem aumentar o consumo. Ajuste esses recursos nas Configurações."], ['Quais integrações de chamadas e mensagens são aceitas?', 'Você pode ligar, enviar SMS ou abrir WhatsApp, Zalo e Viber digitando um contato ou número.'], ['Posso testar o PRO antes de comprar?', "Sim. Você pode testar os recursos Pro antes de comprar. Confira a duração e as condições no app; instalações anteriores podem manter condições antigas. O Pro oferece assinatura anual ou compra vitalícia."]],
            footer: ['UM PRODUTO LOUSIFY TECH', '© 2026 Lousify Tech. Todos os direitos reservados.', 'Política de privacidade', 'Termos de serviço', 'Ajuda'],
            ui: ['no Google Play', 'Imagem anterior', 'Próxima imagem', 'Alternar tema', 'Mudar idioma', 'Traduzido', 'Recursos e benefícios', 'Role para explorar'],
            compareNav: 'Comparar',
            mediaBadge: 'Cobertura da imprensa',
            compare: {
                badgeText: 'Comparativo lado a lado',
                title: 'Por que mudar para o Key Launcher?',
                subtitle: 'Compare o Key Launcher com outros launchers minimalistas populares e veja por que milhares de usuários fizeram a transição.',
                featureHeader: 'Recurso',
                topBadge: 'Top',
                mobileLabel: 'Comparar com:',
                mobileHint: 'Toque para alternar',
                allTab: 'Todos',
                scrollHint: 'Deslize para ver todas as colunas',
                rows: [
                    { name: "Busca T9 rápida", desc: "Encontre apps com poucas teclas.", keyLauncher: "Sim (Instantâneo)", niagara: "❌ Rolagem alfabética", minimalistPhone: "❌ Lista de texto", olauncher: "❌ Busca por texto" },
                    { name: "QWERTY e digitação por gesto", desc: "Busca QWERTY + Swipe Typing (Beta)", keyLauncher: "Sim (Ambos)", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Múltiplos cofres privados", desc: "Cada cofre tem sua própria senha", keyLauncher: "Múltiplos cofres com Pro", niagara: "Apenas ocultar apps", minimalistPhone: "Apenas bloqueador de apps", olauncher: "Apenas ocultar apps" },
                    { name: "Super Foco e letras de música", desc: "Pomodoro integrado, relógio de mesa e letras", keyLauncher: "Integrado", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Busca e privacidade", desc: "Busca local de apps e contatos; serviços online informados", keyLauncher: "Busca local + recursos online", niagara: "Consulte a política de privacidade", minimalistPhone: "Consulte a política de privacidade", olauncher: "Consulte a política de privacidade" },
                    { name: "Modelo de preços", desc: "Preços justos e sustentáveis", keyLauncherMain: "Gratuito essencial", keyLauncherSub: "Opção vitalícia acessível", niagara: "Assinatura anual", minimalistPhone: "Assinatura cara ($20+/ano)", olauncher: "Grátis / Doação" }
                ]
            },
            uiDetails: {
                apkSubtext: 'Download direto de APK',
                apkTitle: 'Baixar arquivo APK',
                featuredOn: 'Destaque no',
                listedOn: 'Disponível no',
                comparisonSubtitle: 'Compare todos os recursos lado a lado'
            }
        },
        id: {
            meta: ["Key Launcher — Launcher Fokus T9 & QWERTY untuk Android", "Cari aplikasi dengan T9 atau QWERTY, coba Swipe Typing (Beta), dan fokus dengan jam Pomodoro. Fitur inti gratis, tanpa iklan, dengan Pro opsional."],
            navigation: ['Fitur', 'Media', 'Harga', 'Ulasan', 'Tanya jawab', 'Bantuan', 'Unduh gratis'],
            hero: ["Key Launcher 2.0", "Semua berawal", "dari satu tombol.", "Buka aplikasi dengan T9 atau QWERTY, coba Swipe Typing (Beta), dan beri ruang untuk fokus. Sesuaikan layar utama, atur ruang pribadi, dan ubah ponsel menjadi jam meja Pomodoro.", "100+ ulasan", "Pencarian T9 & QWERTY", "Swipe Typing (Beta)", "Fitur inti gratis · Tanpa iklan"],
            sections: {media: ['Liputan & Ulasan', 'Lihat pendapat jurnalis teknologi dan kreator tentang pendekatan minimalis Key Launcher.', 'Tonton ulasan lengkap'], features: ['Dirancang untuk cepat. Dioptimalkan untuk fokus.', 'Kurangi ketergantungan pada ponsel dan sederhanakan rutinitas dengan fitur praktis tanpa gangguan.'], focus: ['Fokus Super', 'Bisukan gangguan. <br class="hidden sm:inline">Redam kebisingan.', 'Ubah perangkat menjadi pendamping meja minimalis. Bisukan notifikasi dan akses musik, kalender, Pomodoro, foto, serta gim offline.'], pricing: ['Harga transparan', 'Gunakan gratis. <br class="sm:hidden">Tingkatkan ke PRO.', 'Fitur inti gratis dan bebas iklan selamanya. Tingkatkan ke PRO dengan langganan tahunan atau pembelian seumur hidup.'], testimonials: ['Masukan pengguna', 'Pengguna nyata. <br class="sm:hidden">Ulasan nyata.'], faq: ['Pertanyaan umum', 'Tanya Jawab', 'Temukan jawaban atas pertanyaan paling umum tentang Key Launcher.'], cta: ['Siap merasakan kecepatan T9?', 'Unduh Key Launcher di Android untuk menyederhanakan tugas, meningkatkan produktivitas, dan mengambil kembali waktu layar.', 'Gratis di Play Store']},
            features: [['Pencarian T9 super cepat', "Temukan aplikasi dengan beberapa ketukan tombol."], ['Panggilan instan', 'Telepon, kirim pesan, atau cari seketika.'], ['Lirik tersinkron', 'Nikmati musik di layar utama.'], ['Pusat widget', 'Widget favorit dalam satu tempat.'], ['Kalender & agenda', 'Agenda selalu dalam genggaman.'], ['Timer Pomodoro', 'Mode kerja mendalam bawaan.'], ['Brankas pribadi', "Ruang pribadi terpisah dengan kode sandi masing-masing."], ['Material You & tipografi', 'Tema yang benar-benar terasa milik Anda.']],
            focusBullets: [['Hening 1 ketukan', 'Bisukan peringatan aplikasi yang mengganggu.'], ['Pemutar musik', 'Nikmati lirik tersinkron di layar.'], ['Kalender & agenda', 'Lihat agenda dengan cepat.'], ['Timer Pomodoro', 'Jaga fokus dengan interval bawaan.'], ['Tayangan album', 'Nikmati kenangan saat bekerja.'], ['Gim T-Rex', 'Gim offline klasik untuk rehat singkat.']],
            pricing: ['Paket Gratis', 'Gratis', '/ selamanya', 'Cocok untuk antarmuka yang bersih dan cepat.', 'Unduh gratis', 'Paket PRO', 'Sesuaikan setiap bagian layar dengan gaya Anda.', 'Tingkatkan di aplikasi', 'Langganan 1 tahun', 'Pembelian seumur hidup', 'Harga untuk', 'Harga akhir ditampilkan di aplikasi.', 'Lihat di aplikasi', 'Direkomendasikan'],
            pricingDetails: {
                planFeatures: [
                    ["Pencarian T9 & QWERTY dengan Swipe Typing (Beta)", "8 item disematkan, 3 widget per Widget Center & 2 di Stack", "3 Super Shortcut", "1 item di brankas pribadi & 1 batas penggunaan aplikasi", "Uji coba Pro; lihat ketentuan di aplikasi", "Titik notifikasi, Quick Actions & gestur layar utama"],
                    ["Item sematan & widget Widget Center tak terbatas; hingga 4 di Stack", "Semua tombol Super Shortcut & halaman utama tak terbatas", "Banyak brankas, item pribadi & batas aplikasi tak terbatas", "Mode Focus, lirik tersinkron & paket ikon", "Keyboard Glass, Neon Glow, Ripple & transisi 3D", "Font, kalkulator, wallpaper otomatis & cadangkan / pulihkan"]
                ],
                categoryNames: ['Inti', 'Keyboard', 'Pusat Widget', 'Sekilas Pandang', 'Pintasan Super & Tombol Cepat', 'Brankas Pribadi', 'Mode Fokus', 'Musik', 'Tampilan', 'Penggunaan Aplikasi', 'Umpan Penemuan', 'Pengaturan & Data', 'Easter Egg'],
                featureNames: [
                    ["Pencarian Cerdas T9", "Item Tersemat", "Gestur Geser", "Pencarian Kontak", "Sembunyikan Aplikasi & Kontak", "Ketuk Dua Kali untuk Mengunci", "Halaman Aplikasi", "Pencarian QWERTY", "Swipe Typing (Beta)"],
                    ["Mode Kalkulator", "Alihkan Nada Dering", "Preset Warna Keyboard", "Keyboard Glass", "Neon Glow & Ripple", "Transisi layar utama 3D"],
                    ["Jumlah Widget", "Wallpaper Khusus", "Widget Stack (Home / Pusat Notifikasi)"],
                    ["Widget Jam", "Widget Kalender", "Widget Cuaca"],
                    ["Pintasan Super"],
                    ["Brankas Pribadi", "Brankas pribadi tambahan"],
                    ["Mode Fokus", "Layar Selalu Aktif"],
                    ["Kontrol Musik", "Lirik Tersinkron"],
                    ["Pilihan Wallpaper", "Ganti Wallpaper Otomatis", "Dukungan Paket Ikon", "Font Khusus", "Kustomisasi Ikon", "Titik Notifikasi", "Lapisan Wallpaper"],
                    ["Pelacakan Penggunaan Aplikasi"],
                    ["Sumber Umpan RSS"],
                    ["Cadangkan & Pulihkan"],
                    ["Gim T-Rex"]
                ],
                values: { "8 items": "8 item", Unlimited: "Tak Terbatas", "2 pages": "2 halaman", "3 widgets": "3 widget", "3 slots": "3 slot", "1 item": "1 item", "1 app": "1 aplikasi", "3 sources": "3 sumber", "In-app trial": "Uji coba di aplikasi", "2 widgets": "2 widget", "4 widgets": "4 widget", "All keys": "Semua tombol", "10 apps; unlimited contacts": "10 aplikasi; kontak tak terbatas" },
                labels: ['Perbandingan Fitur Terperinci', 'Fitur', 'Gratis', 'Tampilkan Semua Fitur', 'Tampilkan Lebih Sedikit', 'Lihat harga PRO lokal Anda di dalam aplikasi.'],
                regional: ['Harga ditampilkan dalam USD. Google Play menagih harga yang ditetapkan untuk negara akun Anda.', '{pct}% lebih murah dari harga global, disesuaikan dengan daya beli lokal.', 'Tidak pernah ada diskon. Harga hanya naik — beli lebih awal, bayar lebih murah. Pembelian seumur hidup tidak pernah berubah harga.']
            },
            faq: [['Apa itu peluncur aplikasi T9?', "Launcher T9 memakai keypad 3×4 untuk menyaring aplikasi berdasarkan huruf pada tiap tombol angka. Masukkan beberapa angka, lalu pilih aplikasi. Key Launcher juga menyediakan pencarian QWERTY dan Swipe Typing (Beta)."], ['Apakah Key Launcher aman dan privat?', "Pencarian aplikasi dan kontak diproses di perangkat; isi brankas pribadi disimpan secara lokal. Saran web, cuaca, dan lirik memakai layanan jaringan. Aplikasi juga memakai layanan analitik, laporan error, dan pembelian. Lihat Kebijakan Privasi untuk detailnya."], ['Apakah mendukung paket ikon dan wallpaper?', 'Ya. Tersedia ikon, warna sistem, tipografi, dan wallpaper otomatis. Beberapa kustomisasi lanjutan memerlukan PRO.'], ['Apakah Key Launcher menguras baterai?', "Pemakaian baterai bergantung pada pengaturan. Jam Focus yang selalu menyala, widget aktif, dan pembaruan cuaca dapat meningkatkan konsumsi daya. Sesuaikan fitur tersebut di Pengaturan."], ['Integrasi panggilan dan pesan apa yang didukung?', 'Anda dapat menelepon, mengirim SMS, atau membuka WhatsApp, Zalo, dan Viber dengan mengetik kontak atau nomor.'], ['Bisakah saya mencoba PRO sebelum membeli?', "Ya. Anda dapat mencoba fitur Pro sebelum membeli. Lihat durasi dan ketentuan uji coba di aplikasi; instalasi lama dapat mempertahankan ketentuan sebelumnya. Pro tersedia sebagai langganan tahunan atau pembelian seumur hidup."]],
            footer: ['PRODUK DARI LOUSIFY TECH', '© 2026 Lousify Tech. Hak cipta dilindungi.', 'Kebijakan privasi', 'Ketentuan layanan', 'Bantuan'],
            ui: ['di Google Play', 'Gambar sebelumnya', 'Gambar berikutnya', 'Ganti tema', 'Ganti bahasa', 'Diterjemahkan', 'Fitur dan manfaat', 'Gulir untuk menjelajah'],
            compareNav: 'Bandingkan',
            mediaBadge: 'Liputan Media',
            compare: {
                badgeText: 'Perbandingan Berdampingan',
                title: 'Mengapa Beralih ke Key Launcher?',
                subtitle: 'Bandingkan Key Launcher dengan peluncur minimalis populer lainnya dan temukan alasan ribuan pengguna beralih.',
                featureHeader: 'Fitur',
                topBadge: 'Teratas',
                mobileLabel: 'Bandingkan dengan:',
                mobileHint: 'Ketuk untuk beralih',
                allTab: 'Semua',
                scrollHint: 'Geser horizontal untuk melihat semua kolom',
                rows: [
                    { name: "Pencarian T9 Cepat", desc: "Temukan aplikasi dengan beberapa ketukan tombol.", keyLauncher: "Ya (Instan)", niagara: "❌ Gulir alfabet", minimalistPhone: "❌ Daftar teks", olauncher: "❌ Pencarian teks" },
                    { name: "QWERTY & Ketik Geser (Swipe)", desc: "Pencarian QWERTY + Swipe Typing (Beta)", keyLauncher: "Ya (Keduanya)", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Banyak Brankas Pribadi", desc: "Setiap brankas memiliki kode sandi sendiri", keyLauncher: "Banyak brankas dengan Pro", niagara: "Hanya sembunyikan app", minimalistPhone: "Hanya pemblokir app", olauncher: "Hanya sembunyikan app" },
                    { name: "Fokus Super & Lirik Musik", desc: "Pomodoro bawaan, jam meja & lirik tersinkron", keyLauncher: "Bawaan", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Pencarian & privasi", desc: "Pencarian aplikasi dan kontak di perangkat; layanan online dijelaskan", keyLauncher: "Pencarian lokal + fitur online", niagara: "Lihat kebijakan privasi", minimalistPhone: "Lihat kebijakan privasi", olauncher: "Lihat kebijakan privasi" },
                    { name: "Model Harga", desc: "Harga adil dan berkelanjutan", keyLauncherMain: "Fitur Inti Gratis", keyLauncherSub: "Opsi Seumur Hidup Terjangkau", niagara: "Langganan Tahunan", minimalistPhone: "Langganan Mahal ($20+/thn)", olauncher: "Gratis / Donasi" }
                ]
            },
            uiDetails: {
                apkSubtext: 'Unduh APK langsung',
                apkTitle: 'Unduh file APK',
                featuredOn: 'Disorot di',
                listedOn: 'Terdaftar di',
                comparisonSubtitle: 'Bandingkan semua fitur berdampingan'
            }
        },
        fr: {
            meta: ["Key Launcher — Lanceur T9 et QWERTY pour Android", "Trouvez vos apps avec T9 ou QWERTY, essayez Swipe Typing (Beta) et concentrez-vous avec Pomodoro. Fonctions de base gratuites, sans publicité, Pro en option."],
            navigation: ['Fonctions', 'Presse', 'Tarifs', 'Avis', 'FAQ', 'Aide', 'Télécharger'],
            hero: ["Key Launcher 2.0", "Tout commence", "par une touche.", "Ouvrez vos apps avec T9 ou QWERTY, essayez Swipe Typing (Beta) et faites place à la concentration. Personnalisez votre accueil, organisez vos espaces privés et transformez votre téléphone en horloge Pomodoro de bureau.", "100+ avis", "Recherche T9 et QWERTY", "Swipe Typing (Beta)", "Fonctions de base gratuites · Sans publicité"],
            sections: {media: ['Presse et avis', 'Découvrez ce que les journalistes tech et les créateurs pensent de l’approche minimaliste de Key Launcher.', 'Voir l’avis complet'], features: ['Pensé pour la vitesse. Optimisé pour la concentration.', 'Réduisez votre dépendance au téléphone et simplifiez votre quotidien avec des fonctions pratiques et sans distraction.'], focus: ['Super Focus', 'Coupez les distractions. <br class="hidden sm:inline">Faites taire le bruit.', 'Transformez votre appareil en compagnon de bureau minimaliste. Coupez les notifications et accédez à la musique, au calendrier, au Pomodoro, aux photos et à un jeu hors ligne.'], pricing: ['Tarifs transparents', 'Utilisez-le gratuitement. <br class="sm:hidden">Passez à PRO.', 'Les fonctions essentielles restent gratuites et sans publicité. Passez à PRO avec un abonnement annuel ou un achat à vie.'], testimonials: ['Avis des utilisateurs', 'De vrais utilisateurs. <br class="sm:hidden">De vrais avis.'], faq: ['Questions courantes', 'Questions fréquentes', 'Trouvez les réponses aux questions les plus fréquentes sur Key Launcher.'], cta: ['Prêt à découvrir la vitesse du T9 ?', 'Téléchargez Key Launcher sur Android pour simplifier vos tâches, gagner en productivité et reprendre le contrôle de votre temps d’écran.', 'Gratuit sur le Play Store']},
            features: [['Recherche T9 ultra-rapide', "Trouvez vos apps en quelques touches."], ['Appel instantané', 'Appelez, envoyez un message ou cherchez immédiatement.'], ['Paroles synchronisées', 'Profitez de la musique sur l’écran d’accueil.'], ['Centre de widgets', 'Tous vos widgets préférés au même endroit.'], ['Calendrier et agenda', 'Votre agenda à portée de main.'], ['Minuteur Pomodoro', 'Mode de travail profond intégré.'], ['Coffre privé', "Des espaces privés distincts, chacun avec son propre code."], ['Material You et typographie', 'Des thèmes qui vous ressemblent.']],
            focusBullets: [['Silence en 1 geste', 'Coupez les alertes des applications distrayantes.'], ['Lecteur de musique', 'Profitez des paroles synchronisées à l’écran.'], ['Calendrier et agenda', 'Consultez votre agenda d’un coup d’œil.'], ['Minuteur Pomodoro', 'Restez concentré grâce aux intervalles intégrés.'], ['Diaporama album', 'Revivez vos souvenirs pendant que vous travaillez.'], ['Jeu T-Rex', 'Un classique hors ligne pour les petites pauses.']],
            pricing: ['Offre gratuite', 'Gratuit', '/ à vie', 'Idéal pour une interface épurée et rapide.', 'Télécharger', 'Offre PRO', 'Adaptez chaque détail de votre écran à votre style.', 'Passer à PRO', 'Abonnement 1 an', 'Achat à vie', 'Tarifs pour', 'Les prix définitifs sont affichés dans l’application.', 'Voir dans l’application', 'Recommandé'],
            pricingDetails: {
                planFeatures: [
                    ["Recherche T9 et QWERTY avec Swipe Typing (Beta)", "8 éléments épinglés, 3 widgets par Widget Center et 2 dans Stack", "3 Super Shortcuts", "1 élément privé et 1 limite d’app", "Essai de Pro ; voir les conditions dans l’app", "Points de notification, Quick Actions et gestes d’accueil"],
                    ["Éléments épinglés et widgets du Widget Center illimités ; jusqu’à 4 dans Stack", "Toutes les touches Super Shortcut et pages d’accueil illimitées", "Plusieurs coffres, éléments privés et limites d’apps illimités", "Mode Focus, paroles synchronisées et packs d’icônes", "Clavier Glass, Neon Glow, Ripple et transitions 3D", "Polices, calculatrice, fonds automatiques et sauvegarde / restauration"]
                ],
                categoryNames: ['Essentiel', 'Clavier', 'Centre de widgets', 'Aperçu rapide', 'Super Raccourcis et Raccourcis', 'Coffre privé', 'Mode focus', 'Musique', 'Apparence', 'Utilisation des apps', 'Fil d’actualités', 'Paramètres et données', 'Clin d’œil (Easter egg)'],
                featureNames: [
                    ["Recherche intelligente T9", "Éléments épinglés", "Gestes de glissement", "Recherche de contacts", "Masquer apps et contacts", "Double-tap pour verrouiller", "Pages d’applications", "Recherche QWERTY", "Swipe Typing (Beta)"],
                    ["Mode calculatrice", "Bascule de sonnerie", "Thèmes de couleur du clavier", "Clavier Glass", "Neon Glow et Ripple", "Transitions d’accueil 3D"],
                    ["Nombre de widgets", "Fond d’écran personnalisé", "Widget Stack (accueil / notifications)"],
                    ["Widget horloge", "Widget calendrier", "Widget météo"],
                    ["Super Raccourcis"],
                    ["Coffre privé", "Coffres privés supplémentaires"],
                    ["Mode focus", "Écran toujours allumé"],
                    ["Commandes de musique", "Paroles synchronisées"],
                    ["Options de fond d’écran", "Changement automatique de fond", "Prise en charge des packs d’icônes", "Polices personnalisées", "Personnalisation des icônes", "Points de notification", "Superposition de fond d’écran"],
                    ["Suivi d’utilisation des applications"],
                    ["Sources de flux RSS"],
                    ["Sauvegarde et restauration"],
                    ["Jeu T-Rex"]
                ],
                values: { "8 items": "8 éléments", Unlimited: "Illimité", "2 pages": "2 pages", "3 widgets": "3 widgets", "3 slots": "3 emplacements", "1 item": "1 élément", "1 app": "1 application", "3 sources": "3 sources", "In-app trial": "Essai dans l’app", "2 widgets": "2 widgets", "4 widgets": "4 widgets", "All keys": "Toutes les touches", "10 apps; unlimited contacts": "10 apps ; contacts illimités" },
                labels: ['Comparatif détaillé des fonctionnalités', 'Fonctionnalité', 'Gratuit', 'Afficher toutes les fonctionnalités', 'Réduire', 'Consultez vos tarifs PRO locaux dans l’application.'],
                regional: ['Prix affichés en USD. Google Play applique le tarif configuré pour le pays de votre compte.', '{pct} % sous le prix mondial, ajusté au pouvoir d’achat local.', 'Jamais de soldes. Les prix ne font qu’augmenter : achetez plus tôt, payez moins. Les achats à vie ne sont jamais refacturés.']
            },
            faq: [['Qu’est-ce qu’un lanceur T9 ?', "Un lanceur T9 utilise un clavier 3×4 pour filtrer les apps selon les lettres de chaque touche numérique. Saisissez quelques chiffres, puis choisissez l’app. Key Launcher propose aussi la recherche QWERTY et Swipe Typing (Beta)."], ['Key Launcher est-il sûr et confidentiel ?', "La recherche d’apps et de contacts est traitée sur votre appareil ; le contenu des coffres privés est stocké localement. Les suggestions web, la météo et les paroles utilisent des services réseau. L’app utilise aussi des services d’analyse, de rapports de plantage et d’achat. Consultez la Politique de confidentialité."], ['Prend-il en charge les packs d’icônes et les fonds d’écran ?', 'Oui. Il prend en charge les icônes, les couleurs système, les polices et les fonds automatiques. Certaines options avancées nécessitent PRO.'], ['Key Launcher consomme-t-il la batterie ?', "La consommation dépend des réglages. L’horloge Focus toujours allumée, les widgets actifs et les mises à jour météo peuvent augmenter la consommation. Ajustez ces fonctions dans les paramètres."], ['Quelles intégrations d’appel et de messagerie sont disponibles ?', 'Vous pouvez appeler, envoyer un SMS ou ouvrir WhatsApp, Zalo et Viber en saisissant un contact ou un numéro.'], ['Puis-je essayer PRO avant d’acheter ?', "Oui. Vous pouvez essayer les fonctions Pro avant d’acheter. Consultez la durée et les conditions dans l’app ; les installations antérieures peuvent conserver leurs anciennes conditions. Pro est proposé par abonnement annuel ou achat à vie."]],
            footer: ['UN PRODUIT LOUSIFY TECH', '© 2026 Lousify Tech. Tous droits réservés.', 'Politique de confidentialité', 'Conditions d’utilisation', 'Aide'],
            ui: ['sur Google Play', 'Capture précédente', 'Capture suivante', 'Changer de thème', 'Changer de langue', 'Traduit', 'Fonctions et avantages', 'Faites défiler pour explorer'],
            compareNav: 'Comparer',
            mediaBadge: 'Presse et avis',
            compare: {
                badgeText: 'Comparatif côte à côte',
                title: 'Pourquoi choisir Key Launcher ?',
                subtitle: 'Comparez Key Launcher aux autres lanceurs minimalistes Android et découvrez pourquoi des milliers d’utilisateurs l’ont adopté.',
                featureHeader: 'Fonctionnalité',
                topBadge: 'Top',
                mobileLabel: 'Comparer avec :',
                mobileHint: 'Touchez pour changer',
                allTab: 'Tous',
                scrollHint: 'Glissez horizontalement pour tout voir',
                rows: [
                    { name: "Recherche T9 rapide", desc: "Trouvez vos apps en quelques touches.", keyLauncher: "Oui (Instantané)", niagara: "❌ Défilement alphabétique", minimalistPhone: "❌ Liste texte", olauncher: "❌ Recherche texte" },
                    { name: "QWERTY et frappe par glissement", desc: "Recherche QWERTY + Swipe Typing (Beta)", keyLauncher: "Oui (Les deux)", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Plusieurs coffres privés", desc: "Un code distinct pour chaque coffre", keyLauncher: "Plusieurs coffres avec Pro", niagara: "Masquage d’apps uniquement", minimalistPhone: "Bloqueur d’apps uniquement", olauncher: "Masquage d’apps uniquement" },
                    { name: "Super Focus et paroles de musique", desc: "Pomodoro, horloge de bureau et paroles intégrés", keyLauncher: "Intégré", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Recherche et confidentialité", desc: "Recherche locale d’apps et contacts ; services en ligne déclarés", keyLauncher: "Recherche locale + fonctions en ligne", niagara: "Voir la politique de confidentialité", minimalistPhone: "Voir la politique de confidentialité", olauncher: "Voir la politique de confidentialité" },
                    { name: "Modèle tarifaire", desc: "Des tarifs équitables et transparents", keyLauncherMain: "Fonctions de base gratuites", keyLauncherSub: "Option à vie abordable", niagara: "Abonnement annuel", minimalistPhone: "Abonnement élevé (20 $+/an)", olauncher: "Gratuit / Don" }
                ]
            },
            uiDetails: {
                apkSubtext: 'Téléchargement APK direct',
                apkTitle: 'Télécharger le fichier APK',
                featuredOn: 'Mis en avant sur',
                listedOn: 'Présent sur',
                comparisonSubtitle: 'Comparez toutes les fonctionnalités côte à côte'
            }
        },
        de: {
            meta: ["Key Launcher — T9- und QWERTY-Fokus-Launcher für Android", "Apps mit T9 oder QWERTY finden, Swipe Typing (Beta) testen und mit Pomodoro fokussieren. Kostenlose Basisfunktionen, werbefrei, Pro optional."],
            navigation: ['Funktionen', 'Presse', 'Preise', 'Bewertungen', 'FAQ', 'Hilfe', 'Kostenlos laden'],
            hero: ["Key Launcher 2.0", "Alles beginnt", "mit einer Taste.", "Öffne Apps mit T9 oder QWERTY, teste Swipe Typing (Beta) und schaffe Raum für Fokus. Gestalte deinen Startbildschirm, ordne private Bereiche und verwandle dein Smartphone in eine Pomodoro-Schreibtischuhr.", "100+ Bewertungen", "T9- und QWERTY-Suche", "Swipe Typing (Beta)", "Kostenlose Basis · Werbefrei"],
            sections: {media: ['Presse & Bewertungen', 'Das sagen Technikjournalisten und Kreative über den minimalistischen Ansatz von Key Launcher.', 'Vollständiges Review ansehen'], features: ['Für Geschwindigkeit entwickelt. Für Fokus optimiert.', 'Reduziere deine Smartphone-Nutzung und vereinfache den Alltag mit praktischen, ablenkungsfreien Funktionen.'], focus: ['Super Focus', 'Ablenkungen stummschalten. <br class="hidden sm:inline">Ruhe schaffen.', 'Mach dein Gerät zum minimalistischen Begleiter. Schalte Benachrichtigungen stumm und greife auf Musik, Kalender, Pomodoro, Fotos und ein Offline-Spiel zu.'], pricing: ['Transparente Preise', 'Kostenlos nutzen. <br class="sm:hidden">Auf PRO upgraden.', 'Die Kernfunktionen bleiben kostenlos und werbefrei. PRO gibt es als Jahresabo oder einmaligen Kauf.'], testimonials: ['Nutzerfeedback', 'Echte Nutzer. <br class="sm:hidden">Echte Bewertungen.'], faq: ['Häufige Fragen', 'Häufig gestellte Fragen', 'Hier findest du Antworten auf die häufigsten Fragen zu Key Launcher.'], cta: ['Bereit für T9-Geschwindigkeit?', 'Lade Key Launcher für Android herunter, vereinfache deine Abläufe und gewinne Bildschirmzeit zurück.', 'Kostenlos im Play Store']},
            features: [['Ultraschnelle T9-Suche', "Finde Apps mit wenigen Tastendrücken."], ['Sofort anrufen', 'Sofort anrufen, schreiben oder suchen.'], ['Synchronisierte Liedtexte', 'Musik direkt auf dem Startbildschirm genießen.'], ['Widget-Zentrale', 'Alle Lieblings-Widgets an einem Ort.'], ['Kalender & Termine', 'Deine Termine immer griffbereit.'], ['Pomodoro-Timer', 'Integrierter Deep-Work-Modus.'], ['Privater Tresor', "Getrennte private Bereiche mit jeweils eigenem Zugangscode."], ['Material You & Typografie', 'Themes, die wirklich zu dir passen.']],
            focusBullets: [['Ruhe mit 1 Tipp', 'Störende App-Hinweise sofort stummschalten.'], ['Musikplayer', 'Synchronisierte Liedtexte auf dem Bildschirm genießen.'], ['Kalender & Termine', 'Alle Termine auf einen Blick.'], ['Pomodoro-Timer', 'Mit integrierten Intervallen fokussiert bleiben.'], ['Album-Diashow', 'Beim Arbeiten Erinnerungen ansehen.'], ['T-Rex-Spiel', 'Ein Offline-Klassiker für kurze Pausen.']],
            pricing: ['Kostenlos', 'Gratis', '/ lebenslang', 'Ideal für eine saubere, schnelle Oberfläche.', 'Kostenlos laden', 'PRO', 'Passe jedes Detail deines Bildschirms an deinen Stil an.', 'In der App upgraden', '1-Jahres-Abo', 'Lebenslanger Kauf', 'Preise für', 'Die endgültigen Preise werden in der App angezeigt.', 'In der App ansehen', 'Empfohlen'],
            pricingDetails: {
                planFeatures: [
                    ["T9- und QWERTY-Suche mit Swipe Typing (Beta)", "8 angeheftete Elemente, 3 Widgets je Widget Center und 2 im Stack", "3 Super Shortcuts", "1 privates Element und 1 App-Limit", "Pro-Testphase; Bedingungen in der App ansehen", "Benachrichtigungspunkte, Quick Actions und Startbildschirmgesten"],
                    ["Unbegrenzte angeheftete Elemente und Widget-Center-Widgets; bis zu 4 im Stack", "Alle Super-Shortcut-Tasten und unbegrenzte Startseiten", "Mehrere Tresore, unbegrenzte private Elemente und App-Limits", "Focus-Modus, synchronisierte Liedtexte und Icon-Packs", "Glass-Tastatur, Neon Glow, Ripple und 3D-Übergänge", "Schriftarten, Rechner, automatische Hintergrundbilder und Backup / Wiederherstellung"]
                ],
                categoryNames: ['Kernfunktionen', 'Tastatur', 'Widget-Zentrale', 'Auf einen Blick', 'Super-Shortcuts & Kurzbefehle', 'Privater Tresor', 'Fokusmodus', 'Musik', 'Erscheinungsbild', 'App-Nutzung', 'Entdecken-Feed', 'Einstellungen & Daten', 'Easter Egg'],
                featureNames: [
                    ["Intelligente T9-Suche", "Angeheftete Elemente", "Wischgesten", "Kontaktsuche", "Apps & Kontakte verbergen", "Doppeltippen zum Sperren", "App-Seiten", "QWERTY-Suche", "Swipe Typing (Beta)"],
                    ["Taschenrechner-Modus", "Klingelton-Umschalter", "Tastatur-Farbfelder", "Glass-Tastatur", "Neon Glow und Ripple", "3D-Startseitenübergänge"],
                    ["Anzahl der Widgets", "Eigener Hintergrund", "Widget Stack (Startseite / Benachrichtigungen)"],
                    ["Uhr-Widget", "Kalender-Widget", "Wetter-Widget"],
                    ["Super-Shortcuts"],
                    ["Privater Tresor", "Zusätzliche private Tresore"],
                    ["Fokusmodus", "Always-On-Display"],
                    ["Musiksteuerung", "Synchronisierte Songtexte"],
                    ["Hintergrund-Optionen", "Automatischer Hintergrundwechsel", "Icon-Pack-Unterstützung", "Eigene Schriften", "Icon-Anpassung", "Benachrichtigungspunkte", "Hintergrund-Überlagerung"],
                    ["App-Nutzungstracking"],
                    ["RSS-Feed-Quellen"],
                    ["Sichern & Wiederherstellen"],
                    ["T-Rex-Spiel"]
                ],
                values: { "8 items": "8 Elemente", Unlimited: "Unbegrenzt", "2 pages": "2 Seiten", "3 widgets": "3 Widgets", "3 slots": "3 Slots", "1 item": "1 Element", "1 app": "1 App", "3 sources": "3 Quellen", "In-app trial": "Testphase in der App", "2 widgets": "2 Widgets", "4 widgets": "4 Widgets", "All keys": "Alle Tasten", "10 apps; unlimited contacts": "10 Apps; unbegrenzte Kontakte" },
                labels: ['Detaillierter Funktionsvergleich', 'Funktion', 'Kostenlos', 'Alle Funktionen anzeigen', 'Weniger anzeigen', 'Sieh dir deine lokalen PRO-Preise in der App an.'],
                regional: ['Preise in USD angegeben. Google Play berechnet den für das Land deines Kontos festgelegten Preis.', '{pct} % unter dem globalen Preis, angepasst an die lokale Kaufkraft.', 'Keine Rabattaktionen, niemals. Die Preise steigen nur — früher kaufen, weniger zahlen. Einmalige Lifetime-Käufe werden nie neu bepreist.']
            },
            faq: [['Was ist ein T9-App-Launcher?', "Ein T9-Launcher filtert Apps mit einer 3×4-Tastatur anhand der Buchstaben auf jeder Zifferntaste. Gib einige Ziffern ein und wähle die passende App. Key Launcher bietet außerdem QWERTY-Suche und Swipe Typing (Beta)."], ['Ist Key Launcher sicher und privat?', "Die Suche nach Apps und Kontakten wird auf deinem Gerät verarbeitet; Tresorinhalte werden lokal gespeichert. Webvorschläge, Wetter und Liedtexte nutzen Netzwerkdienste. Die App nutzt außerdem Dienste für Analysen, Absturzberichte und Käufe. Details stehen in der Datenschutzerklärung."], ['Werden Icon-Pakete und eigene Hintergründe unterstützt?', 'Ja. Icon-Pakete, Systemfarben, Schriften und automatische Hintergründe werden unterstützt. Einige erweiterte Optionen erfordern PRO.'], ['Verbraucht Key Launcher viel Akku?', "Der Akkuverbrauch hängt von den Einstellungen ab. Eine dauerhaft eingeschaltete Focus-Uhr, aktive Widgets und Wetteraktualisierungen können den Verbrauch erhöhen. Passe diese Funktionen in den Einstellungen an."], ['Welche Anruf- und Messenger-Integrationen gibt es?', 'Durch Eingabe eines Kontakts oder einer Nummer kannst du anrufen, SMS senden oder WhatsApp, Zalo und Viber öffnen.'], ['Kann ich PRO vor dem Kauf testen?', "Ja. Du kannst Pro-Funktionen vor dem Kauf in der App testen. Dauer und Bedingungen findest du in der App; ältere Installationen können frühere Bedingungen behalten. Pro gibt es als Jahresabo oder lebenslangen Kauf."]],
            footer: ['EIN PRODUKT VON LOUSIFY TECH', '© 2026 Lousify Tech. Alle Rechte vorbehalten.', 'Datenschutzerklärung', 'Nutzungsbedingungen', 'Hilfe'],
            ui: ['bei Google Play', 'Vorheriger Screenshot', 'Nächster Screenshot', 'Design wechseln', 'Sprache wechseln', 'Übersetzt', 'Funktionen und Vorteile', 'Scrollen zum Entdecken'],
            compareNav: 'Vergleich',
            mediaBadge: 'Presse & Bewertungen',
            compare: {
                badgeText: 'Direkter Vergleich',
                title: 'Warum zu Key Launcher wechseln?',
                subtitle: 'Vergleiche Key Launcher mit anderen minimalistischen Android-Launchern und erfahre, warum Tausende umgestiegen sind.',
                featureHeader: 'Funktion',
                topBadge: 'Top',
                mobileLabel: 'Vergleichen mit:',
                mobileHint: 'Tippen zum Wechseln',
                allTab: 'Alle',
                scrollHint: 'Horizontal wischen, um alle Spalten zu sehen',
                rows: [
                    { name: "Schnelle T9-Suche", desc: "Finde Apps mit wenigen Tastendrücken.", keyLauncher: "Ja (Sofort)", niagara: "❌ Alphabetisches Scrollen", minimalistPhone: "❌ Textliste", olauncher: "❌ Textsuche" },
                    { name: "QWERTY & Wisch-Tastatur (Swipe)", desc: "QWERTY-Suche + Swipe Typing (Beta)", keyLauncher: "Ja (Beides)", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Mehrere private Tresore", desc: "Jeder Tresor hat einen eigenen Zugangscode", keyLauncher: "Mehrere Tresore mit Pro", niagara: "Nur Apps ausblenden", minimalistPhone: "Nur App-Blocker", olauncher: "Nur Apps ausblenden" },
                    { name: "Super Focus & Liedtexte", desc: "Integrierter Pomodoro-Timer, Schreibtischuhr & Liedtexte", keyLauncher: "Integriert", niagara: "❌", minimalistPhone: "❌", olauncher: "❌" },
                    { name: "Suche und Datenschutz", desc: "App- und Kontaktsuche auf dem Gerät; Online-Dienste offengelegt", keyLauncher: "Lokale Suche + Online-Funktionen", niagara: "Siehe Datenschutzerklärung", minimalistPhone: "Siehe Datenschutzerklärung", olauncher: "Siehe Datenschutzerklärung" },
                    { name: "Preise & Modell", desc: "Faire und transparente Preise", keyLauncherMain: "Kostenlose Basis", keyLauncherSub: "Erschwingliche Lifetime-Option", niagara: "Jahresabo", minimalistPhone: "Teures Abo (20 $+/Jahr)", olauncher: "Kostenlos / Spende" }
                ]
            },
            uiDetails: {
                apkSubtext: 'Direkter APK-Download',
                apkTitle: 'APK-Datei herunterladen',
                featuredOn: 'Vorgestellt auf',
                listedOn: 'Gelistet auf',
                comparisonSubtitle: 'Vergleiche alle Funktionen nebeneinander'
            }
        }
    };

    // Order: 6 press quotes, followed by 22 user testimonials.
    const quoteTranslations = {
        vi: [
            'Key Launcher là một trong những trình khởi chạy Android mượt mà nhất tôi từng dùng trong nhiều năm. Triết lý thiết kế độc đáo cân bằng rất tốt giữa hiệu quả, tối giản và khả năng tùy biến.',
            'Key Launcher nổi bật nhờ tập trung rút ngắn gần như mọi thao tác, đồng thời vẫn cung cấp nhiều tùy chọn cho người thích cá nhân hóa.',
            'Key Launcher thuộc nhóm trình khởi chạy ấn tượng nhất tôi từng dùng. Màn hình T9 đã thay thế Pixel Launcher trên Pixel 8 của tôi — vậy là đủ hiểu nó tốt đến mức nào.',
            'Một trình khởi chạy dùng bàn phím T9, kết hợp không khí thập niên 90 với các phím tắt mạnh mẽ đến bất ngờ.',
            'Dù mới xuất hiện trên Play Store vài tuần, Key Launcher đã rất hoàn thiện, độc đáo và mang cảm giác hoài cổ công nghệ tuyệt vời.',
            'Tôi đã thử nhiều trình khởi chạy, nhưng Key Launcher là ứng dụng duy nhất thực sự cố gắng giải quyết sự lộn xộn của Android.',
            'Trải nghiệm tuyệt vời; đây là lựa chọn của tôi sau khi thử năm launcher. Ứng dụng tùy biến cao mà vẫn nhanh, mọi thứ chỉ cách vài lần nhấn T9.',
            'Ngay cả người khó tính cũng có thể yêu thích launcher này. Tôi bất ngờ vì nó hữu ích, thú vị và giờ không thể thiếu tìm kiếm T9.',
            'Key Launcher đã thay đổi hoàn toàn cách tôi dùng điện thoại. Tìm kiếm T9 cực nhanh, thiết kế tối giản cùng Pomodoro và widget ẩn rất tuyệt.',
            'Một launcher thay thế rất thú vị và độc đáo, nhiều tùy chỉnh nhưng vẫn ưu tiên tốc độ. Khi quen bàn phím T9, nó trở nên không thể thiếu.',
            'Có lẽ đây là một trong những launcher đẹp nhất: gọn, sạch và nhanh. Nếu thêm theo dõi thói quen, nó sẽ gần như hoàn hảo.',
            'Hoàn toàn tuyệt vời, thậm chí tốt hơn Niagara Launcher — một lời khen rất lớn — và còn rất nhiều tiềm năng.',
            'Launcher tốt nhất tôi từng dùng. Nó khiến chiếc điện thoại như mới và giúp cuộc sống dễ dàng hơn mọi launcher trả phí khác.',
            'UI và UX xuất sắc; đây là launcher phản hồi nhanh nhất tôi từng gặp. Rất đáng giới thiệu.',
            'Launcher đẹp và giúp truy cập mọi thao tác rất nhanh. Chế độ tập trung hữu ích; khi đã quen thì vận hành cực kỳ nhanh.',
            'Tôi đã thử vô số launcher nhưng đây dễ dàng là lựa chọn yêu thích. Thiết kế và chế độ tập trung tuyệt vời; nhà phát triển phản hồi rất nhanh.',
            'Ứng dụng gần như hoàn hảo: thiết kế đẹp, nhanh, dễ dùng, không quảng cáo và mức giá hợp lý, kể cả khi dùng miễn phí.',
            'Tôi có cảm giác launcher này được làm riêng cho mình. Nó đã có sẵn quay số ứng dụng, phím tắt, widget, RSS và danh mục; tôi đã mua bản Premium.',
            'Sau nhiều launcher, Key Launcher đáp ứng mọi yêu cầu khắt khe của tôi: nhanh, linh hoạt, tùy biến cao và có nhà phát triển rất tận tâm.',
            'Launcher cực kỳ hữu ích; nhà phát triển hoạt động tích cực và thường xuyên bổ sung tính năng mới. Tôi đã chuyển từ Smart, Nova và Octopi.',
            'Launcher dùng hằng ngày của tôi: T9 trực quan, giao diện đẹp, có chế độ tập trung và lời bài hát. Ứng dụng nhanh và lỗi được sửa rất sớm.',
            'Launcher này rất xuất sắc và đẹp mắt — một lý do thuyết phục để sử dụng nền tảng Android.',
            'Cân bằng tuyệt vời giữa tối giản và đầy đủ tính năng. Tìm kiếm T9 rất nhanh, phím tắt linh hoạt và nhà phát triển phản hồi tốt.',
            'Đây là một trong những ứng dụng launcher hàng đầu trên Play Store, được phát triển với cách tiếp cận độc đáo.',
            'Bàn phím chính, trang widget và thông báo bên trái rất tiện lợi. Sắp xếp ứng dụng theo mức sử dụng cũng là một tính năng thông minh.',
            'Ban đầu tôi chưa thích, nhưng ứng dụng đã được cải thiện rất nhiều. Giờ nó có mọi thứ một launcher tốt cần và rất đáng giới thiệu.',
            'Launcher yêu thích của tôi trên Samsung cho đến nay; tôi vẫn đang cá nhân hóa nhưng thực sự rất thích nó!',
            'Một launcher cực kỳ chỉn chu với ý tưởng xuất sắc. Mong ứng dụng luôn duy trì tiêu chuẩn chất lượng này.'
        ],
        es: [
            'Key Launcher es uno de los lanzadores Android más fluidos que he usado en años. Equilibra de forma brillante eficiencia, minimalismo y personalización.', 'Destaca por acortar casi todas las acciones sin renunciar a buenas opciones de personalización.', 'Es uno de los lanzadores más impresionantes que he probado. Reemplazó Pixel Launcher en mi Pixel 8; eso lo dice todo.', 'Un lanzador T9 que mezcla el espíritu de los noventa con atajos sorprendentemente potentes.', 'Aunque acaba de llegar a Play Store, ya se siente pulido, original y con un fantástico aire tecnológico retro.', 'He probado varios lanzadores, pero Key Launcher es el único que intenta resolver de verdad el desorden de Android.',
            'Gran experiencia y mi elección entre cinco lanzadores. Es rápido, muy personalizable y todo queda a pocas pulsaciones T9.', 'Hasta una persona exigente podría adorarlo. Me sorprendió lo útil y agradable que es; ya no puedo vivir sin la búsqueda T9.', 'Cambió por completo cómo uso el teléfono: T9 rapidísimo, diseño minimalista, Pomodoro y widgets ocultos fantásticos.', 'Una alternativa original con muchas opciones y gran velocidad. Cuando dominas el T9, se vuelve imprescindible.', 'Uno de los lanzadores más bonitos: elegante, limpio y rápido. Un rastreador de hábitos lo haría perfecto.', 'Absolutamente fantástico, incluso mejor que Niagara Launcher, y con muchísimo potencial.', 'El mejor lanzador. Ha hecho que mi teléfono parezca nuevo y me facilita más la vida que cualquier otro.', 'UI y UX excelentes; es el lanzador más ágil que he probado. Muy recomendable.', 'Bonito y muy rápido para cualquier acción. El modo de concentración ayuda y, una vez aprendido, funciona de maravilla.', 'He probado incontables lanzadores y este es mi favorito. El diseño y el modo de concentración son magníficos, y el desarrollador responde rápido.', 'Prácticamente perfecto: bonito, rápido, fácil, sin anuncios y con un precio razonable incluso si decides usarlo gratis.', 'Parece hecho para mí: marcador de apps, atajos, widgets, RSS y categorías integradas. Compré Premium encantado.', 'Cumple todos mis requisitos: rápido, flexible, configurable y con un desarrollador atento y comprometido.', 'Súper útil, con un desarrollador muy activo y actualizaciones frecuentes. Me cambié desde Smart, Nova y Octopi.', 'Es mi lanzador diario: T9 intuitivo, interfaz bonita, modo de concentración y letras sincronizadas. Además, corrigen los fallos muy rápido.', 'Es excepcional y visualmente impresionante; una razón convincente para usar Android.', 'Gran equilibrio entre limpieza y funciones. El T9 es rapidísimo, los atajos son flexibles y el desarrollador responde bien.', 'Uno de los mejores lanzadores de Play Store, creado con un enfoque único.', 'El teclado principal, los widgets y las notificaciones laterales son muy cómodos. Ordenar apps por uso es especialmente inteligente.', 'Al principio no me convenció, pero ha mejorado mucho. Ahora tiene todo lo que necesita un buen lanzador. Muy recomendable.', 'Mi lanzador favorito en Samsung hasta ahora; todavía lo estoy personalizando, pero me encanta.', 'Un lanzador extremadamente pulido con una propuesta excelente. Ojalá mantenga este nivel de calidad.'
        ],
        'pt-BR': [
            'O Key Launcher é um dos launchers Android mais fluidos que usei em anos. Ele equilibra muito bem eficiência, minimalismo e personalização.', 'Ele se destaca por encurtar quase todas as ações sem abrir mão de boas opções de personalização.', 'É um dos launchers mais impressionantes que já usei. Substituiu o Pixel Launcher no meu Pixel 8 — isso diz tudo.', 'Um launcher T9 que mistura o clima dos anos 90 com atalhos surpreendentemente poderosos.', 'Mesmo recém-chegado à Play Store, já é muito polido, original e tem uma ótima energia retrô tecnológica.', 'Testei vários launchers, mas o Key Launcher é o único que realmente tenta resolver a bagunça do Android.',
            'Ótima experiência e minha escolha entre cinco launchers. É rápido, personalizável e tudo fica a poucos toques no T9.', 'Até uma pessoa exigente pode amar este launcher. Fiquei surpresa com sua utilidade e agora não vivo sem a busca T9.', 'Mudou completamente como uso o celular: T9 muito rápido, design minimalista, Pomodoro e widgets ocultos excelentes.', 'Uma alternativa original, cheia de opções e ainda muito rápida. Depois de aprender o T9, ela se torna indispensável.', 'Um dos launchers mais bonitos: elegante, limpo e rápido. Um rastreador de hábitos o deixaria perfeito.', 'Absolutamente fantástico, ainda melhor que o Niagara Launcher, e com muito potencial.', 'O melhor launcher. Fez meu celular parecer novo e facilita mais minha vida que qualquer outro.', 'UI e UX excelentes; é o launcher mais ágil que já encontrei. Recomendo muito.', 'Bonito e muito rápido para qualquer ação. O modo foco ajuda e, quando você se acostuma, tudo fica veloz.', 'Testei inúmeros launchers e este virou meu favorito. O design e o modo foco são excelentes, e o desenvolvedor responde rápido.', 'Praticamente perfeito: bonito, rápido, fácil, sem anúncios e com preço justo, mesmo sendo ótimo sem pagar.', 'Parece feito para mim: discador de apps, atalhos, widgets, RSS e categorias já integrados. Comprei o Premium.', 'Atende a todos os meus requisitos: rápido, flexível, configurável e com um desenvolvedor muito atencioso.', 'Superútil, com desenvolvedor ativo e atualizações frequentes. Migrei do Smart, Nova e Octopi.', 'É meu launcher diário: T9 intuitivo, visual bonito, modo foco e letras sincronizadas. Os bugs também são corrigidos rapidamente.', 'É excepcional e visualmente impressionante — um ótimo motivo para usar Android.', 'Ótimo equilíbrio entre minimalismo e recursos. O T9 é rápido, os atalhos são flexíveis e o desenvolvedor responde bem.', 'Um dos melhores launchers da Play Store, desenvolvido com uma abordagem única.', 'O teclado principal, a página de widgets e as notificações laterais são muito práticos. Ordenar apps por uso é especialmente inteligente.', 'No começo não gostei muito, mas melhorou bastante. Agora tem tudo que um bom launcher precisa. Recomendo.', 'Meu launcher favorito no Samsung até agora; ainda estou personalizando, mas adoro.', 'Launcher extremamente polido, com uma proposta excelente. Que este padrão de qualidade seja mantido.'
        ],
        id: [
            'Key Launcher adalah salah satu launcher Android paling mulus yang saya pakai selama bertahun-tahun. Efisiensi, minimalisme, dan kustomisasinya sangat seimbang.', 'Key Launcher menonjol karena mempersingkat hampir setiap tindakan sambil tetap menyediakan banyak pilihan kustomisasi.', 'Ini salah satu launcher paling mengesankan yang pernah saya pakai. Ia menggantikan Pixel Launcher di Pixel 8 saya—itu sudah menjelaskan semuanya.', 'Launcher T9 yang memadukan nuansa 90-an dengan pintasan yang sangat bertenaga.', 'Walau baru hadir di Play Store, aplikasi ini sudah terasa matang, orisinal, dan punya nuansa teknologi retro yang hebat.', 'Saya sudah mencoba banyak launcher, tetapi hanya Key Launcher yang benar-benar berusaha mengatasi layar Android yang berantakan.',
            'Pengalaman hebat dan pilihan saya dari lima launcher. Cepat, mudah disesuaikan, dan semuanya hanya beberapa ketukan T9.', 'Bahkan pengguna pemilih bisa menyukainya. Saya terkejut betapa berguna dan menyenangkannya aplikasi ini; kini pencarian T9 wajib bagi saya.', 'Aplikasi ini mengubah cara saya memakai ponsel: T9 sangat cepat, desain minimalis, Pomodoro, dan widget tersembunyi yang luar biasa.', 'Alternatif yang orisinal dengan banyak opsi dan tetap cepat. Setelah terbiasa dengan T9, aplikasi ini menjadi kebutuhan sehari-hari.', 'Salah satu launcher terindah: ramping, bersih, dan cepat. Pelacak kebiasaan akan membuatnya sempurna.', 'Benar-benar fantastis, bahkan lebih baik dari Niagara Launcher, dan potensinya besar.', 'Launcher terbaik. Ponsel saya terasa baru dan hidup menjadi lebih mudah dibandingkan launcher lain.', 'UI dan UX luar biasa; ini launcher paling responsif yang pernah saya temui. Sangat direkomendasikan.', 'Launcher yang bagus dan sangat cepat untuk setiap tindakan. Mode fokus membantu, dan setelah terbiasa semuanya terasa gesit.', 'Saya sudah mencoba banyak launcher dan ini favorit saya. Desain serta mode fokusnya hebat, dan pengembang sangat cepat merespons.', 'Hampir sempurna: indah, cepat, mudah, bebas iklan, dan harganya wajar meski versi gratisnya sudah sangat berguna.', 'Terasa dibuat untuk saya: pencarian aplikasi, pintasan, widget, RSS, dan kategori sudah tersedia. Saya pun membeli Premium.', 'Memenuhi semua kebutuhan saya: cepat, fleksibel, sangat dapat diatur, dan pengembangnya responsif serta peduli.', 'Sangat berguna, dengan pengembang aktif dan pembaruan rutin. Saya pindah dari Smart, Nova, dan Octopi.', 'Launcher harian saya: T9 intuitif, UI bagus, mode fokus, dan lirik tersinkron. Bug juga diperbaiki dengan cepat.', 'Launcher ini istimewa dan sangat indah—alasan kuat untuk memakai Android.', 'Keseimbangan hebat antara tampilan bersih dan fitur. T9 cepat, pintasan fleksibel, dan pengembang tanggap.', 'Salah satu aplikasi launcher terbaik di Play Store dengan pendekatan yang unik.', 'Keyboard utama, halaman widget, dan notifikasi di sisi kiri sangat nyaman. Pengurutan aplikasi berdasarkan pemakaian juga cerdas.', 'Awalnya saya kurang suka, tetapi sekarang jauh lebih baik. Semua kebutuhan launcher bagus tersedia. Sangat direkomendasikan.', 'Launcher Samsung favorit saya sejauh ini; masih saya sesuaikan, tetapi saya menyukainya.', 'Launcher yang sangat matang dengan gagasan luar biasa. Semoga standar kualitas ini terus dipertahankan.'
        ],
        fr: [
            'Key Launcher est l’un des lanceurs Android les plus fluides que j’aie utilisés depuis des années. Il équilibre brillamment efficacité, minimalisme et personnalisation.', 'Il se distingue en raccourcissant presque chaque action tout en offrant de nombreuses possibilités de personnalisation.', 'C’est l’un des lanceurs les plus impressionnants que j’aie testés. Il a remplacé Pixel Launcher sur mon Pixel 8 — tout est dit.', 'Un lanceur T9 qui mêle l’ambiance des années 90 à des raccourcis étonnamment puissants.', 'À peine arrivé sur le Play Store, il est déjà très abouti, original et délicieusement rétro-tech.', 'J’ai essayé plusieurs lanceurs, mais Key Launcher est le seul à vraiment s’attaquer à l’encombrement d’Android.',
            'Excellente expérience et mon choix parmi cinq lanceurs. Il est rapide, personnalisable et tout reste à quelques touches T9.', 'Même une personne exigeante peut l’adorer. J’ai été surprise par son utilité et je ne peux plus me passer de la recherche T9.', 'Il a changé ma façon d’utiliser mon téléphone : T9 ultrarapide, design minimaliste, Pomodoro et widgets cachés remarquables.', 'Une alternative originale, riche en options et toujours rapide. Une fois le T9 maîtrisé, elle devient indispensable.', 'L’un des plus beaux lanceurs : élégant, épuré et rapide. Un suivi des habitudes le rendrait parfait.', 'Absolument fantastique, encore meilleur que Niagara Launcher, avec énormément de potentiel.', 'Le meilleur lanceur. Mon téléphone paraît neuf et ma vie est plus simple qu’avec tous les autres.', 'UI et UX excellentes ; c’est le lanceur le plus réactif que j’aie rencontré. Vivement recommandé.', 'Beau et très rapide pour chaque action. Le mode concentration est utile et tout devient très fluide une fois habitué.', 'J’ai essayé d’innombrables lanceurs et celui-ci est mon préféré. Le design et le mode concentration sont superbes, et le développeur répond vite.', 'Presque parfait : beau, rapide, simple, sans publicité et à un prix raisonnable, même si la version gratuite suffit déjà.', 'Il semble fait pour moi : recherche d’apps, raccourcis, widgets, RSS et catégories sont intégrés. J’ai acheté Premium.', 'Il répond à toutes mes exigences : rapide, souple, configurable, avec un développeur attentif et impliqué.', 'Très utile, avec un développeur actif et des nouveautés fréquentes. J’ai quitté Smart, Nova et Octopi.', 'Mon lanceur quotidien : T9 intuitif, belle interface, mode concentration et paroles synchronisées. Les bugs sont corrigés très vite.', 'Ce lanceur est exceptionnel et superbe — une excellente raison d’utiliser Android.', 'Excellent équilibre entre simplicité et fonctions. Le T9 est rapide, les raccourcis flexibles et le développeur réactif.', 'L’un des meilleurs lanceurs du Play Store, conçu avec une approche unique.', 'Le clavier principal, les widgets et les notifications latérales sont très pratiques. Le tri par usage est particulièrement intelligent.', 'Je ne l’aimais pas au début, mais il s’est beaucoup amélioré. Il offre maintenant tout ce qu’il faut. Vivement recommandé.', 'Mon lanceur Samsung préféré jusqu’ici ; je le personnalise encore, mais je l’adore.', 'Un lanceur extrêmement abouti avec une excellente proposition. Puisse ce niveau de qualité durer.'
        ],
        de: [
            'Key Launcher ist einer der elegantesten Android-Launcher, die ich seit Jahren verwendet habe. Effizienz, Minimalismus und Anpassbarkeit sind hervorragend ausbalanciert.', 'Er verkürzt fast jede Aktion und bietet trotzdem viele Möglichkeiten zur Personalisierung.', 'Einer der beeindruckendsten Launcher überhaupt. Er hat Pixel Launcher auf meinem Pixel 8 ersetzt — das sagt alles.', 'Ein T9-Launcher, der 90er-Jahre-Flair mit überraschend leistungsfähigen Shortcuts verbindet.', 'Obwohl er erst kurz im Play Store ist, wirkt er schon sehr ausgereift, originell und wunderbar retro-technisch.', 'Ich habe mehrere Launcher getestet, doch nur Key Launcher versucht wirklich, Androids Unordnung zu lösen.',
            'Großartige Erfahrung und meine Wahl unter fünf Launchern. Schnell, flexibel und alles ist nur wenige T9-Tipps entfernt.', 'Selbst anspruchsvolle Nutzer können ihn lieben. Er ist überraschend nützlich und angenehm; auf die T9-Suche möchte ich nicht mehr verzichten.', 'Er hat meine Smartphone-Nutzung verändert: blitzschnelles T9, minimalistisches Design, Pomodoro und versteckte Widgets.', 'Eine originelle Alternative mit vielen Optionen und hohem Tempo. Sobald man T9 beherrscht, wird sie unverzichtbar.', 'Einer der schönsten Launcher: elegant, sauber und schnell. Ein Gewohnheitstracker würde ihn perfekt machen.', 'Absolut fantastisch, sogar besser als Niagara Launcher, und mit sehr viel Potenzial.', 'Der beste Launcher. Mein Smartphone fühlt sich wieder neu an und mein Alltag ist einfacher als mit allen anderen.', 'Hervorragende UI und UX; der reaktionsschnellste Launcher, den ich kenne. Sehr empfehlenswert.', 'Schön und extrem schnell bei jeder Aktion. Der Fokusmodus hilft, und nach kurzer Eingewöhnung geht alles sehr flott.', 'Ich habe unzählige Launcher getestet und dieser ist mein Favorit. Design und Fokusmodus sind großartig, der Entwickler reagiert schnell.', 'Fast perfekt: schön, schnell, einfach, werbefrei und fair bepreist — auch kostenlos schon sehr gut nutzbar.', 'Er wirkt wie für mich gemacht: App-Suche, Shortcuts, Widgets, RSS und Kategorien sind integriert. Ich habe Premium gekauft.', 'Er erfüllt alle meine Ansprüche: schnell, flexibel, konfigurierbar und mit einem engagierten, hilfsbereiten Entwickler.', 'Sehr nützlich, mit aktivem Entwickler und häufigen neuen Funktionen. Ich wechselte von Smart, Nova und Octopi.', 'Mein täglicher Launcher: intuitives T9, schöne UI, Fokusmodus und synchronisierte Liedtexte. Fehler werden ebenfalls schnell behoben.', 'Dieser Launcher ist außergewöhnlich und optisch beeindruckend — ein guter Grund für Android.', 'Großartige Balance zwischen Schlichtheit und Funktionen. T9 ist schnell, Shortcuts sind flexibel und der Entwickler reagiert gut.', 'Eine der besten Launcher-Apps im Play Store, entwickelt mit einem einzigartigen Ansatz.', 'Haupttastatur, Widget-Seite und seitliche Benachrichtigungen sind sehr praktisch. Die Sortierung nach Nutzung ist besonders clever.', 'Anfangs mochte ich ihn nicht, aber er wurde stark verbessert. Jetzt bietet er alles, was ein guter Launcher braucht. Sehr empfehlenswert.', 'Bisher mein Lieblings-Launcher auf Samsung; ich passe ihn noch an, liebe ihn aber jetzt schon.', 'Ein extrem ausgereifter Launcher mit einem hervorragenden Konzept. Hoffentlich bleibt dieses Qualitätsniveau erhalten.'
        ]
    };

    function normalizeLocale(locale) {
        if (!locale) return null;
        const exact = Object.keys(supportedLocales).find(key => key.toLowerCase() === locale.toLowerCase());
        if (exact) return exact;
        const base = locale.toLowerCase().split('-')[0];
        return Object.keys(supportedLocales).find(key => key.toLowerCase().split('-')[0] === base) || null;
    }

    const params = new URLSearchParams(window.location.search);
    const requested = normalizeLocale(params.get('lang'));
    const stored = normalizeLocale(localStorage.getItem('key-launcher-language'));
    const browser = normalizeLocale(navigator.languages?.[0] || navigator.language);
    const locale = requested || stored || browser || 'en';
    localStorage.setItem('key-launcher-language', locale);

    function applyTranslation(t) {
        if (!t) return;
        const c = KEY_LAUNCHER_CONTENT;
        [c.navigation.features, c.navigation.press, c.navigation.pricing, c.navigation.testimonials, c.navigation.faq, c.navigation.help, c.navigation.downloadText] = t.navigation;
        c.navigation.compare = t.compareNav || (locale === 'vi' ? 'So sánh' : locale === 'es' || locale === 'pt-BR' ? 'Comparar' : locale === 'id' ? 'Bandingkan' : locale === 'fr' ? 'Comparer' : locale === 'de' ? 'Vergleich' : 'Compare');
        c.navigation.activate = t.activateNav || (locale === 'vi' ? 'Kích hoạt' : locale === 'es' || locale === 'pt-BR' ? 'Activar' : locale === 'id' ? 'Aktivasi' : locale === 'fr' ? 'Activer' : locale === 'de' ? 'Aktivieren' : 'Activate');
        c.navigation.blog = t.blogNav || 'Blog';
        c.navigation.more = t.moreNav || (locale === 'vi' ? 'Thêm' : locale === 'es' || locale === 'pt-BR' ? 'Más' : locale === 'id' ? 'Lainnya' : locale === 'fr' ? 'Plus' : locale === 'de' ? 'Mehr' : 'More');
        c.pricing.licenseBanner = {
            title: locale === 'vi' ? 'E-Ink, Dumbphone hoặc không dùng Google Play?' : 'E-Ink, Dumbphone or Non-Google Play user?',
            description: locale === 'vi' ? 'Mua mã bản quyền ngoại tuyến (100% Offline) qua VietQR (PayOS) hoặc Thẻ Quốc tế (Lemon Squeezy).' : 'Buy or activate 100% offline license keys via VietQR (PayOS) or International Card (Lemon Squeezy).',
            buttonText: locale === 'vi' ? 'Mua / Kích hoạt License' : 'Buy / Activate License'
        };
        [c.hero.badgeText, c.hero.titleLine1, c.hero.titleLine2, c.hero.description, c.hero.rating.reviewsCount, ...c.hero.valueProps] = t.hero;
        c.media.badgeText = t.mediaBadge || (locale === 'vi' ? 'Báo chí đưa tin' : locale === 'es' ? 'Prensa y reseñas' : locale === 'pt-BR' ? 'Cobertura da imprensa' : locale === 'id' ? 'Liputan Media' : locale === 'fr' ? 'Presse et avis' : locale === 'de' ? 'Presse & Bewertungen' : 'Media Coverage');
        [c.media.title, c.media.subtitle, c.media.video.title] = t.sections.media;
        [c.features.title, c.features.subtitle] = t.sections.features;
        c.features.items.forEach((item, index) => [item.title, item.description] = t.features[index]);
        [c.focusMode.badgeText, c.focusMode.title, c.focusMode.description] = t.sections.focus;
        c.focusMode.bullets.forEach((item, index) => [item.title, item.description] = t.focusBullets[index]);
        if (t.compare) {
            c.compare = {
                badgeText: t.compare.badgeText,
                title: t.compare.title,
                subtitle: t.compare.subtitle,
                featureHeader: t.compare.featureHeader,
                topBadge: t.compare.topBadge,
                mobileLabel: t.compare.mobileLabel || (locale === 'vi' ? 'So sánh với:' : locale === 'es' ? 'Comparar con:' : locale === 'pt-BR' ? 'Comparar com:' : locale === 'id' ? 'Bandingkan dengan:' : locale === 'fr' ? 'Comparer avec :' : locale === 'de' ? 'Vergleichen mit:' : 'Compare with:'),
                mobileHint: t.compare.mobileHint || (locale === 'vi' ? 'Chạm để đổi đối thủ' : locale === 'es' ? 'Toca para cambiar' : locale === 'pt-BR' ? 'Toque para alternar' : locale === 'id' ? 'Ketuk untuk beralih' : locale === 'fr' ? 'Touchez pour changer' : locale === 'de' ? 'Tippen zum Wechseln' : 'Tap to switch'),
                allTab: t.compare.allTab || (locale === 'vi' ? 'Tất cả' : locale === 'es' || locale === 'pt-BR' ? 'Todos' : locale === 'id' ? 'Semua' : locale === 'fr' ? 'Tous' : locale === 'de' ? 'Alle' : 'All'),
                scrollHint: t.compare.scrollHint || (locale === 'vi' ? 'Vuốt ngang để xem toàn bộ bảng' : locale === 'es' ? 'Desliza horizontalmente para ver todas las columnas' : locale === 'pt-BR' ? 'Deslize para ver todas as colunas' : locale === 'id' ? 'Geser horizontal untuk melihat semua kolom' : locale === 'fr' ? 'Glissez horizontalement pour tout voir' : locale === 'de' ? 'Horizontal wischen, um alle Spalten zu sehen' : 'Swipe horizontally to see all columns'),
                rows: t.compare.rows
            };
        }
        [c.pricing.badgeText, c.pricing.title, c.pricing.subtitle] = t.sections.pricing;
        c.pricing.comparisonSubtitle = t.uiDetails?.comparisonSubtitle || (locale === 'vi' ? 'So sánh tất cả tính năng song song' : locale === 'es' ? 'Compara todas las funciones lado a lado' : locale === 'pt-BR' ? 'Compare todos os recursos lado a lado' : locale === 'id' ? 'Bandingkan semua fitur berdampingan' : locale === 'fr' ? 'Comparez toutes les fonctionnalités côte à côte' : locale === 'de' ? 'Vergleiche alle Funktionen nebeneinander' : 'Compare all features side-by-side');
        [c.pricing.plans[0].name, c.pricing.plans[0].price, c.pricing.plans[0].pricePeriod, c.pricing.plans[0].description, c.pricing.plans[0].buttonText, c.pricing.plans[1].name, c.pricing.plans[1].description, c.pricing.plans[1].buttonText, c.pricing.regional.annualLabel, c.pricing.regional.lifetimeLabel, c.pricing.regional.regionLabel] = t.pricing;
        c.pricing.finalPriceLabel = t.pricing[11];
        c.pricing.seeInAppLabel = t.pricing[12];
        c.pricing.recommendedLabel = t.pricing[13];
        c.pricing.plans[0].priceHtml = `<div class="flex items-baseline gap-1"><span id="free-price" class="text-3xl font-display font-extrabold text-zinc-900 dark:text-white">${c.pricing.plans[0].price}</span><span class="text-zinc-500 text-sm">${c.pricing.plans[0].pricePeriod}</span></div>`;
        if (t.pricingDetails) {
            c.pricing.plans.forEach((plan, planIndex) => plan.features.forEach((feature, featureIndex) => {
                feature.name = t.pricingDetails.planFeatures[planIndex][featureIndex];
            }));
            c.pricing.comparison.categories.forEach((category, categoryIndex) => {
                category.nameEn = t.pricingDetails.categoryNames[categoryIndex];
                category.features.forEach((feature, featureIndex) => {
                    feature.nameEn = t.pricingDetails.featureNames[categoryIndex][featureIndex];
                    feature.free = t.pricingDetails.values[feature.free] || feature.free;
                    feature.pro = t.pricingDetails.values[feature.pro] || feature.pro;
                });
            });
            [c.pricing.comparisonTitle, c.pricing.comparisonFeatureLabel, c.pricing.comparisonFreeLabel, c.pricing.showAllLabel, c.pricing.showLessLabel, c.pricing.pricingStatusLabel] = t.pricingDetails.labels;
            [c.pricing.regional.regionUnknown, c.pricing.regional.discountNote, c.pricing.regional.policyNote] = t.pricingDetails.regional;
        }
        [c.testimonials.badgeText, c.testimonials.title] = t.sections.testimonials;
        [c.faq.badgeText, c.faq.title, c.faq.subtitle] = t.sections.faq;
        c.faq.items.forEach((item, index) => [item.question, item.answer] = t.faq[index]);
        [c.downloadCta.title, c.downloadCta.description, c.downloadCta.buttonText] = t.sections.cta;
        [c.footer.creatorText, c.footer.copyright, c.footer.privacyText, c.footer.termsText, c.footer.helpText] = t.footer;
        c.ui = {
            ratingOn: t.ui[0],
            previousScreenshot: t.ui[1],
            nextScreenshot: t.ui[2],
            toggleTheme: t.ui[3],
            changeLanguage: t.ui[4],
            featuresBenefits: t.ui[6],
            scrollToExplore: t.ui[7],
            apkSubtext: t.uiDetails?.apkSubtext || (locale === 'vi' ? 'Tải APK trực tiếp' : locale === 'es' ? 'Descarga APK directa' : locale === 'pt-BR' ? 'Download direto de APK' : locale === 'id' ? 'Unduh APK langsung' : locale === 'fr' ? 'Téléchargement APK direct' : locale === 'de' ? 'Direkter APK-Download' : 'Direct APK / Non-GMS'),
            apkTitle: t.uiDetails?.apkTitle || (locale === 'vi' ? 'Tải file APK' : locale === 'es' ? 'Descargar archivo APK' : locale === 'pt-BR' ? 'Baixar arquivo APK' : locale === 'id' ? 'Unduh file APK' : locale === 'fr' ? 'Télécharger le fichier APK' : locale === 'de' ? 'APK-Datei herunterladen' : 'Download APK'),
            featuredOn: t.uiDetails?.featuredOn || (locale === 'vi' ? 'Nổi bật trên' : locale === 'es' ? 'Destacado en' : locale === 'pt-BR' ? 'Destaque no' : locale === 'id' ? 'Disorot di' : locale === 'fr' ? 'Mis en avant sur' : locale === 'de' ? 'Vorgestellt auf' : 'Featured on'),
            listedOn: t.uiDetails?.listedOn || (locale === 'vi' ? 'Có mặt trên' : locale === 'es' ? 'Disponible en' : locale === 'pt-BR' ? 'Disponível no' : locale === 'id' ? 'Terdaftar di' : locale === 'fr' ? 'Présent sur' : locale === 'de' ? 'Gelistet auf' : 'Listed on')
        };
        const localizedQuotes = quoteTranslations[locale];
        if (localizedQuotes) {
            const completeMedia = window.KEY_LAUNCHER_MEDIA_TRANSLATIONS?.[locale];
            c.media.articles.forEach((article, index) => {
                article.title = completeMedia?.[index]?.title || article.title;
                article.quote = completeMedia?.[index]?.quote || localizedQuotes[index];
            });
            const completeReviews = window.KEY_LAUNCHER_REVIEW_TRANSLATIONS?.[locale];
            c.testimonials.items.forEach((item, index) => {
                item.quote = completeReviews?.[index] || localizedQuotes[index + c.media.articles.length];
            });
            c.translationNote = t.ui[5];
        }
        document.title = t.meta[0];
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta[1]);
        document.querySelector('meta[name="title"]')?.setAttribute('content', t.meta[0]);
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.meta[0]);
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.meta[1]);
    }

    applyTranslation(translations[locale]);
    const demoLabels = {"en":"Watch the 2.0 demo","vi":"Xem demo phiên bản 2.0","es":"Ver la demo de la versión 2.0","pt-BR":"Ver a demonstração da versão 2.0","id":"Tonton demo versi 2.0","fr":"Voir la démo de la version 2.0","de":"Demo zur Version 2.0 ansehen"};
    const vaultStorageLabels = {"en":["Vault storage","Stored on your device"],"vi":["Lưu trữ Kho riêng tư","Lưu trên thiết bị"],"es":["Almacenamiento de la bóveda","En tu dispositivo"],"pt-BR":["Armazenamento do cofre","No seu dispositivo"],"id":["Penyimpanan brankas","Di perangkat Anda"],"fr":["Stockage du coffre","Sur votre appareil"],"de":["Tresorspeicher","Auf deinem Gerät"]};
    KEY_LAUNCHER_CONTENT.hero.demoText = demoLabels[locale];
    [KEY_LAUNCHER_CONTENT.features.items[6].footerLabel, KEY_LAUNCHER_CONTENT.features.items[6].footerValue] = vaultStorageLabels[locale];

    // Keep structured answers consistent with the visible localized FAQ.
    document.querySelectorAll?.('script[type="application/ld+json"]').forEach(script => {
        const schema = JSON.parse(script.textContent);
        const graph = schema['@graph'] || [schema];
        const faq = graph.find(item => item['@type'] === 'FAQPage');
        if (faq) faq.mainEntity = KEY_LAUNCHER_CONTENT.faq.items.map(item => ({
            '@type': 'Question', name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }));
        const app = graph.find(item => item['@type'] === 'SoftwareApplication');
        if (app && translations[locale]) app.description = translations[locale].meta[1];
        script.textContent = JSON.stringify(schema);
    });
    document.documentElement.lang = locale;
    window.KEY_LAUNCHER_I18N = { locale, supportedLocales };
})();
