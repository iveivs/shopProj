import cls from "./MainLayout.module.sass"

const MainLayout = () => {
    return <div id="app" className="app">
        <p>Header</p>

        <main className={cls.main}></main>
        Main</div>
    
}

export { MainLayout } 