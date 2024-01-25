// "use client";
// import { cn } from "@utils/index";
// import { EyeIcon, EyeOffIcon } from "lucide-react";
// import React from "react";
// import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

// export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   leftContent?: ReactNode;
//   rightContent?: ReactNode;
//   staticText?: string;
// }

// const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, leftContent, rightContent, ...props }, ref) => {
//     const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
//     return (
//       <label
//         attr-static={props.staticText}
//         className="relative after:content-[attr(attr-static)] after:text-gray-400 dark:after:text-gray-400 after:text-sm after:absolute after:top-0 after:right-4 after:block"
//       >
//         <input
//           type={isPasswordVisible ? "text" : type}
//           ref={ref}
//           {...props}
//           className={cn(
//             "h-14 w-full px-3 py-5 rounded-lg text-text text-base   bg-input    file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:bg-background-content focus-visible:border focus-visible:border-border disabled:cursor-not-allowed disabled:opacity-50 ",
//             className
//           )}
//         />
//         {type === "password" && (
//           <div
//             className="  cursor-pointer z-10 absolute top-1/2 transform -translate-y-1/2 right-3 hover:text-ring text-slate-300 hover:text-slate-400"
//             onClick={() => setIsPasswordVisible((v) => !v)}
//           >
//             {isPasswordVisible ? "скрыть" : "показать"}
//           </div>
//         )}
//         {leftContent && (
//           <div className="grid w-fit absolute top-1/2 transform -translate-y-1/2 left-4">
//             {leftContent}
//           </div>
//         )}
//         {rightContent && (
//           <div
//             className={cn(
//               "grid w-fit absolute top-1/2 transform -translate-y-1/2 right-4"
//             )}
//           >
//             {rightContent}
//           </div>
//         )}
//       </label>
//     );
//   }
// );
// Input.displayName = "Input";

// export { Input };

"use client";
import { cn } from "@utils/index";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React from "react";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  staticText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftContent, rightContent, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    return (
      <label
        attr-static={props.staticText}
        className="flex flex-grow  gap-2 p-2 relative items-center  rounded-lg border border-border has-[:focus]:border-primary-900 has-[:focus]:border bg-input has-[:focus]:bg-background-content"
      >
        {leftContent && (
          <div className="text-muted-foreground ">{leftContent}</div>
        )}
        <input
          type={isPasswordVisible ? "text" : type}
          ref={ref}
          {...props}
          className={cn(
            "bg-transparent border-none   caret-primary-900 h-14 w-full px-3  rounded-lg text-text text-base       file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          )}
        />
        {type === "password" && (
          <div
            className="cursor-pointer hover:text-ring text-slate-300 hover:text-slate-400"
            onClick={() => setIsPasswordVisible((v) => !v)}
          >
            {isPasswordVisible ? "скрыть" : "показать"}
          </div>
        )}

        {rightContent && (
          <div className={cn("text-muted-foreground  text-right")}>
            {rightContent}
          </div>
        )}
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
