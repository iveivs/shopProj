import cls from "./MainLayout.module.sass"

const MainLayout = () => {
    return <div id="app" className="app">
        <p>Header</p>

        <main className={cls.main}>
            <div className={cls.container}>
                <div className={cls.body}>
                    <p></p>

                </div>
            </div>
        </main>
        Main</div>
    
}

export { MainLayout } 