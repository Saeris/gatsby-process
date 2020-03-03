import React from "react";
import { unstable_FormStateReturn as FormStateReturn, unstable_useFormState as useFormState } from "reakit/Form";
import { Button, ButtonProps } from "../Button";
import { omit } from "../../../utils";

interface ResetProps extends ButtonProps {
  reset?: FormStateReturn<any>["reset"];
}

const exclude = useFormState.__keys.filter(key => key !== `reset`);

export const Reset: React.FC<ResetProps> = ({ reset, ...props }) => (
  <Button type="reset" {...omit(props as ButtonProps & FormStateReturn<any>, ...exclude)} onClick={reset} />
);
