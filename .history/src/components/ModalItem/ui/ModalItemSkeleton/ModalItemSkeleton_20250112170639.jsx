import cls from "@/layouts/ModalItemLayout/ui/ModalItemLayout.module.scss";
import { Skeleton } from "@/ui/Skeleton";

const ModalItemSkeleton = () => {
    return (
        <div className={cls.body}>
            <Skeleton width={450} height={450} />
            <div className={cls.content}>
                <Skeleton width={250} height={25} className={cls.title} />

                <div className={cls.options}>
                    <div className={cls.block}>
                    <Skeleton width={100} height={35} />

                        <div className={cls.item}>
                            <Skeleton width={280} height={50} />
                            <Skeleton width={280} height={50} />
                        </div>
                    </div>
                </div>

                <div className={cls.options}>
                    <div className={cls.block}>
                    <Skeleton width={100} height={35} />

                        <div className={cls.item}>
                            <Skeleton width={280} height={50} />
                            <Skeleton width={280} height={50} />
                        </div>
                    </div>
                </div>

                <div className={cls.footer}>
                    <span className={cls.price}>
                        {" "}
                        Итого {params.price} руб.
                    </span>
                    <Skeleton width={125} height={30} />
                    <Skeleton width={155} height={30} />
                    
                </div>
            </div>
        </div>
    );
};

export { ModalItemSkeleton };
