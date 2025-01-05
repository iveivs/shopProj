import cls from "./ProductTape.module.scss";
const ProductTape = (props) => {
    const {
        title,
        products = [],
        isLoading = false,
        error = undefined,
    } = props;

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <section className={cls.title}>
            <h2 className={cls.title}>{title}</h2>
        </section>
    );
};

export { ProductTape };
