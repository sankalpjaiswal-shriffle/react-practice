import React from "react";

export interface InputProps {
  id?: string;
  label?: string;
  type: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  value,
  placeholder,
  disabled = false,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: 4,
          border: "1px solid #d1d5db",
          width: 250,
        }}
      />
    </div>
  );
};

export default Input;
