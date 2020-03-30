import React from "react";
import { motion, SVGMotionProps } from "framer-motion";
import { Svg } from "../../../../Core";
import { HamburgerButton } from "./elements";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />
);

type HamburgerProps = React.ComponentProps<typeof HamburgerButton>;

export const Hamburger: React.FC<HamburgerProps> = React.forwardRef<HTMLButtonElement, HamburgerProps>((props, ref) => (
  <HamburgerButton {...props} ref={ref}>
    <Svg width={23} height={23}>
      <Path
        variants={{
          closed: { d: `M 2 2.5 L 20 2.5` },
          open: { d: `M 3 16.5 L 17 2.5` }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: `M 2 16.346 L 20 16.346` },
          open: { d: `M 3 2.5 L 17 16.346` }
        }}
      />
    </Svg>
  </HamburgerButton>
));

Hamburger.displayName = `Hamburger`;
