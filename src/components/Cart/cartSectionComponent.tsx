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
    selectedOption?: "btn1" | "btn2" | null
    onSelectOption?: (val: "btn1" | "btn2") => void
    count?: number
    onCountChange?: (val: number) => void
    tourId?: string
    roomOption?: string
    paymentOption?: string
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
    defaultSelected = null,
    selectedOption: controlledOption,
    onSelectOption,
    count: controlledCount,
    onCountChange,
    tourId,
    roomOption,
    paymentOption,
}: CartBtnProps) {
    const [internalOption, setInternalOption] = useState<"btn1" | "btn2" | null>(
        defaultSelected || (sold ? "btn2" : "btn1")
    );

    const isOptionControlled = controlledOption !== undefined;
    const activeOption = isOptionControlled ? controlledOption : internalOption;

    const handleOptionChange = (option: "btn1" | "btn2") => {
        if (onSelectOption) {
            onSelectOption(option);
        } else {
            setInternalOption(option);
        }
    };

    const [internalCount, setInternalCount] = useState(1);
    const isCountControlled = controlledCount !== undefined;
    const peopleCount = isCountControlled ? controlledCount : internalCount;

    const handleIncrement = () => {
        if (onCountChange) {
            onCountChange(peopleCount + 1);
        } else {
            setInternalCount((prev) => prev + 1);
        }
    };

    const handleDecrement = () => {
        const nextVal = Math.max(1, peopleCount - 1);
        if (onCountChange) {
            onCountChange(nextVal);
        } else {
            setInternalCount(nextVal);
        }
    };

    const depositAmount = 500 * peopleCount;
    const formattedDeposit = `$${depositAmount.toLocaleString()}`;

    // Dynamically replace $500 with total multiplied deposit
    const displayTitle = isCounterBtn
        ? title.replace(/\$500/g, formattedDeposit)
        : title;

    const displayHighlight = isCounterBtn && heighlightedWord
        ? heighlightedWord.replace(/\$500/g, formattedDeposit)
        : heighlightedWord;

    return (
        <div className="flex flex-col gap-[10px] lg:gap-[15px] xl:gap-[20px] w-full">
            <h2 className="text-[14px] lg:text-[16px] xl:text-[20px] text-dark-gray font-semibold">
                {displayHighlight ? (
                    <>
                        {displayTitle.split(displayHighlight)[0]}
                        <span className='text-primary-navy'>{displayHighlight}</span>
                        {displayTitle.split(displayHighlight)[1]}
                    </>
                ) : (
                    displayTitle
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
                        <CounterBtn
                            count={peopleCount}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                        />
                    ) : (
                        <div className="w-full">
                            <CartBtnComponent
                                btnText={btnText1}
                                border={border1}
                                btnMoney={btnMoney1}
                                sold={sold}
                                isSelected={activeOption === "btn1" && !sold}
                                onSelect={() => handleOptionChange("btn1")}
                            />
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0 flex">
                    {isCheckoutBtn ? (
                        <CheckOutBtn
                            tourId={tourId}
                            guests={peopleCount}
                            roomOption={roomOption}
                            paymentOption={paymentOption}
                        />
                    ) : (
                        <div className="w-full">
                            <CartBtnComponent
                                btnText={btnText2}
                                border={border2}
                                btnMoney={btnMoney2}
                                sold={false}
                                textColor='text-[#1E365C]'
                                isSelected={activeOption === "btn2"}
                                onSelect={() => handleOptionChange("btn2")}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

