import { useQuery } from "react-query";
import { defaultConfig } from "./util";

const caravansPlaceholderData = {
  caravans: [],
};

const fetchCaravans = async () => {
  const result = await fetch("/twee");
  if (result.status >= 200 && result.status < 400) {
    const data = await result.json();
    console.log({ data });
    return data;
  } else {
    const error = new Error();
    error.message = result.message || "Could not fetch caravans";
    error.status = result.status || 400;
    throw error;
  }
};

export default function useCaravansQuery() {
  const shouldFetch = true;

  const { data, error, isLoading } = useQuery(["/twee"], fetchCaravans, {
    ...defaultConfig,
    retry: 0,
    enabled: shouldFetch ? true : false,
    placeholderData: caravansPlaceholderData,
  });

  return {
    data: data ? data : caravansPlaceholderData,
    error,
    isLoading,
  };
}
