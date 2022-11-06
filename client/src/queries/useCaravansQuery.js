import { useQuery } from "@tanstack/react-query";
import { defaultConfig } from "./util";

const caravansPlaceholderData = {
  caravans: [],
};

// GET /twee gets all caravans
// data: Caravan[]
const fetchCaravans = async () => {
  const result = await fetch(`${process.env.REACT_APP_BASE_URL}/twee`);
  if (result.status >= 200 && result.status < 300) {
    const responseJson = await result.json();
    console.log({ responseJson });
    return responseJson.data;
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
