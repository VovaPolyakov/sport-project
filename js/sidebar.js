ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map('map', {
        center: [53.9015, 27.566],
        zoom: 12,
        controls: ['routeButtonControl', 'geolocationControl']
    }, {
        searchControlProvider: 'yandex#search'
    });

    //Создадим коллекцию геообъектов.
    let collection = new ymaps.GeoObjectCollection(null, {
        //Запретим появление балуна.
        hasBalloon: true,
        iconColor: '#3b5998'
    });

    collection
        .add(new ymaps.Placemark([53.907775, 27.563770], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Воркаут площадка</p><br>' +
            '<span class="description">Воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/тырники около театра.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">сквер имени Марата Казея, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Спортплощадка, воркаут'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/dumbbell.png',
            // Размеры метки.
            iconImageSize: [33, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.904365, 27.545512], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Спортплощадка</p><br>' +
            '<span class="description">Спортплощадка</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/футбольное поле.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">исторический район Романовская Слобода, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Футбол'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/football.png',
            // Размеры метки.
            iconImageSize: [29, 29],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.943338, 27.578512], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Спортплощадка</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/баскет и футбол.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">3-й переулок Можайского, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Открыто до 20:00</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Баскетбол, футбол'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/football.png',
            // Размеры метки.
            iconImageSize: [29, 29],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.907813, 27.617630], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Воркаут</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/турнички.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">микрорайон Слепянка, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Воркаут'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/dumbbell.png',
            // Размеры метки.
            iconImageSize: [33, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.900109, 27.561032], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Спортплощадка, воркаут</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/bascet1.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">улица Карла Маркса, 37А, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Спортплощадка, воркаут, баскетбол'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/basketball-ball.png',
            // Размеры метки.
            iconImageSize: [29, 29],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.926917, 27.578382], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Спортплощадка, воркаут</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/футбол.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">микрорайон Комаровка, Советский район, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Спортплощадка, воркаут, футбол'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/football.png',
            // Размеры метки.
            iconImageSize: [29, 29],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.917456, 27.434006], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Спортплощадка, воркаут</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/турники в парке .jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">парк имени Уго Чавеса, микрорайон Каменная Горка, Фрунзенский район, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Спортплощадка, воркаут'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/dumbbell.png',
            // Размеры метки.
            iconImageSize: [33, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.917587, 27.433656], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Спортплощадка, воркаут</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/парк баскет.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">парк имени Уго Чавеса, микрорайон Каменная Горка, Фрунзенский район, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Спортплощадка, воркаут'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/basketball-ball.png',
            // Размеры метки.
            iconImageSize: [29, 29],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.913998, 27.534875], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Спортплощадка, воркаут</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/dumbels1.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">исторический район Людамонт</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Спортплощадка, воркаут'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/dumbbell.png',
            // Размеры метки.
            iconImageSize: [33, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.874986, 27.600596], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Баскетбольная площадка</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/баскет с турниками.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">Серебрянка-7, Ленинский район, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Баскетбольное поле'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/basketball-ball.png',
            // Размеры метки.
            iconImageSize: [29, 29],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.875292, 27.566114], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Баскетбольная площадка</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/баскет около стадика.jpg" height="200" width="300"> <br/> ' +
                '<p>Телефон не указан</p><br/>' +
                '<p class="mapAddress">Минск, ул.Маяковского, 26</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Открыто до 22:00</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Баскетбольная площадка'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/basketball-ball.png',
            // Размеры метки.
            iconImageSize: [31, 31],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.866334, 27.589396], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Футбольное поле</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/мини футбольное поле.jpg" height="200" width="300"> <br/> ' +
                '<a href="tel:+375 17 370-04-42">+375 17 370-04-42</a><br/>' +
                '<p class="mapAddress">Серебрянка-9, Ленинский район, Минск</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Открыто до 22:00</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Футбольное поле'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/football.png',
            // Размеры метки.
            iconImageSize: [29, 29],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.929617, 27.591951], {
           // Зададим содержимое заголовка балуна.
           balloonContentHeader: '<p class="tittle">Спортивная площадка</p><br>' +
           '<span class="description">Спортплощадка, воркаут</span>',
           // Зададим содержимое основной части балуна.
           balloonContentBody: '<img src="img/баскет на советской.jpg" height="200" width="300"> <br/> ' +
               '<p>Телефон не указан</p><br/>' +
               '<p class="mapAddress">Беларусь, Минск, Советский район</p>' +
               '<button class="time">Время работы</button><br/>' +
               '<p>Круглосуточно</p>',
           // Зададим содержимое нижней части балуна.
           hintContent: 'Спортплощадка, воркаут'
           }, {
           // Опции.
           // Необходимо указать данный тип макета.
           iconLayout: 'default#image',
           // Своё изображение иконки метки.
           iconImageHref: 'img/basketball-ball.png',
           // Размеры метки.
           iconImageSize: [29, 29],
           // Смещение левого верхнего угла иконки относительно
           // её "ножки" (точки привязки).
           iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.854338, 27.463601], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Workout-площадка</p><br>' +
            '<span class="description">Спортплощадка, воркаут</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/воркаут площадка на космонавта.jpg" height="200" width="300"> <br/> ' +
                '<a href="tel:+375 25 781-19-45">+375 25 781-19-45</a><br/>' +
                '<a href="https://www.geroi.fit/workout-malinovka-minsk">www.geroi.fit</a>' +
                '<p class="mapAddress">Беларусь, Минск, Московский район</p>' +
                '<button class="time">Время работы</button><br/>' +
                '<p>Круглосуточно</p>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Спортплощадка, воркаут'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/dumbbell.png',
            // Размеры метки.
            iconImageSize: [33, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.859154, 27.485743], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Стадион БГМУ</p><br>' +
            '<span class="description">Стадион</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/XXXL.jpg" height="200" width="300"> <br/> ' +
                '<p class="tel">Телефон не указан</p><br/>' +
                '<p class="mapAddress">просп.Дзержинского, 87</p>' +
                '<button class="time">График</button><br/>' +
                '<ul class="list"><li>Пн: 8:00 - 19:00</li><li>Вт: 8:00 - 19:00</li><li>Ср: 8:00 - 19:00</li><li>Чт: 8:00 - 19:00</li><li>Пт: 8:00 - 19:00</li><li>Сб: 8:00 - 19:00</li><li>Вс: 8:00 - 19:00</li></ul>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Стадион БГМУ'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/stadium.png',
            // Размеры метки.
            iconImageSize: [40, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        .add(new ymaps.Placemark([53.875475, 27.566798], {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<p class="tittle">Стадион</p><br>' +
            '<span class="description">Стадион</span>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="img/cnflbjy yf ekbwt.jpg" height="200" width="300"> <br/> ' +
                '<p class="tel">Телефон не указан</p><br/>' +
                '<p class="mapAddress">ул.Маяковского, 26</p>' +
                '<button class="time">График</button><br/>' +
                '<ul class="list"><li>Пн: 6:00 - 22:00</li><li>Вт: 6:00 - 22:00</li><li>Ср: 6:00 - 22:00</li><li>Чт: 6:00 - 22:00</li><li>Пт: 6:00 - 22:00</li><li>Сб: 6:00 - 22:00</li><li>Вс: 6:00 - 22:00</li></ul>',
            // Зададим содержимое нижней части балуна.
            hintContent: 'Стадион до 22:00'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/stadium.png',
            // Размеры метки.
            iconImageSize: [40, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }))
        
 
    // Добавим метку на карту.
    myMap.geoObjects.add(collection);

    collection.events.add('click', function (e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        let target = e.get('target');
        // Зададим контент боковой панели.
        myMap.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
    });
}



function Sim(sldrId) {

	let id = document.getElementById(sldrId);
	if(id) {
		this.sldrRoot = id
	}
	else {
		this.sldrRoot = document.querySelector('.sim-slider')
	};

	// Slider objects
	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
	this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
	this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
	this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

	// Initialization
	this.options = Sim.defaults;
	Sim.initialize(this)
};

Sim.defaults = {

	// Default options for the slider
	loop: true,     // Бесконечное зацикливание слайдера
	auto: false,     // Автоматическое пролистывание
	interval: 1000, // Интервал между пролистыванием элементов (мс)
	arrows: true,   // Пролистывание стрелками
	dots: false      // Индикаторные точки
};

Sim.prototype.elemPrev = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement -= num;
	if(this.currentElement < 0) this.currentElement = this.elemCount-1;

	if(!this.options.loop) {
		if(this.currentElement == 0) {
			this.leftArrow.style.display = 'none'
		};
		this.rightArrow.style.display = 'block'
	};
	
	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

	if(this.options.dots) {
		this.dotOn(prevElement); this.dotOff(this.currentElement)
	}
};

