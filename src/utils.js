import axios from "axios";

const getParkImage = async (parkCode) => {
    const apiKey = "el1exbrk6jVfffHnExYVFyYGOTGRzjprAHoKpQ1d";
    const res = await axios.get(`https://developer.nps.gov/api/v1/multimedia/galleries/assets?parkCode=${parkCode}&api_key=${apiKey}&limit=1`);
    if (res.status === 200) {
        return res.data.data[0]?.fileInfo.url;
    }
}

export default getParkImage;