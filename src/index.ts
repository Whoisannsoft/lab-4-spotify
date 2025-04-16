import {Card} from './components/cards/cards';
import { requestToAPI } from './requestToAPI';
import { loadMore } from './requestToAPI';

customElements.define('song-card', Card);

const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);
const style = document.createElement('style');
style.textContent = `

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }

    body{
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding:5%;
        overflow-x: hidden;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
        flex-wrap: wrap;
        gap: 16px;
        width: auto;
        height: auto;

        padding: 16px;
        background-color:rgb(233, 126, 5);
        border: 1px solid #ddd;
        border-radius: 8px;
    }
`;
document.head.appendChild(style);

const title = document.createElement('h1');
title.textContent = 'Dragon Ball Characters';
title.style.textAlign = 'center';
title.style.color = 'black';
title.style.fontFamily = 'Arial, sans-serif';
title.style.fontSize = '2rem';
title.style.marginBottom = '16px';
document.body.insertBefore(title, container);

const loadMoreButton = document.createElement('button');
loadMoreButton.textContent = 'Load More';
loadMoreButton.style.padding = '10px 20px';
loadMoreButton.style.backgroundColor = '#4CAF50';
loadMoreButton.style.color = 'white';
loadMoreButton.style.border = 'none';
loadMoreButton.style.borderRadius = '5px';
loadMoreButton.style.cursor = 'pointer';
loadMoreButton.style.fontSize = '1rem';
loadMoreButton.style.marginTop = '16px';

document.body.appendChild(loadMoreButton);

loadMoreButton.addEventListener('click', () => {
    const page = Math.floor(container.children.length / 10) + 1;
    console.log(page);
    loadMoreButton.remove();
    loadMore(page);
    document.body.appendChild(loadMoreButton);
});

document.addEventListener('DOMContentLoaded', () => {
    requestToAPI();
});