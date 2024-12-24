import cls from "./MainLayout.module.sass"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return <div id="app" className="app">
        <p>Header</p>

        <main className={cls.main}>
            <div className={cls.container}>
                <div className={cls.body}>
                    <p>Navbar</p>

                </div>
            </div>
        </main>
    </div>
    
}

export { MainLayout } 