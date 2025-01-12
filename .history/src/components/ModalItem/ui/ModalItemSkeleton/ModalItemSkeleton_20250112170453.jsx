import cls from "@/layouts/ModalItemLayout/ui/ModalItemLayout.module.scss";
import { Skeleton } from "@/ui/Skeleton";

const ModalItemSkeleton = () => {
    return (
        <div className={cls.body}>
            <Skeleton width={450} height={450} />
            <div className={cls.content}>
                {/* <h3 className={cls.title}>{params.title}</h3> */}
                <Skeleton width={250} height={25} className={cls.title} />

                {/* {options && options} */}
                <div className={cls.options}>
                    <div className={cls.block}>
                    <Skeleton width={100} height={35} />

                        <div className={cls.item}>
                            <Skeleton width={280} height={} />
                            <Skeleton width={280} height={35} />
                        </div>
                    </div>

                    <div className={cls.block}>
                        <p>Размеры</p>

                        <div className={cls.item}>
                            {product.sizes.map((size, i) => {
                                return (
                                    <Button
                                        border
                                        variant={"clear"}
                                        key={i}
                                        active={sizePizza === size}
                                        onClick={() => handleClickSize(size)}
                                    >
                                        {size.name}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={cls.footer}>
                    <span className={cls.price}>
                        {" "}
                        Итого {params.price} руб.
                    </span>
                    <Button border className={cls.button}>
                        Добавить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { ModalItemSkeleton };
