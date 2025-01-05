import cls from "./CardItem.module.scss"

const CardItem = (props) => {
    const { id, img, title, product, ingredients } = props;
    return <article className={cls.card}>
        <img className={cls.img} src={img} />

        <div className={cls.body}>
            <div></div>
        </div>
    </article>;
};

export { CardItem };
