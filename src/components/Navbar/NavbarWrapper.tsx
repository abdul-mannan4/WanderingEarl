"use client"

import Navbar from "./navbar";
import { usePathname } from "next/navigation";


const routeVariantMap:Record<string,"transparent"|"solid">={
    "/":"transparent",
    "/tours": "solid",       
    "/aboutUS": "solid",
    "/ourStyle": "solid",
    "/privateTours": "solid",
    "/pastTours": "solid",
    "/contactUs": "solid",
}


export default function NavBarWrapper(){

    const pathName=usePathname();
    const variant=routeVariantMap[pathName] ?? "solid";
    return(

        <Navbar variant={variant} />
    )
}
