import { counterActions } from "@/redux/counter/slice";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
    const count = useSelector(get);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch( counterActions.increment() )}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(counterActions.decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default MainPage;
