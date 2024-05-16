const express = require('express');
const request = require('supertest');
const app = require('../oregontrailServer');

// Define player data
const playerData = {
    playerName: "John",
    playerNames: ["J", "Jane", "Jack", "Jill"],
    playerProfession: "Banker",
    playerMoney: 2000,
    startMonth: "March",
}

const gameData = {
    "playerNames": [
        "John",
        "{\"J\"",
        "\"Jane\"",
        "\"Jack\"",
        "\"Jill\"}"
    ],
    "playerStatus": [
        "Alive",
        "Alive",
        "Alive",
        "Alive"
    ],
    "playerProfession": "Banker",
    "playerMoney": 2000,
    "startMonth": "March",
    "milesTraveled": 0,
    "groupHealth": 100,
    "currentPace": [
        {
            "name": "Steady",
            "miles": 20,
            "healthChange": 0
        },
        {
            "name": "Strenuous",
            "miles": 25,
            "healthChange": -3
        },
        {
            "name": "Grueling",
            "miles": 30,
            "healthChange": -8
        },
        {
            "name": "Resting",
            "miles": 0,
            "healthChange": 5
        }
    ],
    "daysOnTrail": 0,
    "currentWeather": {
        "id": 4,
        "type": "Cool",
        "healthChange": 1,
        "mileChange": 0.95,
        "probability": 0.1
    },
    "currentTerrain": {
        "name": "Grassland",
        "imageUrl": "https://cdn.pixabay.com/photo/2017/04/07/18/23/landscape-2211587_1280.jpg"
    },
    "message": ""
}

describe('PUT /api/setup/createPlayer', () => {
    it('Responds with Successly Created and 200 status code', async () => {
        const res = await request(app)
            .put('/api/setup/createPlayer')
            .send(playerData);
        expect(res.body.message).toEqual("Player data added successfully");
        expect(res.statusCode).toEqual(200);
    });
});


describe('GET /api/setup/player', () => {
    it('Responds with player data and 200 status code', async () => {

    });
});





