import React from "react";
import { Link } from "react-router-dom";
import cls from "./ProductLayout.module.scss";
import { CardItemSkeleton } from "@/components/CardItem";


export const ProductLayoutSkeleton = () => {
    return (
        <section className={cls.productBody}>
            <h2 className={cls.title}>{header}</h2>

            <div className={cls.content}>
                <div className={cls.card}>
                    {new Array(4).fill(0).map((_, i) => (
                        <CardItemSkeleton key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProductLayout = (props) => {
    const { header, item } = props;
    return (
        <>
            <Link className={cls.link} to="/">
                Вернуться назад
            </Link>
            <section className={cls.productBody}>
                <h2 className={cls.title}>{header}</h2>

                <div className={cls.content}>{item}</div>
            </section>
        </>
    );
};

export { ProductLayout };
