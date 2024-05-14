const { getBooking, hotelInfo } = require('./booking');

describe('getBooking Function', () => {
    test('should return only the hotels that are booked with their names and pictures', () => {
        const expectedOutput = [
            {
                name: "cccccccccccccccccccc",
                pictures: ["HHHHHHHHHHHH.png", "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"]
            }
        ];
        const result = getBooking();  // Utiliser la fonction importée
        expect(result).toEqual(expectedOutput);
    });

    test('should return an empty array if no hotels are booked', () => {
        // Modifier temporairement hotelInfo pour simuler aucun hôtel réservé
        hotelInfo.hotel3[0].book = "false";
        const result = getBooking();
        expect(result).toEqual([]);
        // Restaurer l'état original après le test
        hotelInfo.hotel3[0].book = "true";
    });
});
