import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "9799d17757mshb3320c417f3dae9p105580jsn6b424d215c75",
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
