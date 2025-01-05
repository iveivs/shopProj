import { useGetPizzas } from "@/api/rtkApi";

const MainPage = () => {

    const { data, isLoading, error } = useGetPizzas()

    return (
        <p>Main</p>
        // <div>
        //     <div>
        //         <button
        //             aria-label="Increment value"
        //             onClick={() => dispatch( counterActions.increment() )}
        //         >
        //             Increment
        //         </button>
        //         <span>{count}</span>
        //         <button
        //             aria-label="Decrement value"
        //             onClick={() => dispatch(counterActions.decrement())}
        //         >
        //             Decrement
        //         </button>
        //     </div>
        // </div>
    );
};

export default MainPage;
