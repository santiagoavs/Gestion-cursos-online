import { useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  return { data, fetchData };
}
