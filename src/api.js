import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async () => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "QcVhui7T7-BUrfPP8J0YZEHkTvKxXyWuGQiyeOQpiPs",
    },
  });
  console.log(response.data);
  return response.data;
};

// getImages().then((data) => console.log(data));
