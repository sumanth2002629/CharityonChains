// export async function fetchData(hash, func) {
//   const url = "https://ipfs.io/ipfs/" + hash;

//   let response = await fetch(url);


//   return response.json();
//   //How to return data instead of promise form this function?

// }

import axios from "axios";

export const fetchData = async (hash) => {
  const res = await axios.get(
    "https://ipfs.io/ipfs/" + hash
  );
  console.log(res.data);
  return res.data;
};


// export default fetchData;
