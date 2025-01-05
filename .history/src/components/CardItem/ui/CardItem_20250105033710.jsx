const CardItem = (props) => {
    const { id, img, title, product, ingredients } = props;
    return <article>
        <img src={img} />
    </article>;
};

export { CardItem };