Sim.prototype.elemNext = function(num) {
	num = num || 1;
	
	let prevElement = this.currentElement;
	this.currentElement += num;
	if(this.currentElement >= this.elemCount) this.currentElement = 0;

	if(!this.options.loop) {
		if(this.currentElement == this.elemCount-1) {
			this.rightArrow.style.display = 'none'
		};
		this.leftArrow.style.display = 'block'
	};

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

	if(this.options.dots) {
		this.dotOn(prevElement); this.dotOff(this.currentElement)
	}
};

Sim.prototype.dotOn = function(num) {
	this.indicatorDotsAll[num].style.cssText =
             'background-color:#BBB; cursor:pointer;'
};

Sim.prototype.dotOff = function(num) {
	this.indicatorDotsAll[num].style.cssText =
             'background-color:#556; cursor:default;'
};

Sim.initialize = function(that) {

	// Constants
	that.elemCount = that.sldrElements.length; // Количество элементов

	// Variables
	that.currentElement = 0;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function() {
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemNext()
			}
		}, that.options.interval)
	};

	// Start initialization
	if(that.elemCount <= 1) {   // Отключить навигацию
		that.options.auto = false;
                that.options.arrows = false; that.options.dots = false;
		that.leftArrow.style.display = 'none';
                that.rightArrow.style.display = 'none'
	};
	if(that.elemCount >= 1) {   // показать первый элемент
		that.sldrElemFirst.style.opacity = '1';
	};

	if(!that.options.loop) {
		that.leftArrow.style.display = 'none';  // отключить левую стрелку
		that.options.auto = false; // отключить автопркрутку
	}
	else if(that.options.auto) {   // инициализация автопрокруки
		setAutoScroll();
		// Остановка прокрутки при наведении мыши на элемент
		that.sldrList.addEventListener('mouseenter', function() {
                      clearInterval(that.autoScroll)
                }, false);
		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
	};

	if(that.options.arrows) {  // инициализация стрелок
		that.leftArrow.addEventListener('click', function() {
			let fnTime = getTime();
			if(fnTime - bgTime > 1000) {
				bgTime = fnTime; that.elemPrev()
			}
		}, false);
		that.rightArrow.addEventListener('click', function() {
			let fnTime = getTime();
			if(fnTime - bgTime > 1000) {
				bgTime = fnTime; that.elemNext()
			}
		}, false)
	}
	else {
		that.leftArrow.style.display = 'none';
                that.rightArrow.style.display = 'none'
	};

	if(that.options.dots) {  // инициализация индикаторных точек
		let sum = '', diffNum;
		for(let i=0; i<that.elemCount; i++) {
			sum += '<span class="sim-dot"></span>'
		};
		that.indicatorDots.innerHTML = sum;
		that.indicatorDotsAll =
                       that.sldrRoot.querySelectorAll('span.sim-dot');
		// Назначаем точкам обработчик события 'click'
		for(let n=0; n<that.elemCount; n++) {
			that.indicatorDotsAll[n].addEventListener('click', function(){
				diffNum = Math.abs(n - that.currentElement);
				if(n < that.currentElement) {
					bgTime = getTime(); that.elemPrev(diffNum)
				}
				else if(n > that.currentElement) {
					bgTime = getTime(); that.elemNext(diffNum)
				}
				// Если n == that.currentElement ничего не делаем
			}, false)
		};
		that.dotOff(0);  // точка[0] выключена, остальные включены
		for(let i=1; i<that.elemCount; i++) {
			that.dotOn(i)
		}
	}
};