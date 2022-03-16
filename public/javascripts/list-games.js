import { restServer } from './config.js';

// (1) User requests a url
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let results = await response.json();
            renderTable(results);
        } else {
            console.log(`Could not find anything at ${url}`);
        }
    } catch(error) {
        console.error(`Couldn't fetch data because ${error}`);
    }
}

function renderTable(games) {
    let tableBody = document.querySelector('#games-container tbody');
    let rows = [];
    for (let game of games) {
        let row = document.createElement('tr');
        row.insertAdjacentHTML(
            `beforeend`,
            `
            <td>${game.title}</td>
            <td>${game.releaseDate}</td>
            <td>${game.publisherId}</td>
            <td>${game.platformId}</td>
            `
        );
        rows.push(row);
    }
    tableBody.append(...rows);
}

fetchData(restServer);
