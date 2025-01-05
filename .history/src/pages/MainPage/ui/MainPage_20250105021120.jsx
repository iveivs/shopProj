import { useGetPizzas } from "@/api/rtkApi";

const MainPage = () => {

    const { data, isLoading, error } = useGetPizzas()

    return (
        <p>Main</p>

    );
};

export default MainPage;
