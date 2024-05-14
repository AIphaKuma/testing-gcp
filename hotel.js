const functions = require('@google-cloud/functions-framework');

const hotelData = {
    hotel1: "aaaaaaaaaaa",
    hotel2: "bbbbbbbbb",
    hotel3: "ccccccccccc"
};

function load() {
    if (Object.keys(hotelData).length === 0) {
        throw new Error("Aucun hotels disponible");
    }
    return hotelData;
}

functions.http('getHotels', (req, res) => {
    try {
        const data = load();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
