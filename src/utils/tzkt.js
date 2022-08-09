// TODO 8 - Fetch lottery contract storage

import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1MT6xAxL4JvS7q9FTbNV186RABmLsZ5oo2/storage"
  );
  console.log(res.data);
  return res.data;
};
