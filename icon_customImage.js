const init = () => {
    myMap = new ymaps.Map("map", {
        center: [50.450441, 30.523550],
        zoom: 14
    });
    const coords = [
        [50.448411, 30.515465],
        [50.444917, 30.531895],
        [50.459330, 30.515797],
        [50.467725, 30.522274],
    ];
    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map_ico.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });
    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    })

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);