import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";
import useCopyToClipboard from 'react-use/lib/useCopyToClipboard';
import { Pre } from "../elements";
import { Label, Copy, Line, LineNumber } from "./elements";

interface CodeProps {
  code: string;
  metastring: string;
  language: string;
}

const calculateLinesToHighlight = (meta: string) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)?.[1]
      .split(`,`)
      .map(v => v.split(`-`).map(y => parseInt(y, 10)));
    return (index: number) => {
      const lineNumber = index + 1;
      const inRange = lineNumbers?.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange;
    };
  }

  return () => false;
};

export const Code: React.FC<CodeProps> = ({ code, metastring, language, ...props }) => {
  const [copied, copyToClipboard] = useCopyToClipboard();
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language as Language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <Pre {...props}>
          {language ? <Label>{language}</Label> : null}
          <Copy title="Copy code to clipboard." onClick={() => copyToClipboard(code)}>
            {copied.value ? `Copied!` : `Copy`}
          </Copy>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i, highlighted: shouldHighlightLine(i) })}>
              <LineNumber>{i + 1}</LineNumber>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
