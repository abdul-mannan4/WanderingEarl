import React from "react";
import RadioButton from "./RadioBtn";

type CartBtnProps = {

  btnText: string;
  border?: string;
  btnMoney?: string;
  sold: boolean;
  textColor?: string
  hasTrueBtn?: boolean

};

export default function CartBtnComponent({

  border = "border-[#D6D6D6]",
  btnText,
  btnMoney,
  sold = false,
  textColor = "text-[#E9482B]",
  hasTrueBtn = false
}: CartBtnProps) {
  return (
    <div className={`rounded-[16px] border ${border} `}>
      <div className="flex px-[12px] sm:px-[20px] py-[12px] sm:py-[16px] justify-between items-center gap-2">
        <div className="flex flex-col gap-[3px] sm:gap-[5px]">
          <p className="text-[11px] sm:text-[16px] font-medium text-text-muted">{btnText}</p>
          {btnMoney ? (
            <p className={`text-[15px] sm:text-[24px] ${textColor} font-bold leading-tight`}>{btnMoney}</p>
          ) : null}
        </div>
        <div className="shrink-0">
          {sold ? (
            <p className="text-[15px] sm:text-[20px] text-negative-orange font-bold">Sold</p>
          ) : (
            <div>
              <RadioButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
