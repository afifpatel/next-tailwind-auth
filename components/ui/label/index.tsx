'use client'

import { ReactNode } from "react";

interface LabelProps {
    children: ReactNode;
}

const Label = ({ children }: LabelProps): JSX.Element => (<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{children}</label>);

export default Label;