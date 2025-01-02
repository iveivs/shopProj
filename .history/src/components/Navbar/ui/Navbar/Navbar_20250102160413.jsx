import { useNavvarItemsList } from "@/utils/useNavvarItemsList";
import { NavbarItems } from "../NavbarItems/NavbarItems";

function Navbar() {
    const navbatItemsList = useNavvarItemsList();

    const itemsList = () => {
        return navbatItemsList.map((item) => <NavbarItems  key={item.path} item={ item } />);
    };
    return <nav className="">Navbar</nav>;
}

export { Navbar };
