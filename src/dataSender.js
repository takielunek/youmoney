import axios from "axios";

function dataSender(data) {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: import.meta.env.VITE_APP_URL,
    headers: {
      APP_KEY: import.meta.env.VITE_APP_KEY,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default dataSender;

console.log(import.meta.env.VITE_APP_KEY);
console.log(import.meta.env.VITE_APP_URL);