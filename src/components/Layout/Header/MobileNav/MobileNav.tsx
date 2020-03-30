import React, { useState, cloneElement, Children } from "react";
import { motion, useCycle } from "framer-motion";
import { useWindowSize } from "react-use";
import { Modal } from "../../../Modal";
import { Hamburger } from "./Hamburger";
import { Backdrop, Container, Close, List, Item } from "./elements";

export const MobileNav: React.FC = ({ children, ...props }) => {
  const [isAnimating, setAnimating] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { height } = useWindowSize();

  return (
    <motion.div
      initial={false}
      animate={isOpen ? `open` : `closed`}
      custom={height}
      onAnimationStart={() => setAnimating(true)}
      onAnimationComplete={() => setAnimating(false)}
      {...props}
    >
      <Modal
        as={Hamburger}
        backdrop={Backdrop}
        container={Container}
        animated
        animating={isAnimating}
        onClick={() => toggleOpen()}
        onClose={() => toggleOpen(0)}
        ariaLabel="Mobile Navigation"
      >
        {({ toggleOpen: closeModal }) => {
          const handleClose = () => {
            toggleOpen(0);
            closeModal();
          };

          return (
            <>
              <Close onClick={handleClose} />
              <List>
                {children && (children as React.ReactElement[]).length
                  ? (children as React.ReactElement[]).reduce(
                      (cloned: React.ReactElement[], child, i) =>
                        child
                          ? [
                              ...cloned,
                              <Item key={i}>{cloneElement(Children.only(child), { onClick: handleClose })}</Item>
                            ]
                          : cloned,
                      []
                    )
                  : !Array.isArray(children) && (
                      <Item>
                        {cloneElement(Children.only(children as React.ReactElement), { onClick: handleClose })}
                      </Item>
                    )}
              </List>
            </>
          );
        }}
      </Modal>
    </motion.div>
  );
};
