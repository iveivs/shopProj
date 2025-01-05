import cls from "./CardItem.module.scss"

const CardItem = (props) => {
    const { id, img, title, product, ingredients } = props;
    return <article className={cls.img}>
        <img className={cls.img} src={img} />
    </article>;
};

export { CardItem };
