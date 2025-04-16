export function requestToAPI() {
    fetch(`https://dragonball-api.com/api/characters`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        
    } )
    .then(function (response) {
        console.log(response);
        return response.json()
    })
    .then (function (data) {
        console.log(data);
        data.items.forEach((item: any) => {
            const card = createCard({
                name: item.name,
                body: "Ki: " + item.ki + "<br> MaxKi: " + item.maxKi,
                img: item.image,
                footer: item.race
            });
            const container = document.querySelector('.container');
            if (container) {
                container.appendChild(card);
            }
        });
    })
    .catch(function (error) {
        console.log('Error:', error);
    });
}

export function loadMore(page: number = 2) {
    fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    } )
    .then(function (response) {
        console.log(response);
        return response.json()
    }
    )
    .then (function (data) {
        data.items.forEach((item: any) => {
            const card = createCard({
                name: item.name,
                body: "Ki: " + item.ki + "<br> MaxKi: " + item.maxKi,
                img: item.image,
                footer: item.race
            });
            const container = document.querySelector('.container');
            if (container) {
                container.appendChild(card);
            }
        });

    })
    .catch(function (error) {
        console.log('Error:', error);
    });
}

function createCard(data: any) {
    const card = document.createElement('song-card');
    card.setAttribute('header', data.name);
    card.setAttribute('body', data.body);
    card.setAttribute('img', data.img);
    card.setAttribute('footer', data.footer);
    return card;
}
