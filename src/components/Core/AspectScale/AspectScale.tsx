import React from "react";
import { Grow, Contain, Content } from "./elements";

interface AspectScaleProps {
  contain?: boolean;
  ratio?: string | number;
}

export const AspectScale: React.FC<AspectScaleProps> = ({ contain = true, ratio = `1:1`, children, ...props }) =>
  contain ? (
    <Contain {...props} ratio={ratio}>
      <Content>{children}</Content>
    </Contain>
  ) : (
    <Grow {...props} ratio={ratio}>
      {children}
    </Grow>
  );
