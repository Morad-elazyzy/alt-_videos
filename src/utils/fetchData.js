import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "d5a9982b39mshba434b33ed76238p190cdejsn51f7cb7f69c3",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  // axios.get(`${BASE_URL}/${url}`, options).then((res) => res);
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    if (data.error) {
      throw new Error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
