import axios from "axios";
import { useEffect, useState } from "react";

const REST_API_KEY = "109678222bb79c3a7dca9b9107d78c37";

function BooksData(query, sort, page, size, target) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dapi.kakao.com/v3/search/book", {
        headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
        params: {
          query: query,
          sort: sort,
          page: page,
          size: size,
          target: target,
        },
      })
      .then((response) => {
        // API 요청에 대한 처리
        setData(response.data.documents);
      })
      .catch((error) => {
        // 에러 처리
        alert(error);
      });
  }, [query, sort, page, size, target]); // 의존성 배열에 search 파라미터를 추가

  return data;
}

export default BooksData;
