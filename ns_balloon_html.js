ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.30721192564775,50.28714746557643],
            zoom: 16,
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
        }, {
            searchControlProvider: 'yandex#search'
        });
    // Создаем многоугольник, используя вспомогательный класс Polygon.
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [53.307932993292155,50.277940293699515],
            [53.30417155633672,50.28138014451386],
            [53.30376346369171,50.28224113360763],
            [53.30299767063058,50.28674921398942],
            [53.30291251541225,50.28747877484147],
            [53.30292215563421,50.28798034792727],
            [53.302996063929925,50.28872063761537],
            [53.310362635397574,50.29118943919488],
            [53.31056437489173,50.289762414019066],
            [53.310621689474154,50.28733470301293],
            [53.31074217023132,50.28706379990242],
            [53.31072985910688,50.28371664220713],
            [53.31006158800549,50.28445961410427],
            [53.30901964823911,50.28472997592244],
            [53.30829222554487,50.28476484463964],
            [53.30804803677499,50.284115750058035],
            [53.308024702597514,50.28042629709926],
            [53.307937029238296,50.27792621522378]
        ],
        // Координаты вершин внутреннего контура.
        [
        ]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: 'Микрорайон "Новая Самара"'
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#ffff33',
        fillOpacity:0.2,
        // Ширина обводки.
        strokeColor: '00b300',
        strokeWidth: 3
    });
    myMap.geoObjects
        .add(myPolygon)
        .add(new ymaps.Placemark([53.30699802549223,50.28101669492675], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Наша Школа на 1200 мест</a><br>' +
        '<span class="description">Общеобразовательная школа</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1614853865/4903f15f/33553655.png" height="150" width="300" title="Своая школа на 1200 мест ЖК «Новая Самара»" alt="Школа от ООО «Финстрой»"> <br/> ' +           
        '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Наша Школа'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3731-6261-4233-b236-313232656664/1-02.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.3039644252431,50.271267478849275], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Школа №33</a><br>' +
            '<span class="description">Общеобразовательная школа</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614854191/ab74fcfb/33553735.png" height="150" width="300" title="Школа №33" alt="Общеобразовательная школа №33"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Школа №33'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3731-6261-4233-b236-313232656664/1-02.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.29704862926469,50.279900161079155], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Школа №122</a><br>' +
            '<span class="description">Общеобразовательная школа</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614854460/8c1813cc/33553808.png" height="150" width="300" title="Школа №122" alt="Общеобразовательная школа №122"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Школа №122'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3731-6261-4233-b236-313232656664/1-02.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.29701018412871,50.289835955217676], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Школа №156</a><br>' +
            '<span class="description">Общеобразовательная школа</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614854651/b3e827d6/33553874.png" height="150" width="300" title="Школа №156" alt="Общеобразовательная школа №156"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Школа №156'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3731-6261-4233-b236-313232656664/1-02.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.300152670838074,50.283937147051596], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Школа №103</a><br>' +
            '<span class="description">Общеобразовательная школа</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614855608/a895547d/33554071.png" height="150" width="300" title="Школа №103" alt="Общеобразовательная школа №103"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Школа №103'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3731-6261-4233-b236-313232656664/1-02.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31768183462463,50.31464372525729], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Школа №7</a><br>' +
            '<span class="description">Общеобразовательная школа</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614855782/1e9468d0/33554105.png" height="150" width="300" title="Школа №68" alt="Общеобразовательная школа №68"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Школа №7'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3731-6261-4233-b236-313232656664/1-02.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30341918338826,50.268387447180835], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №257 «Теремок»</a><br>' +
            '<span class="description">Детский сад комбинированного вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614855862/51b0c563/33554125.png" height="150" width="300" title="Детский сад №257" alt="Детский сад комбинированного вида №257"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №257'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30139471246428,50.27647698956973], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №411 «Сказка»</a><br>' +
            '<span class="description">Детский сад</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614855939/d511d4e0/33554176.png" height="150" width="300" title="Детский сад №411" alt="Детский сад №411"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №411'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.299479409929845,50.279373775305814], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №208 «Колобок»</a><br>' +
            '<span class="description">Детский сад общеразвивающего вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614856017/a2c9df94/33554197.png" height="150" width="300" title="Детский сад №208" alt="Детский сад №208"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №208'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.297679718161554,50.28272117215643], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №33</a><br>' +
            '<span class="description">Детский сад комбинированного вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614856153/6728cc1d/33554235.png" height="150" width="300" title="Детский сад №33" alt="Детский сад №33"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №33'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.29870812278835,50.284427057089886], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №257 «Теремок»</a><br>' +
            '<span class="description">Детский сад общеразвивающего вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614856338/7d72b0e5/33554300.png" height="150" width="300" title="Детский сад №257" alt="Детский сад №257"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №257'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30093453029044,50.290977936643024], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №325 «Незабудка»</a><br>' +
            '<span class="description">Детский сад общеразвивающего вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614856489/a8849c77/33554357.png" height="150" width="300" title="Детский сад №325" alt="Детский сад №325"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №325'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31034723469309,50.28902048795013], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №362</a><br>' +
            '<span class="description">Частный детский сад</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild3233-6636-4639-a135-353535613766/1-1.png" height="150" width="300" title="Детский №362" alt="Детский №362"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский №362'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.3104500456247,50.28641338078768], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №362</a><br>' +
            '<span class="description">Детский сад комбинированного вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614856686/5a147a40/33554419.png" height="150" width="300" title="Детский сад №362" alt="Детский сад №362"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №362'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.310955899057575,50.301117889899345], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский «Босоногое Счастье»</a><br>' +
            '<span class="description">Частный детский сад</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614856895/c200e699/33554506.png" height="150" width="300" title="Детский сад «Босоногое Счастье»" alt="Детский сад «Босоногое Счастье»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад «Босоногое Счастье»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31566748507769,50.28582086081487], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский «Львёнок»</a><br>' +
            '<span class="description">Частный детский сад</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857002/fb4a3fea/33554557.png" height="150" width="300" title="Детский сад «Львёнок»" alt="Детский сад «Львёнок»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад «Львёнок»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.308379264619745,50.31559250010049], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский «Львёнок»</a><br>' +
            '<span class="description">Частный детский сад</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857143/5115f735/33554582.png" height="150" width="300" title="Детский сад «Львёнок»" alt="Детский сад «Львёнок»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад «Львёнок»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31060902416635,50.316804858575225], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №2</a><br>' +
            '<span class="description">Детский сад комбинированного вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857191/6598e939/33554585.png" height="150" width="300" title="Детский сад №2" alt="Детский сад №2"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №2'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31505927792369,50.31238974412566], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №1, Корпус №3</a><br>' +
            '<span class="description">Детский сад комбинированного вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857303/aa378577/33554609.png" height="150" width="300" title="Детский сад №1" alt="Детский сад №1"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №1, Корпус №3'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.317224440441194,50.31291545709255], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №1</a><br>' +
            '<span class="description">Детский сад комбинированного вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857403/fcd95038/33554623.png" height="150" width="300" title="Детский сад №1" alt="Детский сад №1"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №1'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.3137703887794,50.309306071089246], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский «Непоседы»</a><br>' +
            '<span class="description">Частный детский сад. Клуб для детей и подростков</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857570/73d65f52/33554654.png" height="150" width="300" title="Детский сад «Непоседы»" alt="Детский сад «Непоседы»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад «Непоседы»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31641672677081,50.31301649279916], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский «Детки Конфетки»</a><br>' +
            '<span class="description">Частный детский сад. Центр развития ребёнка</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857699/315a8166/33554676.png" height="150" width="300" title="Детский сад «Детки Конфетки»" alt="Детский сад «Детки Конфетки»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад «Детки Конфетки»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.32032281868711,50.306854229768874], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский «Кузя»</a><br>' +
            '<span class="description">Частный детский сад</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857784/2db5f3c0/33554711.png" height="150" width="300" title="Детский сад «Кузя»" alt="Детский сад «Кузя»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад «Кузя»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.32226928964762,50.308527834912525], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский «Радуга»</a><br>' +
            '<span class="description">Частный детский сад. Центр развития ребёнка</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857882/aaa5b8d6/33554737.png" height="150" width="300" title="Детский сад «Радуга»" alt="Детский сад «Радуга»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад «Радуга»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.32288285531523,50.305179622208165], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский «Радуга»</a><br>' +
            '<span class="description">Частный детский сад. Центр развития ребёнка</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614857996/f8eb2707/33554754.png" height="150" width="300" title="Детский сад «Радуга»" alt="Детский сад «Радуга»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад «Радуга»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.32259498269232,50.31174645626422], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детский №1, Корпус №1</a><br>' +
            '<span class="description">Детский сад комбинированного вида</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614858063/3f98da58/33554766.png" height="150" width="300" title="Детский сад №1" alt="Детский сад №1"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детский сад №1, Корпус №1'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3432-3633-4462-a562-633366346537/1-05.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.303362461127776,50.2798030253827], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Городская больница № 7, Детское<br> поликлиническое отделение № 2</a><br>' +
            '<span class="description">Детская поликлиника</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614858130/94d172de/33554781.png" height="150" width="300" title="Городская больница № 7, Детское поликлиническое отделение № 2" alt="Городская больница № 7, Детское поликлиническое отделение № 2"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Городская больница № 7, Детское поликлиническое отделение № 2'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6463-6334-4035-b331-366535333436/1-03.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.3028949126879,50.28600373710655], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Детская поликлиника ГБУЗ СО <br>Самарская городская больница №7</a><br>' +
            '<span class="description">Детская поликлиника</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614858233/f83c2adb/33554854.png" height="150" width="300" title="Городская больница № 7, Детское поликлиническое отделение № 2" alt="Детская поликлиника ГБУЗ СО Самарская городская больница №7"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Детская поликлиника ГБУЗ СО Самарская городская больница №7'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6463-6334-4035-b331-366535333436/1-03.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.29938418842678,50.27770083767108], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">ГКБ № 7, стоматологическое отделение</a><br>' +
            '<span class="description">Стоматологическая поликлиникаполиклиника для взрослых</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614858286/3ac5a8e6/33554860.png" height="150" width="300" title="ГКБ № 7, стоматологическое отделение" alt="ГКБ № 7, стоматологическое отделение"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'ГКБ № 7, стоматологическое отделение'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6463-6334-4035-b331-366535333436/1-03.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.32128425785829,50.314562965995016], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Городская поликлиника № 1</a><br>' +
            '<span class="description">Детская поликлиникаполиклиника для взрослых</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614858340/51ad69fa/33554872.png" height="150" width="300" title="Городская поликлиника № 1" alt="Городская поликлиника № 1"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Городская поликлиника № 1'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6463-6334-4035-b331-366535333436/1-03.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.300486496013,50.28235063553086], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Сквер «Октябрь»</a><br>' +
            '<span class="description">Сквер, парк культуры и отдыха</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614858721/9abb5a18/33554950.png" height="150" width="300" title="Сквер «Октябрь»" alt="Сквер «Октябрь»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Сквер «Октябрь»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3736-3066-4665-b137-653232326464/1-06.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31745649165346,50.2857275727237], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Парк-отель «Озерки»</a><br>' +
            '<span class="description">Парк культуры и отдыха. Гостиница</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614858813/f714848c/33554984.png" height="150" width="300" title="Парк-отель «Озерки»»" alt="Парк-отель «Озерки»»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Парк-отель «Озерки»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3736-3066-4665-b137-653232326464/1-06.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.297428838384675,50.33931165879544], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Лес «Дубовый Гай»</a><br>' +
            '<span class="description">Лесной массив</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614858890/c8bcb271/33555024.png" height="150" width="300" title="Лес «Дубовый Гай»" alt="Лес «Дубовый Гай»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Лес «Дубовый Гай»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3736-3066-4665-b137-653232326464/1-06.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.32168619047387,50.3451083433697], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">«Рассветовский лес»</a><br>' +
            '<span class="description">Лесной массив</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614859196/dcbc92b4/33555064.png" height="150" width="300" title="«Рассветовский лес»" alt="«Рассветовский лес»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: '«Рассветовский лес»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3736-3066-4665-b137-653232326464/1-06.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30222933385242,50.2780403357986], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">ТЦ «Радуга»</a><br>' +
            '<span class="description">Торговый центр</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614859277/14d4c3bf/33555084.png" height="150" width="300" title="ТЦ «Радуга»" alt="ТЦ «Радуга»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'ТЦ «Радуга»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3034-3162-4534-a231-643331313934/1-09.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31593470255241,50.302893497533496], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">ТЦ «Мир»</a><br>' +
            '<span class="description">Торговый центр</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614859386/63a3afc9/33555109.png" height="150" width="300" title="ТЦ «Мир»" alt="ТЦ «Мир»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'ТЦ «Мир»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3034-3162-4534-a231-643331313934/1-09.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.32720491289547,50.30539270347078], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">ТЦ «МЕГА»</a><br>' +
            '<span class="description">ИКЕА, Леруа Мерлен, Ашан и многое другое</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614860528/4b6872e1/33555325.png" height="150" width="300" title="ТЦ «МЕГА»" alt="ТЦ «МЕГА»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'ТЦ «МЕГА»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3034-3162-4534-a231-643331313934/1-09.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30617868003169,50.27784679074219], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Ледовая арена «Салют»</a><br>' +
            '<span class="description">Каток</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614860596/29422934/33555333.png" height="150" width="300" title="Ледовая арена «Салют»" alt="Ледовая арена «Салют»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Ледовая арена «Салют»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3534-3063-4239-b563-313234623936/1-04.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.31011407061692,50.289889785230834], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Ледовый дворец «Кристалл»</a><br>' +
            '<span class="description">Спортивный комплекс, спортивный, тренажёрный зал, стадион</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614860644/e1df2cb6/33555346.png" height="150" width="300" title="Ледовый дворец «Кристалл»" alt="Ледовый дворец «Кристалл»"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Ледовый дворец «Кристалл»'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3534-3063-4239-b563-313234623936/1-04.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30769577202182,50.28933404604394], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Имидж-студия Анастасии <br>Худорожковой</a><br>' +
            '<span class="description">Салон красотыателье по пошиву одежды</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild6666-6566-4637-b161-386165316363/43.png" height="150" width="300" title="Салон красотыателье по пошиву одежды" alt="Салон красотыателье по пошиву одежды"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Имидж-студия Анастасии Худорожковой'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6332-3134-4466-a430-653633373235/1-14.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30758801325267,50.28678170889098], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Ваш парикмахер - мужской салон</a><br>' +
            '<span class="description">Барбершопсалон красоты</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614861133/58fd5caf/33555437.png" height="150" width="300" title="Ваш парикмахер - мужской салон" alt="Ваш парикмахер - мужской салон"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Ваш парикмахер - мужской салон'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6332-3134-4466-a430-653633373235/1-14.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.308416973136666,50.28578392713746], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Cherry bar Lash&Brow</a><br>' +
            '<span class="description">Салон красоты</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild6266-3530-4964-a239-643236653731/2_2.jpg" height="150" width="300" title="Cherry bar Lash&Brow" alt="Cherry bar Lash&Brow"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Cherry bar Lash&Brow'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6332-3134-4466-a430-653633373235/1-14.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30920414875362,50.28747908323487], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Салон красоты Olivia</a><br>' +
            '<span class="description">Салон красоты</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild3863-3839-4564-b234-656535646661/2_4.jpg" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Салон красоты Olivia'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6332-3134-4466-a430-653633373235/1-14.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.3099500995024,50.2890177197446], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">WoMan</a><br>' +
            '<span class="description">Салон красоты</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild3761-3065-4331-b232-373031346137/2_6.jpg" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'WoMan'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6332-3134-4466-a430-653633373235/1-14.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30980411713804,50.28669285329201], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Марафет</a><br>' +
            '<span class="description">Салон красоты, солярий</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614861525/ab9bbc2f/33555541.png" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Марафет'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6332-3134-4466-a430-653633373235/1-14.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30945025558656,50.2876958849099], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Аптека ВИТА Экспресс</a><br>' +
            '<span class="description">Аптека</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild3361-6261-4438-b535-373232376438/2_3.jpg" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'МАптека ВИТА Экспресс'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3437-6564-4662-b132-343663333038/1-12.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30850069944099,50.2885433629653], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Апрель</a><br>' +
            '<span class="description">Аптека</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild6435-6236-4163-a530-656536386235/52.png" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Апрель'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3437-6564-4662-b132-343663333038/1-12.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30830149389576,50.286885757794074], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Алия</a><br>' +
            '<span class="description">Аптека</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild6266-6463-4132-b730-623736653333/53.png" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Алия'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3437-6564-4662-b132-343663333038/1-12.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.307215312364114,50.28521008994356], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Магнит-Космети»</a><br>' +
            '<span class="description">Супермаркет</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild3631-3963-4464-a265-356534616239/111.png" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Пятёрочка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6464-6539-4166-a332-636537363966/1-11.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30887160126122,50.28994850272649], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Пятёрочка</a><br>' +
            '<span class="description">Супермаркет</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild3534-6465-4765-a630-353937643462/2_1.jpg" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Пятёрочка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6464-6539-4166-a332-636537363966/1-11.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.3081678574819,50.286023481019505], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Пятёрочка</a><br>' +
            '<span class="description">Супермаркет</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614862210/78439391/33555721.png" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Пятёрочка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6464-6539-4166-a332-636537363966/1-11.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30762227406958,50.28520748239481], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Магнит</a><br>' +
            '<span class="description">Супермаркет</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614862278/252a4cda/33555728.png" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Магнит'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6464-6539-4166-a332-636537363966/1-11.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30677017501341,50.28521881831504], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Пятёрочка</a><br>' +
            '<span class="description">Супермаркет</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="http://images.vfl.ru/ii/1614862339/c6b75603/33555746.png" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Пятёрочка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild6464-6539-4166-a332-636537363966/1-11.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
        .add(new ymaps.Placemark([53.30704688152192,50.28914832598631], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#popup:stepform" target="_blank">Офис отдела продаж и аренды<br>ЖК "Новая Самара"</a><br>' +
            '<span class="description">ООО "СЗ "ФИНСТРОЙ"<br><br><i>Режим работы:</i><br>пн-пт с 09 до 19<br>сб с 09 до 16<br>вс -выходной<br><i>Адрес:</i><br><a href="https://yandex.ru/maps/51/samara/?ll=50.289406%2C53.307253&mode=poi&poi%5Bpoint%5D=50.289373%2C53.307363&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D2999599358&z=21">г. Самара, Красноглинский р-н, <br>поселок Мехзавод 1- й квартал, д. 40</a></span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="https://static.tildacdn.com/tild3131-3535-4731-b633-653238653735/office.jpg" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
            '<b><a href = "#popup:zvonok" target="_blank" style="font-size: 14px">➥ <u>Заказать обратный звонок</u></a></b>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '',
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Офис продаж ЖК "Новая Самара"'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://static.tildacdn.com/tild3661-3365-4466-b332-383331646438/ns_op_oapng.png',
                // Размеры метки.
                iconImageSize: [40, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                hideIconOnBalloonOpen: false,
                // Вкл./Откл кнопку закрытия балуна.
                balloonCloseButton: true,
                balloonOffset: [0, -0]
            }))
            .add(new ymaps.Placemark([53.310075572420125,50.29207527746697], {
                // Зададим содержимое заголовка балуна.
                balloonContentHeader: '<a href = "#popup:stepform" target="_blank">ТЦ "Мега"</a><br>' +
                '<span class="description">Супермаркет</span>',
                // Зададим содержимое основной части балуна.
                balloonContentBody: '<img src="http://images.vfl.ru/ii/1614860528/4b6872e1/33555325.png" height="150" width="300" title="Новая Самара" alt="ЖК Новая Самара"> <br/> ' +           
                '<b><a href = "#popup:stepform" target="_blank" style="font-size: 14px">➥ <u>Скачать презентацию</u></a></b>',
                // Зададим содержимое нижней части балуна.
                balloonContentFooter: '',
                // Зададим содержимое всплывающей подсказки.
                hintContent: 'ТЦ "Мега"'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'https://static.tildacdn.com/tild6430-6338-4661-a235-333166626266/mega_ns.png',
                    // Размеры метки.
                    iconImageSize: [150, 100],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [0, 0],
                    hideIconOnBalloonOpen: false,
                    // Вкл./Откл кнопку закрытия балуна.
                    balloonCloseButton: true,
                    balloonOffset: [0, -0]
            }));
}
