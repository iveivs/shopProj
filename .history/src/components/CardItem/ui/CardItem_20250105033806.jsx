import cls from "./CardItem.module.scss"

const CardItem = (props) => {
    const { id, img, title, product, ingredients } = props;
    return <articl e>
        <img className={cls.img} src={img} />
    </articl>;
};

export { CardItem };
