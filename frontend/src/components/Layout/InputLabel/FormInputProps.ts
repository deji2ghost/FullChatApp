import React from "react";

export interface FormInputProps{
    type: string, 
    name: string, 
    value?: number | string, 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    accept?: string
}