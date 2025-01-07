import { Skeleton } from "@/ui/Skeleton";
import cls from "./CardItem.module.scss"

const CardItemSkeleton = () => {
    return (
        <article className={cls.card}>
            <img className={cls.img} src={img} />
            <Skeleton className={cls.card} width={""} />

            <div className={cls.body}>
                <div className={cls.info}>
                    <p className={cls.title}>{title}</p>
                    <span className={cls.text}>
                        {product === productsName.OTHERS
                            ? description
                            : ingredientsText}
                    </span>
                </div>

                <div className={cls.footer}>
                    <Button border className={cls.button}>
                        Выбрать
                    </Button>
                    
                    {product === productsName.OTHERS ? <span>{price} P.</span> : <span> от {price} P.</span> }
                </div>
            </div>
        </article>
    );
}

export  {CardItemSkeleton}