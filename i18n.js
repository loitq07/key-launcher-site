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
            meta: ['Key Launcher - Trình khởi chạy T9 tối giản cho Android', 'Mở ứng dụng chỉ với 2 lần chạm. Cai nghiện kỹ thuật số, tiết kiệm pin tối đa và riêng tư tuyệt đối khi ngoại tuyến.'],
            navigation: ['Tính năng', 'Báo chí', 'Bảng giá', 'Đánh giá', 'Câu hỏi', 'Trợ giúp', 'Tải miễn phí'],
            hero: ['Bản phát hành mới nhất', 'Hai lần chạm.', 'Mở ứng dụng.', 'Đừng mất thời gian tìm kiếm giữa những màn hình lộn xộn và bị cuốn vào thông báo mạng xã hội. Key Launcher thay lưới ứng dụng thông thường bằng bàn phím T9 cổ điển. Chỉ cần nhấn 1-3 phím số, ứng dụng sẽ xuất hiện ngay.', '100+ đánh giá', 'Tính năng cốt lõi miễn phí', '100% không quảng cáo', 'Riêng tư ngoại tuyến'],
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
                ['Tìm kiếm T9 siêu nhanh', 'Mở bất kỳ ứng dụng nào chỉ với hai lần chạm.'],
                ['Gọi tức thì', 'Gọi, nhắn tin hoặc tìm kiếm ngay lập tức.'],
                ['Lời bài hát đồng bộ', 'Thư giãn cùng âm nhạc ngay trên màn hình chính.'],
                ['Trung tâm tiện ích', 'Mọi tiện ích yêu thích ở một nơi.'],
                ['Lịch & Chương trình', 'Lịch trình luôn trong tầm tay.'],
                ['Hẹn giờ Pomodoro', 'Chế độ làm việc sâu tích hợp.'],
                ['Kho riêng tư', 'Ẩn ứng dụng. Không đám mây. Không theo dõi.'],
                ['Material You & Kiểu chữ', 'Chủ đề mang đậm phong cách riêng của bạn.']
            ],
            focusBullets: [['Im lặng 1 chạm', 'Tắt ngay cảnh báo từ các ứng dụng gây xao nhãng.'], ['Trình phát nhạc', 'Thư giãn với lời bài hát đồng bộ ngay trên màn hình.'], ['Lịch & Chương trình', 'Xem toàn bộ lịch trình trong nháy mắt.'], ['Hẹn giờ Pomodoro', 'Bộ hẹn giờ giúp bạn duy trì tập trung.'], ['Trình chiếu album', 'Xem lại kỷ niệm yêu thích trong khi làm việc.'], ['Trò chơi T-Rex', 'Trò chơi ngoại tuyến cổ điển cho giờ nghỉ ngắn.']],
            pricing: ['Gói Miễn phí', 'Miễn phí', '/ trọn đời', 'Lý tưởng cho người muốn cai nghiện kỹ thuật số với giao diện gọn gàng và tốc độ cơ bản.', 'Tải miễn phí', 'Gói PRO', 'Tùy biến mọi khía cạnh của bố cục điện thoại theo phong cách của bạn.', 'Nâng cấp trong ứng dụng', 'Gói đăng ký 1 năm', 'Mua trọn đời', 'Giá dành cho', 'Giá cuối cùng được hiển thị trong ứng dụng.', 'Xem trong ứng dụng', 'Đề xuất'],
            pricingDetails: {
                planFeatures: [
                    ['Tìm kiếm T9 siêu nhanh (hỗ trợ dấu tiếng Việt)', 'Tối đa 8 mục ghim và 3 widget', '3 vị trí Siêu phím tắt (phím 1-3)', '1 mục bảo mật trong Kho riêng tư và 1 Giới hạn ứng dụng', 'Dùng thử 30 ngày Chế độ tập trung, lời bài hát đồng bộ, gói biểu tượng và sao lưu', 'Bao gồm chấm thông báo, thao tác nhanh và cử chỉ vuốt'],
                    ['Không giới hạn mục ghim và widget', 'Đủ 9 vị trí Siêu phím tắt và không giới hạn trang ứng dụng', 'Không giới hạn mục trong Kho riêng tư và Giới hạn ứng dụng', 'Đầy đủ Chế độ tập trung, lời bài hát đồng bộ và gói biểu tượng', 'Font tùy chỉnh, bảng màu bàn phím và Chế độ máy tính', 'Hình nền tự động, nguồn RSS không giới hạn và Sao lưu / Khôi phục']
                ],
                categoryNames: ['Cốt lõi', 'Bàn phím', 'Trung tâm widget', 'Xem nhanh', 'Siêu phím tắt & Phím nóng', 'Kho riêng tư', 'Chế độ tập trung', 'Âm nhạc', 'Giao diện', 'Sử dụng ứng dụng', 'Bảng tin khám phá', 'Cài đặt & Dữ liệu', 'Trứng phục sinh'],
                featureNames: [
                    ['Tìm kiếm T9 thông minh', 'Mục ghim', 'Cử chỉ vuốt', 'Tìm kiếm liên hệ', 'Ẩn ứng dụng & liên hệ', 'Chạm hai lần để khóa', 'Trang ứng dụng'],
                    ['Chế độ máy tính', 'Chuyển chế độ chuông', 'Bảng màu bàn phím'],
                    ['Số lượng widget', 'Hình nền tùy chỉnh'],
                    ['Widget đồng hồ', 'Widget lịch', 'Widget thời tiết', 'Widget xếp chồng'],
                    ['Siêu phím tắt'], ['Kho riêng tư'],
                    ['Chế độ tập trung', 'Màn hình luôn bật'],
                    ['Điều khiển nhạc', 'Lời bài hát đồng bộ'],
                    ['Tùy chọn hình nền', 'Tự động đổi hình nền', 'Hỗ trợ gói biểu tượng', 'Font tùy chỉnh', 'Tùy chỉnh biểu tượng', 'Chấm thông báo', 'Lớp phủ hình nền'],
                    ['Theo dõi sử dụng ứng dụng'], ['Nguồn cấp RSS'], ['Sao lưu & Khôi phục'], ['Trò chơi T-Rex']
                ],
                values: {'8 items': '8 mục', 'Unlimited': 'Không giới hạn', '2 pages': '2 trang', '30-day trial': 'Dùng thử 30 ngày', '3 widgets': '3 widget', '3 slots': '3 vị trí', 'All 9 slots': 'Đủ 9 vị trí', '1 item': '1 mục', '1 app': '1 ứng dụng', '3 sources': '3 nguồn'},
                labels: ['So sánh tính năng chi tiết', 'Tính năng', 'Miễn phí', 'Hiển thị tất cả tính năng', 'Thu gọn', 'Xem giá PRO theo khu vực của bạn trong ứng dụng.'],
                regional: ['Giá được hiển thị bằng USD. Google Play sẽ tính mức giá được đặt cho quốc gia của tài khoản.', 'Thấp hơn giá toàn cầu {pct}%, được điều chỉnh theo sức mua địa phương.', 'Không bao giờ giảm giá. Giá chỉ tăng — mua sớm hơn, trả ít hơn. Giá mua trọn đời sẽ không bị thay đổi.']
            },
            faq: [
                ['Trình khởi chạy ứng dụng T9 là gì?', 'Trình khởi chạy T9 dùng bàn phím 3x4 cổ điển để tìm và mở ứng dụng. Mỗi phím đại diện cho nhiều chữ cái; chỉ cần 2-3 lần nhấn để lọc và mở ứng dụng, giúp màn hình chính gọn hơn.'],
                ['Key Launcher có an toàn và riêng tư không?', 'Có. Key Launcher hoạt động hoàn toàn ngoại tuyến trên thiết bị, không thu thập dữ liệu cá nhân và không tải thống kê sử dụng lên máy chủ đám mây.'],
                ['Key Launcher có hỗ trợ gói biểu tượng và hình nền tùy chỉnh không?', 'Có. Bạn có thể dùng gói biểu tượng, màu hệ thống, kiểu chữ và hình nền tự động. Một số tùy chỉnh nâng cao thuộc gói PRO.'],
                ['Key Launcher có làm hao pin không?', 'Không. Ứng dụng dùng kiến trúc Android gốc hiệu quả, không đồng bộ mạng nền, không quảng cáo và có bố cục tối giản được tối ưu cao.'],
                ['Hỗ trợ những tích hợp gọi điện và nhắn tin nào?', 'Bạn có thể gọi, gửi SMS hoặc mở WhatsApp, Zalo và Viber trực tiếp bằng cách nhập tên liên hệ hoặc số điện thoại.'],
                ['Tôi có thể thử tính năng PRO trước khi mua không?', 'Có. Bạn được dùng thử 30 ngày các tính năng PRO cốt lõi như Chế độ tập trung, lời bài hát đồng bộ và gói biểu tượng.']
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
                    {
                        name: 'Tìm kiếm T9 siêu nhanh',
                        desc: 'Mở ứng dụng chỉ với 1-2 lần bấm phím',
                        keyLauncher: 'Có (Tức thì)',
                        niagara: '❌ Cuộn chữ cái alphabet',
                        minimalistPhone: '❌ Danh sách văn bản',
                        olauncher: '❌ Gõ tìm kiếm văn bản'
                    },
                    {
                        name: 'Bàn phím QWERTY & Vuốt lướt (Swipe)',
                        desc: 'Lướt ngón tay tìm kiếm siêu tốc độ',
                        keyLauncher: 'Có (Cả hai)',
                        niagara: '❌',
                        minimalistPhone: '❌',
                        olauncher: '❌'
                    },
                    {
                        name: 'Nhiều Kho riêng tư bảo mật',
                        desc: 'Tách biệt nhiều không gian khóa PIN / vân tay',
                        keyLauncher: 'Không giới hạn kho',
                        niagara: 'Chỉ ẩn ứng dụng',
                        minimalistPhone: 'Chỉ chặn ứng dụng',
                        olauncher: 'Chỉ ẩn ứng dụng'
                    },
                    {
                        name: 'Siêu tập trung & Lời bài hát đồng bộ',
                        desc: 'Tích hợp Pomodoro, đồng hồ để bàn & lời bài hát',
                        keyLauncher: 'Tích hợp sẵn',
                        niagara: '❌',
                        minimalistPhone: '❌',
                        olauncher: '❌'
                    },
                    {
                        name: '100% Ngoại tuyến & Không theo dõi',
                        desc: 'Không cần tài khoản đám mây, không thu thập dữ liệu, không quảng cáo',
                        keyLauncher: '100% Ngoại tuyến',
                        niagara: 'Dùng API đám mây',
                        minimalistPhone: 'Bắt buộc tài khoản',
                        olauncher: '✅ Ngoại tuyến'
                    },
                    {
                        name: 'Mô hình giá & Chi phí',
                        desc: 'Mức giá hợp lý và bền vững',
                        keyLauncherMain: 'Bản miễn phí đầy đủ',
                        keyLauncherSub: 'Tùy chọn trọn đời giá rẻ',
                        niagara: 'Thuê bao theo năm',
                        minimalistPhone: 'Thuê bao đắt đỏ ($20+/năm)',
                        olauncher: 'Miễn phí / Ủng hộ'
                    }
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
            meta: ['Key Launcher - Lanzador T9 minimalista para Android', 'Abre aplicaciones en solo 2 toques. Desintoxicación digital, gran ahorro de batería y privacidad total sin conexión.'],
            navigation: ['Funciones', 'Prensa', 'Precios', 'Reseñas', 'Preguntas', 'Ayuda', 'Descargar gratis'],
            hero: ['Última versión', 'Dos toques.', 'Abre apps.', 'Deja de perder tiempo entre pantallas desordenadas y notificaciones sociales. Key Launcher sustituye la cuadrícula de apps por un teclado T9 clásico. Pulsa de 1 a 3 teclas y tu aplicación aparecerá al instante.', '100+ reseñas', 'Funciones esenciales gratis', '100% sin anuncios', 'Privacidad sin conexión'],
            sections: {media: ['Prensa y reseñas', 'Descubre qué opinan periodistas tecnológicos y creadores sobre el enfoque minimalista de Key Launcher.', 'Ver la reseña completa'], features: ['Diseñado para la velocidad. Optimizado para concentrarte.', 'Reduce la dependencia del móvil y simplifica tu rutina con funciones prácticas y sin distracciones.'], focus: ['Súper concentración', 'Silencia las distracciones. <br class="hidden sm:inline">Apaga el ruido.', 'Convierte tu dispositivo en un compañero de escritorio minimalista. Silencia las notificaciones y accede a música, calendario, Pomodoro, fotos y un juego sin conexión.'], pricing: ['Precios transparentes', 'Úsalo gratis. <br class="sm:hidden">Mejora a PRO.', 'Las funciones esenciales son gratis y sin anuncios para siempre. Mejora a PRO con una suscripción anual o una compra de por vida.'], testimonials: ['Opiniones de usuarios', 'Usuarios reales. <br class="sm:hidden">Reseñas reales.'], faq: ['Preguntas comunes', 'Preguntas frecuentes', 'Encuentra respuestas a las preguntas más habituales sobre Key Launcher.'], cta: ['¿Listo para sentir la velocidad T9?', 'Descarga Key Launcher en Android para simplificar tus tareas, ser más productivo y recuperar tiempo de pantalla.', 'Gratis en Play Store']},
            features: [['Búsqueda T9 ultrarrápida', 'Abre cualquier app en dos toques.'], ['Llamada instantánea', 'Llama, envía mensajes o busca al instante.'], ['Letras sincronizadas', 'Disfruta de la música en tu pantalla de inicio.'], ['Centro de widgets', 'Tus widgets favoritos en un solo lugar.'], ['Calendario y agenda', 'Tu agenda siempre a mano.'], ['Temporizador Pomodoro', 'Modo de trabajo profundo integrado.'], ['Bóveda privada', 'Oculta apps. Sin nube. Sin seguimiento.'], ['Material You y tipografía', 'Temas que se sienten realmente tuyos.']],
            focusBullets: [['Silencio en 1 toque', 'Silencia al instante las alertas que te distraen.'], ['Reproductor de música', 'Relájate con letras sincronizadas en pantalla.'], ['Calendario y agenda', 'Consulta tu agenda de un vistazo.'], ['Temporizador Pomodoro', 'Mantén la concentración con intervalos integrados.'], ['Presentación de álbum', 'Recorre tus recuerdos favoritos mientras trabajas.'], ['Juego T-Rex', 'Un clásico sin conexión para descansos cortos.']],
            pricing: ['Plan gratuito', 'Gratis', '/ de por vida', 'Ideal para quien busca una interfaz limpia y rápida.', 'Descargar gratis', 'Plan PRO', 'Adapta cada detalle de tu pantalla a tu estilo.', 'Mejorar en la app', 'Suscripción de 1 año', 'Compra de por vida', 'Precios para', 'Los precios finales se muestran en la app.', 'Ver en la app', 'Recomendado'],
            pricingDetails: {
                planFeatures: [
                    ['Búsqueda T9 ultrarrápida', 'Hasta 8 elementos fijados y 3 widgets', '3 accesos directos Súper Atajos (teclas 1-3)', '1 elemento en la Bóveda Privada y 1 Límite de app', 'Prueba de 30 días de Modo Concentración, letras sincronizadas, paquetes de iconos y copias de seguridad', 'Puntos de notificación, acciones rápidas y gestos de deslizamiento incluidos'],
                    ['Elementos fijados y widgets ilimitados', 'Los 9 accesos directos Súper Atajos y páginas de apps ilimitadas', 'Elementos ilimitados en la Bóveda Privada y Límites de app', 'Modo Concentración completo, letras sincronizadas y paquetes de iconos', 'Fuentes personalizadas, temas de color para el teclado y Modo Calculadora', 'Fondo de pantalla automático, fuentes RSS ilimitadas y Copia de seguridad / Restauración']
                ],
                categoryNames: ['Básico', 'Teclado', 'Centro de widgets', 'Vistazo rápido', 'Súper Atajos y Teclas rápidas', 'Bóveda privada', 'Modo concentración', 'Música', 'Apariencia', 'Uso de aplicaciones', 'Feed de noticias', 'Ajustes y datos', 'Huevo de pascua'],
                featureNames: [
                    ['Búsqueda inteligente T9', 'Elementos fijados', 'Gestos de deslizamiento', 'Búsqueda de contactos', 'Ocultar apps y contactos', 'Doble toque para bloquear', 'Páginas de apps'],
                    ['Modo calculadora', 'Alternar timbre', 'Paletas de color del teclado'],
                    ['Cantidad de widgets', 'Fondo de pantalla personalizado'],
                    ['Widget de reloj', 'Widget de calendario', 'Widget del tiempo', 'Widgets apilados'],
                    ['Súper Atajos'], ['Bóveda privada'],
                    ['Modo concentración', 'Pantalla siempre encendida'],
                    ['Controles de música', 'Letras sincronizadas'],
                    ['Opciones de fondo de pantalla', 'Cambio automático de fondo', 'Soporte para paquetes de iconos', 'Fuentes personalizadas', 'Personalización de iconos', 'Puntos de notificación', 'Superposición de fondo'],
                    ['Seguimiento de uso de apps'], ['Fuentes de noticias RSS'], ['Copia de seguridad y restauración'], ['Juego T-Rex']
                ],
                values: {'8 items': '8 elementos', 'Unlimited': 'Ilimitado', '2 pages': '2 páginas', '30-day trial': 'Prueba de 30 días', '3 widgets': '3 widgets', '3 slots': '3 ranuras', 'All 9 slots': 'Las 9 ranuras', '1 item': '1 elemento', '1 app': '1 app', '3 sources': '3 fuentes'},
                labels: ['Comparativa detallada de funciones', 'Función', 'Gratis', 'Mostrar todas las funciones', 'Mostrar menos', 'Consulta los precios PRO para tu región en la app.'],
                regional: ['Los precios se muestran en USD. Google Play cobrará el precio establecido para el país de tu cuenta.', 'Un {pct}% por debajo del precio global, ajustado al poder adquisitivo local.', 'Sin descuentos, nunca. Los precios solo suben: compra antes, paga menos. Las compras de por vida nunca se vuelven a cobrar.']
            },
            faq: [['¿Qué es un lanzador T9?', 'Usa el teclado clásico 3x4 para buscar y abrir apps. Cada tecla representa varias letras, por lo que bastan 2 o 3 pulsaciones para encontrar una aplicación.'], ['¿Key Launcher es seguro y privado?', 'Sí. Funciona de forma local y sin conexión, no recopila datos personales ni envía estadísticas de uso a la nube.'], ['¿Admite paquetes de iconos y fondos personalizados?', 'Sí. Admite iconos, colores del sistema, tipografías y cambios automáticos de fondo. Algunas opciones avanzadas requieren PRO.'], ['¿Consumirá más batería?', 'No. Usa una arquitectura Android nativa eficiente, sin sincronización en segundo plano ni anuncios.'], ['¿Qué integraciones de llamadas y mensajes admite?', 'Puedes llamar, enviar SMS o abrir WhatsApp, Zalo y Viber directamente al escribir un contacto o número.'], ['¿Puedo probar PRO antes de comprar?', 'Sí. Incluye una prueba de 30 días de las funciones PRO principales.']],
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
                    { name: 'Búsqueda T9 rápida', desc: 'Abre cualquier app en 1-2 pulsaciones', keyLauncher: 'Sí (Instantáneo)', niagara: '❌ Desplazamiento alfabético', minimalistPhone: '❌ Lista de texto', olauncher: '❌ Búsqueda de texto' },
                    { name: 'QWERTY y escritura por deslizamiento', desc: 'Desliza sobre el teclado a máxima velocidad', keyLauncher: 'Sí (Ambos)', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: 'Múltiples bóvedas privadas', desc: 'Espacios separados con PIN o huella', keyLauncher: 'Bóvedas ilimitadas', niagara: 'Solo ocultar apps', minimalistPhone: 'Solo bloqueador de apps', olauncher: 'Solo ocultar apps' },
                    { name: 'Súper concentración y letras de música', desc: 'Pomodoro, reloj de escritorio y letras sincronizadas', keyLauncher: 'Integrado', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: '100% offline y sin seguimiento', desc: 'Sin cuentas en la nube, analíticas ni anuncios', keyLauncher: '100% sin conexión', niagara: 'APIs en la nube', minimalistPhone: 'Requiere cuenta', olauncher: '✅ Sin conexión' },
                    { name: 'Modelo de precios', desc: 'Precios justos y sostenibles', keyLauncherMain: 'Esencial gratis', keyLauncherSub: 'Opción de por vida asequible', niagara: 'Suscripción anual', minimalistPhone: 'Suscripción cara ($20+/año)', olauncher: 'Gratis / Donación' }
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
            meta: ['Key Launcher - Launcher T9 minimalista para Android', 'Abra apps em apenas 2 toques. Detox digital, alta economia de bateria e privacidade total offline.'],
            navigation: ['Recursos', 'Imprensa', 'Preços', 'Avaliações', 'Dúvidas', 'Ajuda', 'Baixar grátis'],
            hero: ['Versão mais recente', 'Dois toques.', 'Abra apps.', 'Pare de perder tempo em telas desorganizadas e notificações sociais. O Key Launcher troca a grade de apps por um teclado T9 clássico. Pressione de 1 a 3 teclas e seu app aparece na hora.', '100+ avaliações', 'Recursos essenciais grátis', '100% sem anúncios', 'Privacidade offline'],
            sections: {media: ['Na imprensa e avaliações', 'Veja o que jornalistas de tecnologia e criadores dizem sobre a abordagem minimalista do Key Launcher.', 'Assista à avaliação completa'], features: ['Feito para velocidade. Otimizado para foco.', 'Reduza a dependência do celular e simplifique sua rotina com recursos práticos e sem distrações.'], focus: ['Super Foco', 'Silencie as distrações. <br class="hidden sm:inline">Corte o ruído.', 'Transforme seu aparelho em um companheiro de mesa minimalista. Silencie notificações e acesse música, agenda, Pomodoro, fotos e um jogo offline.'], pricing: ['Preços transparentes', 'Use grátis. <br class="sm:hidden">Atualize para PRO.', 'Os recursos essenciais são grátis e sem anúncios para sempre. Assine anualmente ou compre o PRO uma única vez.'], testimonials: ['Opiniões de usuários', 'Usuários reais. <br class="sm:hidden">Avaliações reais.'], faq: ['Dúvidas comuns', 'Perguntas frequentes', 'Encontre respostas para as perguntas mais comuns sobre o Key Launcher.'], cta: ['Pronto para sentir a velocidade do T9?', 'Baixe o Key Launcher no Android para simplificar tarefas, aumentar a produtividade e recuperar seu tempo de tela.', 'Grátis na Play Store']},
            features: [['Busca T9 ultrarrápida', 'Abra qualquer app em dois toques.'], ['Chamada instantânea', 'Ligue, envie mensagens ou pesquise na hora.'], ['Letras sincronizadas', 'Curta música na tela inicial.'], ['Central de widgets', 'Seus widgets favoritos em um só lugar.'], ['Calendário e agenda', 'Sua agenda sempre à mão.'], ['Timer Pomodoro', 'Modo de trabalho profundo integrado.'], ['Cofre privado', 'Oculte apps. Sem nuvem. Sem rastreamento.'], ['Material You e tipografia', 'Temas com a sua cara.']],
            focusBullets: [['Silêncio em 1 toque', 'Silencie alertas de apps que distraem.'], ['Player de música', 'Relaxe com letras sincronizadas na tela.'], ['Calendário e agenda', 'Confira seus compromissos rapidamente.'], ['Timer Pomodoro', 'Mantenha o foco com intervalos integrados.'], ['Apresentação de fotos', 'Reveja memórias enquanto trabalha.'], ['Jogo T-Rex', 'Um clássico offline para pausas rápidas.']],
            pricing: ['Plano grátis', 'Grátis', '/ para sempre', 'Ideal para quem busca uma interface limpa e rápida.', 'Baixar grátis', 'Plano PRO', 'Personalize cada detalhe da tela ao seu estilo.', 'Atualizar no app', 'Assinatura de 1 ano', 'Compra vitalícia', 'Preços para', 'Os preços finais são exibidos no app.', 'Ver no app', 'Recomendado'],
            pricingDetails: {
                planFeatures: [
                    ['Busca T9 ultrarrápida', 'Até 8 itens fixados e 3 widgets', '3 slots de Super Atalhos (teclas 1-3)', '1 item no Cofre Privado e 1 Limite de App', '30 dias de teste do Modo Foco, letras sincronizadas, pacotes de ícones e backup', 'Pontos de notificação, ações rápidas e gestos de deslizamento incluídos'],
                    ['Itens fixados e widgets ilimitados', 'Todos os 9 slots de Super Atalhos e páginas de apps ilimitadas', 'Itens ilimitados no Cofre Privado e Limites de App', 'Modo Foco completo, letras sincronizadas e pacotes de ícones', 'Fontes personalizadas, predefinições de cor do teclado e Modo Calculadora', 'Papel de parede automático, fontes RSS ilimitadas e Backup / Restauração']
                ],
                categoryNames: ['Principal', 'Teclado', 'Central de widgets', 'Visão rápida', 'Super Atalhos e Teclas rápidas', 'Cofre privado', 'Modo foco', 'Música', 'Aparência', 'Uso de aplicativos', 'Feed de notícias', 'Configurações e dados', 'Easter egg'],
                featureNames: [
                    ['Busca inteligente T9', 'Itens fixados', 'Gestos de deslizamento', 'Busca de contatos', 'Ocultar apps e contatos', 'Toque duplo para bloquear', 'Páginas de apps'],
                    ['Modo calculadora', 'Alternar toque', 'Predefinições de cor do teclado'],
                    ['Quantidade de widgets', 'Papel de parede personalizado'],
                    ['Widget de relógio', 'Widget de calendário', 'Widget de clima', 'Widgets empilhados'],
                    ['Super Atalhos'], ['Cofre privado'],
                    ['Modo foco', 'Tela sempre ativa'],
                    ['Controles de música', 'Letras sincronizadas'],
                    ['Opções de papel de parede', 'Troca automática de papel de parede', 'Suporte a pacotes de ícones', 'Fontes personalizadas', 'Personalização de ícones', 'Pontos de notificação', 'Sobreposição de papel de parede'],
                    ['Monitoramento de uso de apps'], ['Fontes de feed RSS'], ['Backup e restauração'], ['Jogo T-Rex']
                ],
                values: {'8 items': '8 itens', 'Unlimited': 'Ilimitado', '2 pages': '2 páginas', '30-day trial': '30 dias de teste', '3 widgets': '3 widgets', '3 slots': '3 slots', 'All 9 slots': 'Todos os 9 slots', '1 item': '1 item', '1 app': '1 app', '3 sources': '3 fontes'},
                labels: ['Comparação detalhada de recursos', 'Recurso', 'Grátis', 'Mostrar todos os recursos', 'Mostrar menos', 'Veja os preços do PRO para a sua região no app.'],
                regional: ['Preços exibidos em USD. O Google Play cobrará o preço definido para o país da sua conta.', '{pct}% abaixo do preço global, ajustado ao poder de compra local.', 'Sem promoções, nunca. Os preços apenas aumentam — compre mais cedo, pague menos. As compras vitalícias nunca têm o valor alterado.']
            },
            faq: [['O que é um launcher T9?', 'Ele usa o teclado clássico 3x4 para encontrar e abrir apps. Cada tecla representa várias letras, e bastam 2 ou 3 toques para localizar um aplicativo.'], ['O Key Launcher é seguro e privado?', 'Sim. Ele funciona localmente e offline, não coleta dados pessoais nem envia estatísticas para a nuvem.'], ['Aceita pacotes de ícones e papéis de parede?', 'Sim. Há suporte a ícones, cores do sistema, fontes e troca automática de papel de parede. Algumas opções avançadas exigem PRO.'], ['O Key Launcher consome bateria?', 'Não. Ele usa arquitetura Android nativa eficiente, sem sincronização em segundo plano ou anúncios.'], ['Quais integrações de chamadas e mensagens são aceitas?', 'Você pode ligar, enviar SMS ou abrir WhatsApp, Zalo e Viber digitando um contato ou número.'], ['Posso testar o PRO antes de comprar?', 'Sim. Há um teste grátis de 30 dias dos principais recursos PRO.']],
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
                    { name: 'Busca T9 rápida', desc: 'Abra qualquer app em 1-2 toques', keyLauncher: 'Sim (Instantâneo)', niagara: '❌ Rolagem alfabética', minimalistPhone: '❌ Lista de texto', olauncher: '❌ Busca por texto' },
                    { name: 'QWERTY e digitação por gesto', desc: 'Deslize pelas teclas com agilidade', keyLauncher: 'Sim (Ambos)', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: 'Múltiplos cofres privados', desc: 'Espaços protegidos por PIN ou biometria', keyLauncher: 'Cofres ilimitados', niagara: 'Apenas ocultar apps', minimalistPhone: 'Apenas bloqueador de apps', olauncher: 'Apenas ocultar apps' },
                    { name: 'Super Foco e letras de música', desc: 'Pomodoro integrado, relógio de mesa e letras', keyLauncher: 'Integrado', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: '100% offline e sem rastreamento', desc: 'Sem contas na nuvem, telemetria ou anúncios', keyLauncher: '100% offline', niagara: 'APIs na nuvem', minimalistPhone: 'Exige conta', olauncher: '✅ Offline' },
                    { name: 'Modelo de preços', desc: 'Preços justos e sustentáveis', keyLauncherMain: 'Gratuito essencial', keyLauncherSub: 'Opção vitalícia acessível', niagara: 'Assinatura anual', minimalistPhone: 'Assinatura cara ($20+/ano)', olauncher: 'Grátis / Doação' }
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
            meta: ['Key Launcher - Peluncur T9 minimalis untuk Android', 'Buka aplikasi hanya dengan 2 ketukan. Detoks digital, hemat baterai, dan privasi offline sepenuhnya.'],
            navigation: ['Fitur', 'Media', 'Harga', 'Ulasan', 'Tanya jawab', 'Bantuan', 'Unduh gratis'],
            hero: ['Rilis terbaru', 'Dua Ketukan.', 'Buka Aplikasi.', 'Berhenti membuang waktu di layar yang berantakan dan notifikasi sosial. Key Launcher mengganti kisi aplikasi dengan papan tombol T9 klasik. Tekan 1-3 tombol dan aplikasi langsung muncul.', '100+ ulasan', 'Fitur inti gratis', '100% bebas iklan', 'Privasi offline'],
            sections: {media: ['Liputan & Ulasan', 'Lihat pendapat jurnalis teknologi dan kreator tentang pendekatan minimalis Key Launcher.', 'Tonton ulasan lengkap'], features: ['Dirancang untuk cepat. Dioptimalkan untuk fokus.', 'Kurangi ketergantungan pada ponsel dan sederhanakan rutinitas dengan fitur praktis tanpa gangguan.'], focus: ['Fokus Super', 'Bisukan gangguan. <br class="hidden sm:inline">Redam kebisingan.', 'Ubah perangkat menjadi pendamping meja minimalis. Bisukan notifikasi dan akses musik, kalender, Pomodoro, foto, serta gim offline.'], pricing: ['Harga transparan', 'Gunakan gratis. <br class="sm:hidden">Tingkatkan ke PRO.', 'Fitur inti gratis dan bebas iklan selamanya. Tingkatkan ke PRO dengan langganan tahunan atau pembelian seumur hidup.'], testimonials: ['Masukan pengguna', 'Pengguna nyata. <br class="sm:hidden">Ulasan nyata.'], faq: ['Pertanyaan umum', 'Tanya Jawab', 'Temukan jawaban atas pertanyaan paling umum tentang Key Launcher.'], cta: ['Siap merasakan kecepatan T9?', 'Unduh Key Launcher di Android untuk menyederhanakan tugas, meningkatkan produktivitas, dan mengambil kembali waktu layar.', 'Gratis di Play Store']},
            features: [['Pencarian T9 super cepat', 'Buka aplikasi apa pun dalam dua ketukan.'], ['Panggilan instan', 'Telepon, kirim pesan, atau cari seketika.'], ['Lirik tersinkron', 'Nikmati musik di layar utama.'], ['Pusat widget', 'Widget favorit dalam satu tempat.'], ['Kalender & agenda', 'Agenda selalu dalam genggaman.'], ['Timer Pomodoro', 'Mode kerja mendalam bawaan.'], ['Brankas pribadi', 'Sembunyikan aplikasi. Tanpa cloud. Tanpa pelacakan.'], ['Material You & tipografi', 'Tema yang benar-benar terasa milik Anda.']],
            focusBullets: [['Hening 1 ketukan', 'Bisukan peringatan aplikasi yang mengganggu.'], ['Pemutar musik', 'Nikmati lirik tersinkron di layar.'], ['Kalender & agenda', 'Lihat agenda dengan cepat.'], ['Timer Pomodoro', 'Jaga fokus dengan interval bawaan.'], ['Tayangan album', 'Nikmati kenangan saat bekerja.'], ['Gim T-Rex', 'Gim offline klasik untuk rehat singkat.']],
            pricing: ['Paket Gratis', 'Gratis', '/ selamanya', 'Cocok untuk antarmuka yang bersih dan cepat.', 'Unduh gratis', 'Paket PRO', 'Sesuaikan setiap bagian layar dengan gaya Anda.', 'Tingkatkan di aplikasi', 'Langganan 1 tahun', 'Pembelian seumur hidup', 'Harga untuk', 'Harga akhir ditampilkan di aplikasi.', 'Lihat di aplikasi', 'Direkomendasikan'],
            pricingDetails: {
                planFeatures: [
                    ['Pencarian T9 super cepat', 'Hingga 8 item tersemat & 3 widget', '3 slot Pintasan Super (tombol 1-3)', '1 item aman di Brankas Pribadi & 1 Batas Aplikasi', 'Uji coba 30 hari Mode Fokus, lirik tersinkron, paket ikon & cadangan', 'Titik notifikasi, tindakan cepat & gestur geser disertakan'],
                    ['Item tersemat & widget tak terbatas', 'Semua 9 slot Pintasan Super & halaman aplikasi tak terbatas', 'Item Brankas Pribadi & Batas Aplikasi tak terbatas', 'Mode Fokus penuh, lirik tersinkron & paket ikon', 'Font khusus, tema warna keyboard & Mode Kalkulator', 'Wallpaper otomatis, sumber RSS tak terbatas & Cadangkan / Pulihkan']
                ],
                categoryNames: ['Inti', 'Keyboard', 'Pusat Widget', 'Sekilas Pandang', 'Pintasan Super & Tombol Cepat', 'Brankas Pribadi', 'Mode Fokus', 'Musik', 'Tampilan', 'Penggunaan Aplikasi', 'Umpan Penemuan', 'Pengaturan & Data', 'Easter Egg'],
                featureNames: [
                    ['Pencarian Cerdas T9', 'Item Tersemat', 'Gestur Geser', 'Pencarian Kontak', 'Sembunyikan Aplikasi & Kontak', 'Ketuk Dua Kali untuk Mengunci', 'Halaman Aplikasi'],
                    ['Mode Kalkulator', 'Alihkan Nada Dering', 'Preset Warna Keyboard'],
                    ['Jumlah Widget', 'Wallpaper Khusus'],
                    ['Widget Jam', 'Widget Kalender', 'Widget Cuaca', 'Widget Tumpuk'],
                    ['Pintasan Super'], ['Brankas Pribadi'],
                    ['Mode Fokus', 'Layar Selalu Aktif'],
                    ['Kontrol Musik', 'Lirik Tersinkron'],
                    ['Pilihan Wallpaper', 'Ganti Wallpaper Otomatis', 'Dukungan Paket Ikon', 'Font Khusus', 'Kustomisasi Ikon', 'Titik Notifikasi', 'Lapisan Wallpaper'],
                    ['Pelacakan Penggunaan Aplikasi'], ['Sumber Umpan RSS'], ['Cadangkan & Pulihkan'], ['Gim T-Rex']
                ],
                values: {'8 items': '8 item', 'Unlimited': 'Tak Terbatas', '2 pages': '2 halaman', '30-day trial': 'Uji coba 30 hari', '3 widgets': '3 widget', '3 slots': '3 slot', 'All 9 slots': 'Semua 9 slot', '1 item': '1 item', '1 app': '1 aplikasi', '3 sources': '3 sumber'},
                labels: ['Perbandingan Fitur Terperinci', 'Fitur', 'Gratis', 'Tampilkan Semua Fitur', 'Tampilkan Lebih Sedikit', 'Lihat harga PRO lokal Anda di dalam aplikasi.'],
                regional: ['Harga ditampilkan dalam USD. Google Play menagih harga yang ditetapkan untuk negara akun Anda.', '{pct}% lebih murah dari harga global, disesuaikan dengan daya beli lokal.', 'Tidak pernah ada diskon. Harga hanya naik — beli lebih awal, bayar lebih murah. Pembelian seumur hidup tidak pernah berubah harga.']
            },
            faq: [['Apa itu peluncur aplikasi T9?', 'Peluncur T9 memakai tombol 3x4 klasik untuk mencari dan membuka aplikasi. Setiap tombol mewakili beberapa huruf, sehingga aplikasi dapat ditemukan dalam 2-3 ketukan.'], ['Apakah Key Launcher aman dan privat?', 'Ya. Aplikasi bekerja sepenuhnya offline dan lokal, tidak mengumpulkan data pribadi atau mengunggah statistik penggunaan.'], ['Apakah mendukung paket ikon dan wallpaper?', 'Ya. Tersedia ikon, warna sistem, tipografi, dan wallpaper otomatis. Beberapa kustomisasi lanjutan memerlukan PRO.'], ['Apakah Key Launcher menguras baterai?', 'Tidak. Arsitektur Android native yang efisien, tanpa sinkronisasi jaringan latar atau iklan, membantu menghemat daya.'], ['Integrasi panggilan dan pesan apa yang didukung?', 'Anda dapat menelepon, mengirim SMS, atau membuka WhatsApp, Zalo, dan Viber dengan mengetik kontak atau nomor.'], ['Bisakah saya mencoba PRO sebelum membeli?', 'Ya. Tersedia uji coba gratis 30 hari untuk fitur PRO utama.']],
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
                    { name: 'Pencarian T9 Cepat', desc: 'Buka aplikasi apa pun dalam 1-2 ketukan', keyLauncher: 'Ya (Instan)', niagara: '❌ Gulir alfabet', minimalistPhone: '❌ Daftar teks', olauncher: '❌ Pencarian teks' },
                    { name: 'QWERTY & Ketik Geser (Swipe)', desc: 'Luncurkan jari untuk kecepatan kilat', keyLauncher: 'Ya (Keduanya)', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: 'Banyak Brankas Pribadi', desc: 'Ruang terpisah terkunci PIN / biometrik', keyLauncher: 'Brankas Tak Terbatas', niagara: 'Hanya sembunyikan app', minimalistPhone: 'Hanya pemblokir app', olauncher: 'Hanya sembunyikan app' },
                    { name: 'Fokus Super & Lirik Musik', desc: 'Pomodoro bawaan, jam meja & lirik tersinkron', keyLauncher: 'Bawaan', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: '100% Offline & Tanpa Pelacakan', desc: 'Tanpa akun cloud, analitik, atau iklan', keyLauncher: '100% Offline', niagara: 'API Cloud', minimalistPhone: 'Perlu akun', olauncher: '✅ Offline' },
                    { name: 'Model Harga', desc: 'Harga adil dan berkelanjutan', keyLauncherMain: 'Fitur Inti Gratis', keyLauncherSub: 'Opsi Seumur Hidup Terjangkau', niagara: 'Langganan Tahunan', minimalistPhone: 'Langganan Mahal ($20+/thn)', olauncher: 'Gratis / Donasi' }
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
            meta: ['Key Launcher - Lanceur T9 minimaliste pour Android', 'Lancez vos applications en 2 gestes. Détox numérique, économie de batterie et confidentialité totale hors ligne.'],
            navigation: ['Fonctions', 'Presse', 'Tarifs', 'Avis', 'FAQ', 'Aide', 'Télécharger'],
            hero: ['Dernière version', 'Deux gestes.', 'Lancez vos apps.', 'Ne perdez plus de temps dans des écrans encombrés et les notifications sociales. Key Launcher remplace la grille d’applications par un clavier T9 classique. Appuyez sur 1 à 3 touches et votre application apparaît.', '100+ avis', 'Fonctions essentielles gratuites', '100 % sans publicité', 'Confidentialité hors ligne'],
            sections: {media: ['Presse et avis', 'Découvrez ce que les journalistes tech et les créateurs pensent de l’approche minimaliste de Key Launcher.', 'Voir l’avis complet'], features: ['Pensé pour la vitesse. Optimisé pour la concentration.', 'Réduisez votre dépendance au téléphone et simplifiez votre quotidien avec des fonctions pratiques et sans distraction.'], focus: ['Super Focus', 'Coupez les distractions. <br class="hidden sm:inline">Faites taire le bruit.', 'Transformez votre appareil en compagnon de bureau minimaliste. Coupez les notifications et accédez à la musique, au calendrier, au Pomodoro, aux photos et à un jeu hors ligne.'], pricing: ['Tarifs transparents', 'Utilisez-le gratuitement. <br class="sm:hidden">Passez à PRO.', 'Les fonctions essentielles restent gratuites et sans publicité. Passez à PRO avec un abonnement annuel ou un achat à vie.'], testimonials: ['Avis des utilisateurs', 'De vrais utilisateurs. <br class="sm:hidden">De vrais avis.'], faq: ['Questions courantes', 'Questions fréquentes', 'Trouvez les réponses aux questions les plus fréquentes sur Key Launcher.'], cta: ['Prêt à découvrir la vitesse du T9 ?', 'Téléchargez Key Launcher sur Android pour simplifier vos tâches, gagner en productivité et reprendre le contrôle de votre temps d’écran.', 'Gratuit sur le Play Store']},
            features: [['Recherche T9 ultra-rapide', 'Lancez toute application en deux gestes.'], ['Appel instantané', 'Appelez, envoyez un message ou cherchez immédiatement.'], ['Paroles synchronisées', 'Profitez de la musique sur l’écran d’accueil.'], ['Centre de widgets', 'Tous vos widgets préférés au même endroit.'], ['Calendrier et agenda', 'Votre agenda à portée de main.'], ['Minuteur Pomodoro', 'Mode de travail profond intégré.'], ['Coffre privé', 'Masquez les apps. Sans cloud. Sans suivi.'], ['Material You et typographie', 'Des thèmes qui vous ressemblent.']],
            focusBullets: [['Silence en 1 geste', 'Coupez les alertes des applications distrayantes.'], ['Lecteur de musique', 'Profitez des paroles synchronisées à l’écran.'], ['Calendrier et agenda', 'Consultez votre agenda d’un coup d’œil.'], ['Minuteur Pomodoro', 'Restez concentré grâce aux intervalles intégrés.'], ['Diaporama album', 'Revivez vos souvenirs pendant que vous travaillez.'], ['Jeu T-Rex', 'Un classique hors ligne pour les petites pauses.']],
            pricing: ['Offre gratuite', 'Gratuit', '/ à vie', 'Idéal pour une interface épurée et rapide.', 'Télécharger', 'Offre PRO', 'Adaptez chaque détail de votre écran à votre style.', 'Passer à PRO', 'Abonnement 1 an', 'Achat à vie', 'Tarifs pour', 'Les prix définitifs sont affichés dans l’application.', 'Voir dans l’application', 'Recommandé'],
            pricingDetails: {
                planFeatures: [
                    ['Recherche T9 ultra-rapide', 'Jusqu’à 8 éléments épinglés et 3 widgets', '3 raccourcis Super Raccourcis (touches 1-3)', '1 élément sécurisé dans le Coffre privé et 1 Limite d’app', 'Essai de 30 jours du Mode Focus, paroles synchronisées, packs d’icônes et sauvegarde', 'Points de notification, actions rapides et gestes de glissement inclus'],
                    ['Éléments épinglés et widgets illimités', 'Les 9 raccourcis Super Raccourcis et pages d’apps illimitées', 'Éléments illimités dans le Coffre privé et Limites d’app', 'Mode Focus complet, paroles synchronisées et packs d’icônes', 'Polices personnalisées, thèmes de couleur de clavier et Mode Calculatrice', 'Fond d’écran automatique, flux RSS illimités et Sauvegarde / Restauration']
                ],
                categoryNames: ['Essentiel', 'Clavier', 'Centre de widgets', 'Aperçu rapide', 'Super Raccourcis et Raccourcis', 'Coffre privé', 'Mode focus', 'Musique', 'Apparence', 'Utilisation des apps', 'Fil d’actualités', 'Paramètres et données', 'Clin d’œil (Easter egg)'],
                featureNames: [
                    ['Recherche intelligente T9', 'Éléments épinglés', 'Gestes de glissement', 'Recherche de contacts', 'Masquer apps et contacts', 'Double-tap pour verrouiller', 'Pages d’applications'],
                    ['Mode calculatrice', 'Bascule de sonnerie', 'Thèmes de couleur du clavier'],
                    ['Nombre de widgets', 'Fond d’écran personnalisé'],
                    ['Widget horloge', 'Widget calendrier', 'Widget météo', 'Widgets empilés'],
                    ['Super Raccourcis'], ['Coffre privé'],
                    ['Mode focus', 'Écran toujours allumé'],
                    ['Commandes de musique', 'Paroles synchronisées'],
                    ['Options de fond d’écran', 'Changement automatique de fond', 'Prise en charge des packs d’icônes', 'Polices personnalisées', 'Personnalisation des icônes', 'Points de notification', 'Superposition de fond d’écran'],
                    ['Suivi d’utilisation des applications'], ['Sources de flux RSS'], ['Sauvegarde et restauration'], ['Jeu T-Rex']
                ],
                values: {'8 items': '8 éléments', 'Unlimited': 'Illimité', '2 pages': '2 pages', '30-day trial': 'Essai 30 jours', '3 widgets': '3 widgets', '3 slots': '3 emplacements', 'All 9 slots': 'Les 9 emplacements', '1 item': '1 élément', '1 app': '1 application', '3 sources': '3 sources'},
                labels: ['Comparatif détaillé des fonctionnalités', 'Fonctionnalité', 'Gratuit', 'Afficher toutes les fonctionnalités', 'Réduire', 'Consultez vos tarifs PRO locaux dans l’application.'],
                regional: ['Prix affichés en USD. Google Play applique le tarif configuré pour le pays de votre compte.', '{pct} % sous le prix mondial, ajusté au pouvoir d’achat local.', 'Jamais de soldes. Les prix ne font qu’augmenter : achetez plus tôt, payez moins. Les achats à vie ne sont jamais refacturés.']
            },
            faq: [['Qu’est-ce qu’un lanceur T9 ?', 'Il utilise le clavier 3x4 classique pour trouver et lancer les applications. Chaque touche représente plusieurs lettres : 2 ou 3 gestes suffisent pour ouvrir une app.'], ['Key Launcher est-il sûr et confidentiel ?', 'Oui. Il fonctionne localement et hors ligne, ne collecte aucune donnée personnelle et n’envoie aucune statistique dans le cloud.'], ['Prend-il en charge les packs d’icônes et les fonds d’écran ?', 'Oui. Il prend en charge les icônes, les couleurs système, les polices et les fonds automatiques. Certaines options avancées nécessitent PRO.'], ['Key Launcher consomme-t-il la batterie ?', 'Non. Son architecture Android native efficace fonctionne sans synchronisation en arrière-plan ni publicité.'], ['Quelles intégrations d’appel et de messagerie sont disponibles ?', 'Vous pouvez appeler, envoyer un SMS ou ouvrir WhatsApp, Zalo et Viber en saisissant un contact ou un numéro.'], ['Puis-je essayer PRO avant d’acheter ?', 'Oui. Un essai gratuit de 30 jours couvre les principales fonctions PRO.']],
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
                    { name: 'Recherche T9 rapide', desc: 'Lancez n’importe quelle application en 1-2 gestes', keyLauncher: 'Oui (Instantané)', niagara: '❌ Défilement alphabétique', minimalistPhone: '❌ Liste texte', olauncher: '❌ Recherche texte' },
                    { name: 'QWERTY et frappe par glissement', desc: 'Glissez sur les touches à toute vitesse', keyLauncher: 'Oui (Les deux)', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: 'Plusieurs coffres privés', desc: 'Espaces sécurisés par code PIN ou biométrie', keyLauncher: 'Coffres illimités', niagara: 'Masquage d’apps uniquement', minimalistPhone: 'Bloqueur d’apps uniquement', olauncher: 'Masquage d’apps uniquement' },
                    { name: 'Super Focus et paroles de musique', desc: 'Pomodoro, horloge de bureau et paroles intégrés', keyLauncher: 'Intégré', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: '100 % hors ligne et sans suivi', desc: 'Sans compte cloud, sans télémétrie ni publicité', keyLauncher: '100 % hors ligne', niagara: 'API cloud', minimalistPhone: 'Compte requis', olauncher: '✅ Hors ligne' },
                    { name: 'Modèle tarifaire', desc: 'Des tarifs équitables et transparents', keyLauncherMain: 'Fonctions de base gratuites', keyLauncherSub: 'Option à vie abordable', niagara: 'Abonnement annuel', minimalistPhone: 'Abonnement élevé (20 $+/an)', olauncher: 'Gratuit / Don' }
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
            meta: ['Key Launcher - Minimalistischer T9-Launcher für Android', 'Apps mit nur 2 Tipps starten. Digital Detox, hohe Akkuersparnis und vollständige Offline-Privatsphäre.'],
            navigation: ['Funktionen', 'Presse', 'Preise', 'Bewertungen', 'FAQ', 'Hilfe', 'Kostenlos laden'],
            hero: ['Neueste Version', 'Zweimal tippen.', 'Apps starten.', 'Verschwende keine Zeit mehr mit überladenen Bildschirmen und Social-Media-Benachrichtigungen. Key Launcher ersetzt das App-Raster durch eine klassische T9-Tastatur. Drücke 1 bis 3 Tasten und deine App erscheint sofort.', '100+ Bewertungen', 'Kernfunktionen kostenlos', '100 % werbefrei', 'Offline-Privatsphäre'],
            sections: {media: ['Presse & Bewertungen', 'Das sagen Technikjournalisten und Kreative über den minimalistischen Ansatz von Key Launcher.', 'Vollständiges Review ansehen'], features: ['Für Geschwindigkeit entwickelt. Für Fokus optimiert.', 'Reduziere deine Smartphone-Nutzung und vereinfache den Alltag mit praktischen, ablenkungsfreien Funktionen.'], focus: ['Super Focus', 'Ablenkungen stummschalten. <br class="hidden sm:inline">Ruhe schaffen.', 'Mach dein Gerät zum minimalistischen Begleiter. Schalte Benachrichtigungen stumm und greife auf Musik, Kalender, Pomodoro, Fotos und ein Offline-Spiel zu.'], pricing: ['Transparente Preise', 'Kostenlos nutzen. <br class="sm:hidden">Auf PRO upgraden.', 'Die Kernfunktionen bleiben kostenlos und werbefrei. PRO gibt es als Jahresabo oder einmaligen Kauf.'], testimonials: ['Nutzerfeedback', 'Echte Nutzer. <br class="sm:hidden">Echte Bewertungen.'], faq: ['Häufige Fragen', 'Häufig gestellte Fragen', 'Hier findest du Antworten auf die häufigsten Fragen zu Key Launcher.'], cta: ['Bereit für T9-Geschwindigkeit?', 'Lade Key Launcher für Android herunter, vereinfache deine Abläufe und gewinne Bildschirmzeit zurück.', 'Kostenlos im Play Store']},
            features: [['Ultraschnelle T9-Suche', 'Jede App mit zwei Tipps starten.'], ['Sofort anrufen', 'Sofort anrufen, schreiben oder suchen.'], ['Synchronisierte Liedtexte', 'Musik direkt auf dem Startbildschirm genießen.'], ['Widget-Zentrale', 'Alle Lieblings-Widgets an einem Ort.'], ['Kalender & Termine', 'Deine Termine immer griffbereit.'], ['Pomodoro-Timer', 'Integrierter Deep-Work-Modus.'], ['Privater Tresor', 'Apps verbergen. Keine Cloud. Kein Tracking.'], ['Material You & Typografie', 'Themes, die wirklich zu dir passen.']],
            focusBullets: [['Ruhe mit 1 Tipp', 'Störende App-Hinweise sofort stummschalten.'], ['Musikplayer', 'Synchronisierte Liedtexte auf dem Bildschirm genießen.'], ['Kalender & Termine', 'Alle Termine auf einen Blick.'], ['Pomodoro-Timer', 'Mit integrierten Intervallen fokussiert bleiben.'], ['Album-Diashow', 'Beim Arbeiten Erinnerungen ansehen.'], ['T-Rex-Spiel', 'Ein Offline-Klassiker für kurze Pausen.']],
            pricing: ['Kostenlos', 'Gratis', '/ lebenslang', 'Ideal für eine saubere, schnelle Oberfläche.', 'Kostenlos laden', 'PRO', 'Passe jedes Detail deines Bildschirms an deinen Stil an.', 'In der App upgraden', '1-Jahres-Abo', 'Lebenslanger Kauf', 'Preise für', 'Die endgültigen Preise werden in der App angezeigt.', 'In der App ansehen', 'Empfohlen'],
            pricingDetails: {
                planFeatures: [
                    ['Ultraschnelle T9-Suche', 'Bis zu 8 angeheftete Elemente & 3 Widgets', '3 Super-Shortcut-Slots (Tasten 1-3)', '1 geschütztes Element im Privaten Tresor & 1 App-Limit', '30-Tage-Testversion für Fokusmodus, synchronisierte Songtexte, Icon-Packs & Backup', 'Benachrichtigungspunkte, Schnellaktionen & Wischgesten inklusive'],
                    ['Unbegrenzte angeheftete Elemente & Widgets', 'Alle 9 Super-Shortcut-Slots & unbegrenzte App-Seiten', 'Unbegrenzte Elemente im Privaten Tresor & App-Limits', 'Vollständiger Fokusmodus, synchronisierte Songtexte & Icon-Packs', 'Benutzerdefinierte Schriften, Tastaturfarben & Taschenrechner-Modus', 'Automatischer Hintergrundwechsel, unbegrenzte RSS-Quellen & Backup / Wiederherstellung']
                ],
                categoryNames: ['Kernfunktionen', 'Tastatur', 'Widget-Zentrale', 'Auf einen Blick', 'Super-Shortcuts & Kurzbefehle', 'Privater Tresor', 'Fokusmodus', 'Musik', 'Erscheinungsbild', 'App-Nutzung', 'Entdecken-Feed', 'Einstellungen & Daten', 'Easter Egg'],
                featureNames: [
                    ['Intelligente T9-Suche', 'Angeheftete Elemente', 'Wischgesten', 'Kontaktsuche', 'Apps & Kontakte verbergen', 'Doppeltippen zum Sperren', 'App-Seiten'],
                    ['Taschenrechner-Modus', 'Klingelton-Umschalter', 'Tastatur-Farbfelder'],
                    ['Anzahl der Widgets', 'Eigener Hintergrund'],
                    ['Uhr-Widget', 'Kalender-Widget', 'Wetter-Widget', 'Stapel-Widgets'],
                    ['Super-Shortcuts'], ['Privater Tresor'],
                    ['Fokusmodus', 'Always-On-Display'],
                    ['Musiksteuerung', 'Synchronisierte Songtexte'],
                    ['Hintergrund-Optionen', 'Automatischer Hintergrundwechsel', 'Icon-Pack-Unterstützung', 'Eigene Schriften', 'Icon-Anpassung', 'Benachrichtigungspunkte', 'Hintergrund-Überlagerung'],
                    ['App-Nutzungstracking'], ['RSS-Feed-Quellen'], ['Sichern & Wiederherstellen'], ['T-Rex-Spiel']
                ],
                values: {'8 items': '8 Elemente', 'Unlimited': 'Unbegrenzt', '2 pages': '2 Seiten', '30-day trial': '30-Tage-Test', '3 widgets': '3 Widgets', '3 slots': '3 Slots', 'All 9 slots': 'Alle 9 Slots', '1 item': '1 Element', '1 app': '1 App', '3 sources': '3 Quellen'},
                labels: ['Detaillierter Funktionsvergleich', 'Funktion', 'Kostenlos', 'Alle Funktionen anzeigen', 'Weniger anzeigen', 'Sieh dir deine lokalen PRO-Preise in der App an.'],
                regional: ['Preise in USD angegeben. Google Play berechnet den für das Land deines Kontos festgelegten Preis.', '{pct} % unter dem globalen Preis, angepasst an die lokale Kaufkraft.', 'Keine Rabattaktionen, niemals. Die Preise steigen nur — früher kaufen, weniger zahlen. Einmalige Lifetime-Käufe werden nie neu bepreist.']
            },
            faq: [['Was ist ein T9-App-Launcher?', 'Er nutzt das klassische 3x4-Tastenfeld zum Suchen und Starten von Apps. Jede Taste steht für mehrere Buchstaben, daher reichen meist 2 oder 3 Tipps.'], ['Ist Key Launcher sicher und privat?', 'Ja. Er arbeitet vollständig offline und lokal, sammelt keine persönlichen Daten und lädt keine Nutzungsstatistiken in die Cloud.'], ['Werden Icon-Pakete und eigene Hintergründe unterstützt?', 'Ja. Icon-Pakete, Systemfarben, Schriften und automatische Hintergründe werden unterstützt. Einige erweiterte Optionen erfordern PRO.'], ['Verbraucht Key Launcher viel Akku?', 'Nein. Die effiziente native Android-Architektur kommt ohne Hintergrund-Synchronisierung und Werbung aus.'], ['Welche Anruf- und Messenger-Integrationen gibt es?', 'Durch Eingabe eines Kontakts oder einer Nummer kannst du anrufen, SMS senden oder WhatsApp, Zalo und Viber öffnen.'], ['Kann ich PRO vor dem Kauf testen?', 'Ja. Die wichtigsten PRO-Funktionen können 30 Tage kostenlos getestet werden.']],
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
                    { name: 'Schnelle T9-Suche', desc: 'Jede App mit 1-2 Tastendrücken starten', keyLauncher: 'Ja (Sofort)', niagara: '❌ Alphabetisches Scrollen', minimalistPhone: '❌ Textliste', olauncher: '❌ Textsuche' },
                    { name: 'QWERTY & Wisch-Tastatur (Swipe)', desc: 'Mit Wischgesten blitzschnell tippen', keyLauncher: 'Ja (Beides)', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: 'Mehrere private Tresore', desc: 'Separate, mit PIN / Biometrie gesperrte Bereiche', keyLauncher: 'Unbegrenzte Tresore', niagara: 'Nur Apps ausblenden', minimalistPhone: 'Nur App-Blocker', olauncher: 'Nur Apps ausblenden' },
                    { name: 'Super Focus & Liedtexte', desc: 'Integrierter Pomodoro-Timer, Schreibtischuhr & Liedtexte', keyLauncher: 'Integriert', niagara: '❌', minimalistPhone: '❌', olauncher: '❌' },
                    { name: '100 % offline & ohne Tracking', desc: 'Keine Cloud-Konten, keine Analysen, keine Werbung', keyLauncher: '100 % offline', niagara: 'Cloud-APIs', minimalistPhone: 'Konto erforderlich', olauncher: '✅ Offline' },
                    { name: 'Preise & Modell', desc: 'Faire und transparente Preise', keyLauncherMain: 'Kostenlose Basis', keyLauncherSub: 'Erschwingliche Lifetime-Option', niagara: 'Jahresabo', minimalistPhone: 'Teures Abo (20 $+/Jahr)', olauncher: 'Kostenlos / Spende' }
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
    document.documentElement.lang = locale;
    window.KEY_LAUNCHER_I18N = { locale, supportedLocales };
})();
