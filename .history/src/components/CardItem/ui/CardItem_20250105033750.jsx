import cls from "./CardItem.module.scss"

const CardItem = (props) => {
    const { id, img, title, product, ingredients } = props;
    return <article>
        <img className={cls.img} src={img} />
    </article>;
};

export { CardItem };
