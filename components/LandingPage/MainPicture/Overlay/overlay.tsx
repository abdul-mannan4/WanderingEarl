import Hero from "../../Hero/hero"
export default function Overlay(){
    return(
    
        <div
          className="absolute inset-0 w-full h-full
                          bg-[linear-gradient(180deg,rgba(30,54,91,0)_0%,rgba(30,54,92,0.3)_30%,#1e365c_100%)] " >

                            <Hero />
                          </div>
    )
}