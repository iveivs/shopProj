import cls from "./PageLoader.module.scss"

const PageLoader = () => {
  return (
    <div className={cls.pageLoader}>
        <div className="lds-dual-ring">PageLoader</div>
    </div>
  )
}

export  {PageLoader}