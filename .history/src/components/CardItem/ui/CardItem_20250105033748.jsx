import cls from "./CardItem.module"

const CardItem = (props) => {
    const { id, img, title, product, ingredients } = props;
    return <article>
        <img className={cls.img} src={img} />
    </article>;
};

export { CardItem };
