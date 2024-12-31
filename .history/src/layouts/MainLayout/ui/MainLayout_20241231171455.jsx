import { Header } from "@/components/Header";
import cls from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
// import { useTheme } from "@/assets/hooks/useThem";

const MainLayout = () => {
    // const { theme } = useTheme
    return (
        // <div id="app" className={`app ${theme}`}>
        <div id="app" className='app app_light'>
            <Header  />

            <main className={cls.main}>
                <div className={cls.container}>
                    <div className={cls.body}>
                        <p>Navbar</p>
                        <Outlet />
                    </div>
                </div>
            </main>
            <p>Footer</p>
        </div>
    );
};

export { MainLayout };
