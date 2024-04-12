import { firstGetData, secondGetData } from "./dom.js";

const firstAPI = "http://localhost:3000/first-data";
const secondAPI = "http://localhost:3000/second-data";
async function firstGet() {
  try {
    let response = await fetch(firstAPI);
    let firstData = await response.json();
    firstGetData(firstData);
  } catch (e) {
    console.log(e);
  }
}

async function secondGet() {
  try {
    let response = await fetch(secondAPI);
    let secondData = await response.json();
    secondGetData(secondData);
  } catch (e) {
    console.log(e);
  }
}

async function infoCard(id) {
  try {
    let response = await fetch(`${secondAPIAPI}${id}`,);
    secondGetData();
  }
  catch (e) {
    console.log(e);
  }
}

async function postCard(card) {
  try {
    let response = await fetch(secondAPI, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    })
    secondGetData();
  }
  catch (e) {
    console.log(e);
  };
}

async function putCard(id, el) {
  try {
    let response = await fetch(`${secondAPI}${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(el),
    })
    secondGetData();
  }
  catch (e) {
    console.log(e);
  };
}

export { firstGet, secondGet, infoCard, postCard, putCard };
