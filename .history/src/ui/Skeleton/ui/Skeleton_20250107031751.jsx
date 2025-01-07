import classNames from "classnames";
import cls from "./Skeleton.module.scss";

const Skeleton = (props) => {
    const { className, width, height, border } = props;
    const style = {
        width
height
border
    };
    return (
        <div className={classNames(cls.skeleton, className)} style={style}>
            Skeleton
        </div>
    );
};

export { Skeleton };
