"use client"

import React, { useState } from 'react'
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
    defaultSelected?: "btn1" | "btn2" | null
}

export default function CartSectionComponent({
    title,
    heighlightedWord,
    border1 = "border-[#D6D6D6]",
    border2 = "border-[#D6D6D6]",
    btnText1 = "",
    btnText2 = "",
    isCheckoutBtn = false,
    isCounterBtn = false,
    btnMoney1,
    btnMoney2,
    sold = false,
    gap = "gap-[16px]",
    defaultSelected = null
}: CartBtnProps) {
    const [selectedOption, setSelectedOption] = useState<"btn1" | "btn2" | null>(
        defaultSelected || (sold ? "btn2" : "btn1")
    );

    return (
        <div className="flex flex-col gap-[10px] lg:gap-[15px] xl:gap-[20px] w-full">
            <h2 className="text-[14px] lg:text-[16px] xl:text-[20px] text-dark-gray font-semibold">
                {heighlightedWord ? (
                    <>
                        {title.split(heighlightedWord)[0]}
                        <span className='text-primary-navy'>{heighlightedWord}</span>
                        {title.split(heighlightedWord)[1]}
                    </>
                ) : (
                    title
                )}
            </h2>
            <div
                className={`flex items-stretch ${
                    isCounterBtn || isCheckoutBtn
                        ? "gap-[100px] xl:gap-[16px] 2xl:gap-[24px] 3xl:!gap-[136px] min-[1800px]:!gap-[136px]"
                        : "gap-[8px] sm:gap-[10px] xl:gap-[16px]"
                } w-full max-w-full xl:max-w-[533px] 2xl:max-w-full`}
            >
                <div className="flex-1 min-w-0 flex">
                    {isCounterBtn ? (
                        <CounterBtn />
                    ) : (
                        <div className="w-full">
                            <CartBtnComponent
                                btnText={btnText1}
                                border={border1}
                                btnMoney={btnMoney1}
                                sold={sold}
                                isSelected={selectedOption === "btn1" && !sold}
                                onSelect={() => setSelectedOption("btn1")}
                            />
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0 flex">
                    {isCheckoutBtn ? (
                        <CheckOutBtn />
                    ) : (
                        <div className="w-full">
                            <CartBtnComponent
                                btnText={btnText2}
                                border={border2}
                                btnMoney={btnMoney2}
                                sold={false}
                                textColor='text-[#1E365C]'
                                isSelected={selectedOption === "btn2"}
                                onSelect={() => setSelectedOption("btn2")}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

