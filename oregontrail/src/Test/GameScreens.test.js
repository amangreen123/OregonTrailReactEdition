const request = require('supertest');
const baseURL = 'http://localhost:8000';


describe("Test createPlayer", () => {
    test("Test createPlayer", async () => {
        const response = await request(baseURL).post("/api/setup/createPlayer").send({
            playerProfession: "Banker",
            playerMoney: 2000,
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.playerProfession).toBe("Banker");
        expect(response.body.playerMoney).toBe(2000);
    });
});

describe("Test Add Leader Name", () => {
    test("Test Add Leader Name", async () => {
        const response = await request(baseURL).post("/api/setup/createPlayer").send({
            playerName: "John",

        });
        expect(response.statusCode).toBe(200);
        expect(response.body.playerNames).toBe("John");
    });
});


describe("Test Group Names", () => {
    test("Test Group Names", async () => {
        const response = await request(baseURL).post("/api/setup/createPlayer").send({
            playerNames: ["John", "Jane", "Jack", "Jill"],
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.playerNames).toContain(["John", "Jane", "Jack", "Jill"]);
        expect(response.body.playerNames[0]).toBe("John");
    });
});

describe("Test Update Start Month", () => {
    test("Update Start Month", async () => {
        const response = await request(baseURL).post("/api/setup/createPlayer").send({
            startMonth: "March",
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.startMonth).toBe("March");
    });
});

describe ("Test the Setup Player Model", () => {
    test("Test the Setup Player Model", async () => {
        const response = await request(baseURL).post("/api/setup/createPlayer").send({
            playerName: "John",
            playerNames: ["J", "Jane", "Jack", "Jill"],
            playerProfession: "Banker",
            playerMoney: 2000,
            playerName: "John",
            playerNames: ["John", "Jane", "Jack", "Jill"],
            startMonth: "March",
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.playerProfession).toBe("Banker");
        expect(response.body.playerMoney).toBe(2000);
        expect(response.body.playerNames).toEqual(["John","John", "Jane", "Jack", "Jill"]);
        expect(response.body.playerNames[1]).toEqual("John");
    });

});


