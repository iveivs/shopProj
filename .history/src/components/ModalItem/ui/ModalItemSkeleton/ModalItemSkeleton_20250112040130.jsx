import cls from ""

const ModalItemSkeleton = () => {
    return (
        <div className={cls.body}>
            <img src={params.img} className={cls.img} />
            <div className={cls.content}>
                <h3 className={cls.title}>{params.title}</h3>

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
