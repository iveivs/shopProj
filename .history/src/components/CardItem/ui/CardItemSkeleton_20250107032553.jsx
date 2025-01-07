import { Skeleton } from "@/ui/Skeleton";
import cls from "./CardItem.module.scss"

const CardItemSkeleton = () => {
    return (
        <article className={cls.card}>
            <Skeleton className={cls.img} width={"100%"} height={300} />

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