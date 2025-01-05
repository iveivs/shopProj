
import { useGetPizzas } from "@/api/rtkApi";

const MainPage = () => {
    // const count = useSelector(getCount);
    // const dispatch = useDispatch();

    const { data, isLoading, error } = useGetPizzas()
    // console.log('data', data);

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
