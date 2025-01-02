import { Header } from "@/components/Header";
import cls from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import { useTheme } from "@/assets/hooks/useThem";
import { Footer } from "@/components/Footer";

const MainLayout = () => {
    const { theme } = useTheme()
    return (
        <div id="app" className={`app ${theme}`}>
            <Header  />

            <main className={cls.main}>
                <div className={cls.container}>
                    <div className={cls.body}>
                        <
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { MainLayout };
