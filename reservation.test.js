const reservation = require('./reservation');

describe('Booking List', () => {
    test('Load booking list correctly', () => {
        expect(reservation.load()).toEqual({
            reservation1: "aaaaaaaaaaa",
            reservation2: "bbbbbbbbb",
            reservation3: "ccccccccccc"
        });
    });
});