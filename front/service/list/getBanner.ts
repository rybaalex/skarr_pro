import useHttp from "store/hooks/useHttp";

const useGetBanner = () => {
  const { request, loading, error } = useHttp();

  const getBanner = async () => {
    return await request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/banner",
      "GET",
    );
  };

  return { getBanner, loading, error };
};

export { useGetBanner };
