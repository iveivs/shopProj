import { useNavvarItemsList } from "@/utils/useNavvarItemsList";
import { NavbarItems } from "../NavbarItems/NavbarItems";
import cls from './Navbar.module.scss'

function Navbar() {
    const navbatItemsList = useNavvarItemsList();

    const itemsList = useM () => {
        return navbatItemsList.map((item) => (
            <NavbarItems key={item.path} item={item} />
        ));
    };
    return <nav className={cls.navbar}>{itemsList()}</nav>;
}

export { Navbar };
