import cls from "./PageLoader.module"

const PageLoader = () => {
  return (
    <div className={class.pageLoader}>
        <div className="lds-dual-ring">PageLoader</div>
    </div>
  )
}

export  {PageLoader}