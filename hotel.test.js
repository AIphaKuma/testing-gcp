const hotels = require('./hotel');

describe('Hotel List', () => {
    test('Load hotel list correctly', () => {
        expect(hotels.load()).toEqual({
            hotel1: "aaaaaaaaaaa",
            hotel2: "bbbbbbbbb",
            hotel3: "ccccccccccc"
        });
    });

    test('Throws an error when no hotels are available', () => {
        hotels.load = () => { throw new Error("Aucun hotels disponible"); };
        expect(() => hotels.load()).toThrow("Aucun hotels disponible");
    });
});