import { useNavbarItemsList } from "@/utils/useNavbarItemsList";
import { NavbarItems } from "../NavbarItems/NavbarItems";
import cls from './Navbar.module.scss'
import { useMemo } from "react";

function Navbar() {
    const navbatItemsList = useNavbarItemsList();

    const itemsList = useMemo(() => {
        return navbatItemsList.map((item) => (
            <NavbarItems key={item.path} item={item} />
        ));
    }, [navbatItemsList]);
    return <nav className={cls.navbar}>{itemsList}</nav>;
}

export { Navbar };
