import cls from '@/layouts/ModalItemLayout/ui/ModalItemLayout.module.scss'
import { Skeleton } from '@/ui/Skeleton';

const ModalItemSkeleton = () => {
    return (
        <div className={cls.body}>
            <Skeleton width={450} height={450} />
            <div className={cls.content}>
                {/* <h3 className={cls.title}>{params.title}</h3> */}
                <Skeleton width={250} height={25}  className={cls.title}/>

                {options && options}

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
