const hotelsInfo = {
    hotel1: [
        {
            name: "aaaaaaaaaaa",
            pictures: {
                photo1: "EEEEEEEEEEE.png",
                photo2: "DDDDDDDDDDD.png"
            }
        }
    ],
    hotel2: [
        {
            name: "bbbbbbbbbbbbbbb",
            pictures: {
                photo1: "FFFFFFFFFFF.png",
                photo2: "GGGGGGGGGGG.png"
            }
        }
    ],
    hotel3: [
        {
            name: "cccccccccccccccccccc",
            pictures: {
                photo1: "HHHHHHHHHHHH.png",
                photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
            }
        }
    ],
}

function getPictures() {
    const pictureList = {}
    for (const hotel in hotelsInfo) {
        pictureList[hotel] = Object.values(hotelsInfo[hotel][0].pictures)
    }

    return pictureList
}

module.exports = { getPictures }