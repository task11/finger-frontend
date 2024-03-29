import { forwardRef } from "react";
import { SIZES } from "./Input.size";

export interface InputProps {
  type?: InputTypeProps;
  name: InputNameProps;
  size?: InputSizeProps;
  value: string | number;
  label: string;
  isLabelVisible?: boolean;
  isRequired?: boolean;
  validation?: InputValidationProps;
  message?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxLength?: number;
}

export type InputNameProps =
  | "email"
  | "emailCheck"
  | "username"
  | "password"
  | "passwordCheck"
  | "place"
  | "tumblerImage"
  | "isDiscounted"
  | "search"
  | "place"
  | "currentPassword";

export type InputValidationProps = "default" | "success" | "error";

type InputTypeProps = "text" | "password" | "email" | "search";

type InputSizeProps = "sm" | "md" | "lg";

export type UserInputPramProps = {
  value: string;
  validation: InputValidationProps;
  message: string;
};

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name,
    size = "md",
    label,
    isLabelVisible = false,
    isRequired = false,
    validation = "default",
    message = "",
    onChange = () => {},
    ...rest
  },
  ref
) {
  const sizeStyle = SIZES[size];
  return (
    <div className="relative flex flex-col gap-2">
      {isLabelVisible && (
        <label
          htmlFor={name}
          className=" absolute left-2 -top-2 z-50 bg-white flex items-center gap-1 text-caption pl-2 pr-2"
        >
          {label}
          {isRequired && <span className=" text-red-600">*</span>}
        </label>
      )}
      <div>
        <input
          className={`${sizeStyle} border rounded-lg p-3 outline-primary_100`}
          ref={ref}
          id={name}
          name={name}
          onChange={onChange}
          {...rest}
          aria-label={`${name}-input`}
        />
        <div>{validation === "error" && `*`}</div>
      </div>
      {message && <span>{message}</span>}
    </div>
  );
});
