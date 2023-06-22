import axios from "axios";
const apiKey = "el1exbrk6jVfffHnExYVFyYGOTGRzjprAHoKpQ1d";

const getParkImage = async (parkCode) => {
    const res = await axios.get(`https://developer.nps.gov/api/v1/multimedia/galleries/assets?parkCode=${parkCode}&api_key=${apiKey}&limit=1`);
    if (res.status === 200) {
        return res.data.data[0]?.fileInfo.url;
    }
}

const getParkImages = async (parkCode, numOfImages) => {
    const res = await axios.get(`https://developer.nps.gov/api/v1/multimedia/galleries/assets?parkCode=${parkCode}&api_key=${apiKey}&limit=${numOfImages}`);
    const images = [];
    if (res.status === 200) {
        res.data.data.forEach(function (img) {
            images.push(img.fileInfo.url)
        });
    }
    return images;
}

const getParkAmenities = async (parkCode) => {
    const res = await axios.get(`https://developer.nps.gov/api/v1/amenities?parkCode=${parkCode}&api_key=${apiKey}&limit=3`);
    const amenities = [];
    if (res.status === 200) {
        res.data.data.forEach(function (amenity) {
            amenities.push(amenity);
        });
        return amenities;
    }
}

const getParkArticles = async (parkCode) => {
    const res = await axios.get(`https://developer.nps.gov/api/v1/articles?parkCode=${parkCode}&api_key=${apiKey}&limit=3`);
    const articles = [];
    if (res.status === 200) {
        res.data.data.forEach(function (article) {
            articles.push(article);
        });
        return articles;
    }
}

const getParkCampgrounds = async (parkCode) => {
    const res = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=${apiKey}&limit=3`);
    const campgrounds = [];
    if (res.status === 200) {
        res.data.data.forEach(function (campground) {
            campgrounds.push(campground);
        });
        return campgrounds;
    }
}


export { getParkImage, getParkImages, getParkAmenities, getParkArticles, getParkCampgrounds };