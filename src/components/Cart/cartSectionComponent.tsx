
import CartBtnComponent from './cartBtnComponent'
import CheckOutBtn from './checkOutBtn'
import CounterBtn from './counterBtn'

type CartBtnProps = {
    title: string
    heighlightedWord?: string
    btnText1?: string
    btnText2?: string
    border1?: string
    border2?: string
    btnMoney1?: string
    btnMoney2?: string
    sold?: boolean
    gap?: string
    isCheckoutBtn?: boolean
    isCounterBtn?: boolean
}

export default function CartSectionComponent({ title, heighlightedWord, border1 = "border-[#D6D6D6]", border2 = "border-[#D6D6D6]",
    btnText1 = "", btnText2 = "", isCheckoutBtn = false, isCounterBtn = false
    , btnMoney1, btnMoney2, sold = false, gap = "gap-[16px]" }: CartBtnProps) {
    return (
        <div className="flex flex-col gap-[10px] lg:gap-[15px] xl:gap-[20px] w-full">
            <h2 className="text-[14px] lg:text-[16px] xl:text-[20px] text-dark-gray font-semibold">
                {heighlightedWord ? (
                    <>
                        {title.split(heighlightedWord)[0]}
                        <span className='text-primary-navy'>{heighlightedWord}</span>
                        {title.split(heighlightedWord)[1]}
                    </>

                ) :
                    (title)
                }
            </h2>
            <div
                className={`flex items-stretch ${gap === "gap-[16px]"
                    ? "gap-[8px] sm:gap-[10px] xl:gap-[16px]"
                    : "gap-[16px] sm:gap-[32px] md:gap-[136px]"
                    } max-w-[533px] w-full`}
            >
                <div className="flex-1 min-w-0 flex">
                    {isCounterBtn ? (
                        <CounterBtn />
                    ) : (
                        <div className="w-full">
                            <CartBtnComponent btnText={btnText1} border={border1} btnMoney={btnMoney1} sold={sold} />
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0 flex">
                    {isCheckoutBtn ? (
                        <CheckOutBtn />
                    ) : (
                        <div className="w-full">
                            <CartBtnComponent btnText={btnText2} border={border2} btnMoney={btnMoney2} sold={false} textColor='text-[#1E365C]' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
