import React, { ComponentProps } from "react";
import { useDialogState, DialogDisclosure, DialogBackdrop, Dialog } from "reakit/Dialog";
import { Portal } from "reakit/Portal";
import { Button } from "../Core";
import { Backdrop, Container } from "./elements";

export interface ModalProps extends ComponentProps<typeof Button> {
  label?: string;
  as?: React.ElementType;
  backdrop?: React.ElementType;
  container?: React.ElementType;
  isOpen?: boolean;
  onClose?: () => void;
  children: ((props: { open: boolean; toggleOpen: () => void }) => React.ReactNode) | React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  label,
  as = Button,
  backdrop = Backdrop,
  container = Container,
  isOpen,
  onClose = () => {},
  children,
  ...props
}) => {
  const dialog = useDialogState();
  const onHide = () => {
    dialog.hide();
    onClose();
  };

  return (
    <>
      {label && (
        <DialogDisclosure block as={as} {...dialog} {...props}>
          {label}
        </DialogDisclosure>
      )}
      <Portal>
        <DialogBackdrop {...dialog} as={backdrop}>
          <Dialog
            {...dialog}
            as={container}
            aria-label={label}
            modal={false}
            visible={typeof isOpen === `undefined` ? dialog.visible : isOpen}
            hide={onHide}
          >
            {typeof children === `function`
              ? (children as Function)({
                  open: dialog.visible,
                  toggleOpen: dialog.toggle
                })
              : children}
          </Dialog>
        </DialogBackdrop>
      </Portal>
    </>
  );
};
