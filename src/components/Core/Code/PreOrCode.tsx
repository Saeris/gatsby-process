import React from "react";
import { Code } from "./Code";

export const PreOrCode = (preProps: any) => {
  const preToCodeBlock = () => {
    if (preProps?.children?.props?.mdxType === `code`) {
      const { children: code, className = ``, ...props } = preProps.children.props;

      const matches = className.match(/language-(?<lang>.*)/);

      return {
        code: code.trim(),
        className,
        language: matches?.groups?.lang || ``,
        ...props
      };
    }
  };

  const props = preToCodeBlock();
  if (props) {
    return <Code {...props} />;
  }
  return <pre {...preProps} />;
};
