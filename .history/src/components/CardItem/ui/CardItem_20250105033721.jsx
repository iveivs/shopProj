const CardItem = (props) => {
    const { id, img, title, product, ingredients } = props;
    return <article>
        <img className="" src={img} />
    </article>;
};

export { CardItem };
