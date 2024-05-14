const { getPictures } = require('./pictures');

describe('Hotel Pictures List', () => {
    test('Hotel Pictures load correctly', () => {
        const expectedPictures = {
            hotel1: ["EEEEEEEEEEE.png", "DDDDDDDDDDD.png"],
            hotel2: ["FFFFFFFFFFF.png", "GGGGGGGGGGG.png"],
            hotel3: ["HHHHHHHHHHHH.png", "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"]
        };
        expect(getPictures()).toEqual(expectedPictures);
    });
});
