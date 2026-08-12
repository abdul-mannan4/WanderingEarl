import { ReactNode } from "react"

type overlayProps={
  children?:ReactNode,
  className?:string
}

export default function Overlay({children,className=""}:overlayProps){

    return(
    
        <div
          className={`absolute inset-0 w-full h-full
                          bg-[linear-gradient(180deg,rgba(30,54,91,0)_0%,rgba(30,54,92,0.3)_30%,#1e365c_100%)] ${className}}`} >
                              {children}
                            
                          </div>
    )
}