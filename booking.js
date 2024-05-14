const hotelInfo = {
    hotel1: [
        {
            name: "aaaaaaaaaaa",
            pictures: {
                photo1: "EEEEEEEEEEE.png",
                photo2: "DDDDDDDDDDD.png"
            },
            book:"false"
        }
    ],
    hotel2: [
        {
            name: "bbbbbbbbbbbbbbb",
            pictures: {
                photo1: "FFFFFFFFFFF.png",
                photo2: "GGGGGGGGGGG.png"
            },
            book:"false"
        }
    ],
    hotel3: [
        {
            name: "cccccccccccccccccccc",
            pictures: {
                photo1: "HHHHHHHHHHHH.png",
                photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
            },
            book:"true"
        }
    ],
};

function getBooking() {
    const bookingList = [];
    Object.keys(hotelInfo).forEach(hotelKey => {
        const hotel = hotelInfo[hotelKey][0];
        if (hotel.book === "true") {
            bookingList.push({
                name: hotel.name,
                pictures: Object.values(hotel.pictures)
            });
        }
    });
    return bookingList;
}

module.exports = { getBooking, hotelInfo };  // Exporter pour le test
