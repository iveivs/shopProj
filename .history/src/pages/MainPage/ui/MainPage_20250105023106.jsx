import { useGetPizzas } from "@/api/rtkApi";

const MainPage = () => {

    const { data, isLoading, error } = useGetPizzas()

    return (
        <>
            
        </>
    );
};

export default MainPage;
