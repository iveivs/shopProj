import classNames from "classnames";
import cls from "./Skeleton.module.scss"

const Skeleton = (props) => {
    const { className, width, height, border } = props;
    const style = {

    }
    return <div className={classNames()}>Skeleton</div>;
};

export { Skeleton };
