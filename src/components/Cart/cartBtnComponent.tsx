import React from "react";
import RadioButton from "./RadioBtn";

type CartBtnProps = {
  btnText: string;
  border?: string;
  btnMoney?: string;
  sold: boolean;
  textColor?: string;
  isSelected?: boolean;
  onSelect?: () => void;
};

export default function CartBtnComponent({
  border = "border-[#D6D6D6]",
  btnText,
  btnMoney,
  sold = false,
  textColor = "text-[#E9482B]",
  isSelected = false,
  onSelect,
}: CartBtnProps) {
  return (
    <div
      onClick={!sold && onSelect ? onSelect : undefined}
      className={`rounded-[16px] border ${border} ${!sold ? "cursor-pointer" : ""}`}
    >
      <div className="flex px-[10px] sm:px-[14px] 2xl:px-[18px] py-[10px] sm:py-[12px] 2xl:py-[16px] justify-between items-center gap-2">
        <div className="flex flex-col gap-[2px] sm:gap-[4px] min-w-0">
          <p className="text-[12px] sm:text-[14px] 2xl:text-[16px] font-medium text-text-muted leading-tight truncate">{btnText}</p>
          {btnMoney ? (
            <p className={`text-[15px] sm:text-[18px] 2xl:text-[24px] ${textColor} font-bold leading-tight`}>
              {btnMoney}
            </p>
          ) : null}
        </div>
        <div className="shrink-0">
          {sold ? (
            <p className="text-[13px] sm:text-[16px] 2xl:text-[20px] text-negative-orange font-bold">Sold</p>
          ) : (
            <div>
              <RadioButton
                selected={isSelected}
                onSelect={onSelect || (() => {})}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
