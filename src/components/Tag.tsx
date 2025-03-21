import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HtmlHTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex border border-violet-700 gap-2 text-violet-700 px-3 py-1 rounded-full uppercase items-center",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
