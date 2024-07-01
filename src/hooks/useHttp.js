import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();
  console.log(response, url);
  if (!response.ok) {
    throw new Error(
      response.statusText + " Erro " + response.status,
      // resData.message || "Something went wrong, failed to send request."
      console.log(Error, resData.error)
    );
  }
  return resData;
}

export default function useHttp(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest(url, config) {
    let resData = null;
    let error = null;
    setIsLoading(true);
    try {
      resData = await sendHttpRequest(url, config);
      console.log(resData);
      setData(resData);
    } catch (err) {
      error = err;
      setError(err.message);
      console.log(err.message);
    }
    setIsLoading(false);
      return {resData, error};
  }, [url]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}