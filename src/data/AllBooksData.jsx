// 109678222bb79c3a7dca9b9107d78c37
import axios from "axios";
import { useEffect, useState } from "react";
const REST_API_KEY = "109678222bb79c3a7dca9b9107d78c37";
function AllBooksData(query, target) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dapi.kakao.com/v3/search/book", {
        headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
        params: {
          query: query,
          target: target,
          size: 25,
        },
      })
      .then((response) => {
        // API 요청에 대한 처리
        // setData(JSON.stringify(response));
        setData(response.data.documents)
      })
      .catch((error) => {
        // 에러 처리
        alert(error)
      });
  }, []);
  return data;
}

export default AllBooksData;
