import { useMutation, useQueryClient } from "@tanstack/react-query";

const createCaravan = async (data) => {
  console.log({ data });
  const response = await fetch("/twee", {
    method: "POST",
    body: JSON.stringify(data),
  });
  // if (response.status >= 200 && response.status < 300) {
  return {
    ...data,
    _id: Math.random(100000).toString(),
  };
  // }
};

export default function useCreateCaravanMutation() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    ["/twee", "/mutation"],
    (data) => createCaravan(data),
    {
      onMutate: async (newCaravanData, params) => {
        const caravansData = queryClient.getQueryData(["/twee"]);
        if (caravansData) {
          queryClient.setQueryData(["/twee"], (prevData) => {
            return [...prevData, { ...newCaravanData }];
          });
        }
      },
      onError: async () => {},
    }
  );

  return {
    mutate,
    isLoading,
  };
}
