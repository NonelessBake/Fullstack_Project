import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return data;
};

export default useFetch;
