import { useNavvarItemsList } from "@/utils/useNavvarItemsList"

function Navbar() {
    const navbatItemsList = useNavvarItemsList()

    const itemsList = () => {
        return navbatItemsList.map(item => (
            <N
        ))
    }
  return (
    <div>Navbar</div>
  )
}

export  { Navbar }