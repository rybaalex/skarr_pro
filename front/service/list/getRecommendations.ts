import useHttp from "store/hooks/useHttp";

const useGetRecommendations = () => {
  const { request, loading, error } = useHttp();

  const getRecommendations = async () => {
    return await request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/recommendations",
      "GET",
    );
  };

  return { getRecommendations, loading, error };
};

export { useGetRecommendations };
