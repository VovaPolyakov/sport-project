// ymaps.ready(init);

// function init() {
//     var myMap = new ymaps.Map("map", {
//             center: [53.9015, 27.566],
//             zoom: 12
//         }, {
//             searchControlProvider: 'yandex#search'
//         });

    

//     myMap.geoObjects
//         .add(new ymaps.Placemark([53.907775, 27.563770], {
//             balloonContent: 'цвет <strong>красный</strong>'
//         }, {
//             preset: 'islands#orangeSportIcon'
//         }))
//         .add(new ymaps.Placemark([53.904365, 27.545512], {
//             balloonContent: 'цвет <strong>красный</strong>'
//         }, {
//             preset: 'islands#orangeSportIcon'
//         }));
// }



ymaps.ready(['Panel']).then(function () {
    var map = new ymaps.Map("map", {
        center: [53.9015, 27.566],
        zoom: 12,
        controls: []
    });
    // Создадим контент для меток.
    var firstOffice = 'Первый полноценный офис Яндекса появился в Москве в 2001 году. ' +
        'Тогда компания занимала небольшой корпус Вычислительного центра РАН на улице Вавилова, там работало 60 человек.';
    var secondOffice = 'Второй офис Яндекса на Самокатной улице.';
    var thirdOffice = '<a href="https://yandex.ru/company/contacts/moscow/">Главный офис Яндекса</a>' +
        '<p><img style="width: 190px;" src="img/office.jpeg"></p>' +
        '<p>В офисе на улице Льва Толстого находится штаб-квартира Яндекса, он самый большой и по размерам, ' +
        'и по численности сотрудников. Сейчас он занимает почти целый квартал между улицами Льва Толстого ' +
        'и Тимура Фрунзе. Общая площадь всех зданий — более 50 тысяч квадратных метров.</p>';
    // Создадим и добавим панель на карту.
    var panel = new ymaps.Panel();
    map.controls.add(panel, {
        float: 'left'
    });
    // Создадим коллекцию геообъектов.
    var collection = new ymaps.GeoObjectCollection(null, {
        // Запретим появление балуна.
        hasBalloon: false,
        iconColor: '#3b5998'
    });
    // Добавим геообъекты в коллекцию.
    collection
        .add(new ymaps.Placemark([53.907775, 27.563770], {
            balloonContent: thirdOffice
        }, {
                preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.904365, 27.545512], {
            balloonContent: secondOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.913998, 27.534875], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.917587, 27.433656], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.926917, 27.578382], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.900109, 27.561032], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.911278, 27.627476], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.943338, 27.578512], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.929617, 27.591951], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.874986, 27.600596], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.875292, 27.566114], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        .add(new ymaps.Placemark([53.883598, 27.516404], {
            balloonContent: firstOffice
        }, {
            preset: 'islands#orangeSportIcon'
        }))
        
        
    // Добавим коллекцию на карту.
    map.geoObjects.add(collection);
    // Подпишемся на событие клика по коллекции.
    collection.events.add('click', function (e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        var target = e.get('target');
        // Зададим контент боковой панели.
        panel.setContent(target.properties.get('balloonContent'));
        // Переместим центр карты по координатам метки с учётом заданных отступов.
        map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
    });
});
