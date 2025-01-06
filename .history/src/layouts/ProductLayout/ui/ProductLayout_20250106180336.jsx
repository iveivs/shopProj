import React from "react";
import { Link } from "react-router-dom";
import cls from "./ProductLayout.module.scss";

const ProductLayout = (props) => {
    const { header, items } = props;
    return (
        <>
            <Link className={cls.link} to="/" >Вернуться назад</Link>
            <section className={cls.product}>
                <h2>{header}</h2>
            </section>
        </>
    );
};

export { ProductLayout };
