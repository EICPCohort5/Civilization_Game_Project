import { restServer } from './config.js';

let publishersResponse = await fetch('/publishers');
let publishers = await publishersResponse.json();
let publisherOptions = publishers.map((publisher) => {
  let option = document.createElement('option');
  option.setAttribute('value', publisher.publisherId);
  option.textContent = publisher.publisherName;
  return option;
});
let selectListPub = document.querySelector('#game-publisher');
selectListPub.replaceChildren(...publisherOptions);
selectListPub.disabled = false;

let platformsResponse = await fetch('/platforms');
let platforms = await platformsResponse.json();
let platformOptions = platforms.map((platform) => {
  let option = document.createElement('option');
  option.setAttribute('value', platform.platformId);
  option.textContent = platform.platformName;
  return option;
});
let selectListPlat = document.querySelector('#game-platform');
selectListPlat.replaceChildren(...platformOptions);
selectListPlat.disabled = false;

let form = document.querySelector('#add-game-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let submitButton = form.querySelector('[type=submit]');
  //submitButton.disabled = true;
  let gameFormData = new FormData(form);
  let game = {};
  for (let [key, value] of gameFormData.entries()) {
    game[key] = value;
  }

  // Steps found at https://github.com/EICPCohort5/awesome-cohort/blob/main/week-5-project.md
  // Step 1
  // Next step is in app.js and routes/books.js
  fetch(restServer, {
    method: 'POST',
    body: JSON.stringify(game),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      // Step 9
      if (response.ok) {
        return response.json();
      } else {
        console.log('Bad response? ', response);
      }
    })
    .then((results) => {
      // Step 10
      console.log(`Added game with id ${results.gameId}`);
      let notifyElement = document.querySelector('#notifications');
      let message = document.createElement('p');
      message.classList.add('notification-fade');
      message.textContent = `Added game with id ${results.gameId}`;
      notifyElement.replaceChildren(message);
      setTimeout(() => message.classList.add('hidden'), 500);
      submitButton.disabled = false;
    });
});

export {};
