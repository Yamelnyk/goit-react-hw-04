import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (searchImg, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchImg,
      page: currentPage,
      per_page: 16,
      client_id: "QcVhui7T7-BUrfPP8J0YZEHkTvKxXyWuGQiyeOQpiPs",
    },
  });
  return response.data.results;
};
