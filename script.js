
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VsZW5heWF5ZG9nZHUiLCJhIjoiY2xwang1Znl4MDR4ODJranh0anl0eHZpNiJ9.ySvjB-nyTjpeNvxCWDalUw'; // <-- Buraya kendi access token'ınızı ekleyin


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [16.3738, 48.2082], 
    zoom: 3
});


const countries = [
    {
        name: 'Poland',
        coordinates: [19.1451, 51.9194],
        info: "Poland, the country where I did Erasmus. I visited 3 cities in Poland. These are; Warsaw, the city center which is also my Erasmus city, Krakow and finally Gdansk. I liked all of them but I liked Krakow the most because it was beautiful like a fairytale city and it felt unreal."
    },
    {
        name: 'Portugal',
        coordinates: [-8.2245, 39.3999],
        info: "Portugal is the first country I visited in Europe after Poland. I visited 3 cities in Portugal: Porto, Lisbon and Coimbra. I went there to visit my friend Elif who was doing Erasmus. We stayed for 3 days and had a lot of fun visiting many places."
    },
    {
        name: 'Spain',
        coordinates: [-3.7492, 40.4637],
        info: "Spain is the country we squeezed into our Portugal trip for two days because it is close to Portugal. We had the opportunity to visit 2 cities in 2 days, Madrid and Barcelona. We tried to explore without sleeping or staying in one place. It was a country that I had a lot of fun and was among my favorite countries. 2 days was definitely not enough, the longer the stay, the better."
    },
    {
        name: 'Italy',
        coordinates: [12.5674, 41.8719],
        info: "I visited 4 cities in Italy; Rome, Milan, Venice and Turin. Since my friends were staying in Turin, we visited in detail. It was a small city and had few places to visit but it had a very sweet atmosphere. Rome... It was my favorite city throughout all my travels. There was a different natural and artificial beauty at every corner. I would love to go and visit again. We didn't stay in Milan and Venice, we visited for a day. But it was enough, even though there was not much to visit, it was very enjoyable to walk on the streets."
    },
    {
        name: 'Vatican',
        coordinates: [12.4534, 41.9029],
        info: "There is also the Vatican in Italy. Contrary to popular belief, it is the smallest country in the world. That's why I wanted to add it to the countries I visited."
    },
    {
        name: 'Hungary',
        coordinates: [19.5033, 47.1625],
        info: "We only visited Budapest in Hungary, but it was very enjoyable to take a cruise tour on the Danube River, seeing its historical structure and the famous parliament building."
    },
    {
        name: 'Czech Republic',
        coordinates: [15.4730, 49.8175],
        info: "We stayed in Prague, the capital of the Czech Republic, where I celebrated the New Year's Eve, for 3 days and toured it in great detail. It had a very beautiful natural atmosphere. Prague is a place I love at least as much as Rome because it is cheap and we had a very enjoyable New Year's Eve. It has a very special place in my heart."
    },
    {
        name: 'Austria',
        coordinates: [14.5501, 47.5162],
        info: "Finally, we had the opportunity to visit Vienna, the capital of Austria. It was a very expensive country so it was a bit difficult, but it was still a wonderful place with its rich history and unique museums."
    }
];


countries.forEach(country => {

    const marker = new mapboxgl.Marker({ color: '#2ecc71' })
        .setLngLat(country.coordinates)
        .addTo(map);


    const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3>${country.name}</h3><p>${country.info}</p>`);


    marker.getElement().addEventListener('click', () => {
        popup.addTo(map);
        popup.setLngLat(country.coordinates);
        popup.setHTML(`<h3>${country.name}</h3><p>${country.info}</p>`);
        document.getElementById('country-info').innerHTML = `<strong>${country.name}</strong>: ${country.info}`;
    });
});
