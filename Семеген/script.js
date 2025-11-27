// URL JSON
const requestURL = 'https://semegenkep.github.io/json/example.json';

// Створення запиту
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// Обробка отриманих даних
request.onload = function () {
    const superHeroes = request.response;
    // console.log(superHeroes); // для перевірки

    populateHeader(superHeroes);
    showHeroes(superHeroes);
};

// ==========================================
// 1) Функція заповнення заголовку сторінки
// ==========================================

function populateHeader(obj) {
    const header = document.querySelector('header');

    const h1 = document.createElement('h1');
    h1.textContent = obj.squadName;

    const p = document.createElement('p');
    p.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;

    header.appendChild(h1);
    header.appendChild(p);
}

// ==========================================
// 2) Функція створення карток героїв
// ==========================================

function showHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;

    heroes.forEach(hero => {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = hero.name;

        const p1 = document.createElement('p');
        p1.textContent = `Secret identity: ${hero.secretIdentity}`;

        const p2 = document.createElement('p');
        p2.textContent = `Age: ${hero.age}`;

        const p3 = document.createElement('p');
        p3.textContent = 'Superpowers:';

        const ul = document.createElement('ul');
        hero.powers.forEach(power => {
            const li = document.createElement('li');
            li.textContent = power;
            ul.appendChild(li);
        });

        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(ul);

        section.appendChild(article);
    });
}
