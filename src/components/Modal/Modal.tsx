import React, { useLayoutEffect } from "react";
import { Button as BaseButton } from "reakit/Button";
import { useDialogState, DialogDisclosure, DialogBackdrop, Dialog } from "reakit/Dialog";
import { Button } from "../Core";
import { Backdrop, Container } from "./elements";

export interface ModalProps extends React.ComponentProps<typeof Button> {
  label?: React.ElementType;
  ariaLabel?: string;
  as?: React.ElementType;
  backdrop?: React.ElementType;
  container?: React.ElementType;
  animated?: boolean;
  animating?: boolean;
  alert?: boolean;
  trapFocus?: boolean;
  hideOnClickOutside?: boolean;
  onClose?: () => void;
  children:
    | ((props: { open: boolean; toggleOpen: () => void; stopAnimation: () => void }) => React.ReactNode)
    | React.ReactNode;
}

export const Modal: React.FC<ModalProps> = React.forwardRef<typeof Button, ModalProps>(
  (
    {
      label,
      ariaLabel,
      as = Button,
      backdrop = Backdrop,
      container = Container,
      animated = false,
      animating = false,
      alert = false,
      trapFocus = true,
      hideOnClickOutside = true,
      onClick = () => {},
      onClose = () => {},
      children,
      ...props
    },
    ref
  ) => {
    const dialog = useDialogState({ modal: trapFocus, unstable_animated: animated });

    useLayoutEffect(() => {
      if (animating === false) {
        dialog.unstable_stopAnimation();
      }
    }, [dialog, animating]);

    const onToggle: React.MouseEventHandler = e => {
      dialog.toggle();
      onClick(e);
    };

    const onHide = () => {
      dialog.hide();
      onClose();
    };

    return (
      <>
        {label ? (
          <DialogDisclosure {...dialog}>
            {disclosureProps => (
              <BaseButton {...disclosureProps} {...props} onClick={onToggle} as={as} ref={ref}>
                {label}
              </BaseButton>
            )}
          </DialogDisclosure>
        ) : (
          <DialogDisclosure {...dialog}>
            {disclosureProps => <BaseButton {...disclosureProps} {...props} onClick={onToggle} as={as} ref={ref} />}
          </DialogDisclosure>
        )}
        <DialogBackdrop {...dialog} as={backdrop}>
          <Dialog
            {...dialog}
            as={container}
            role={alert ? `alertdialog` : `dialog`}
            aria-label={ariaLabel}
            hideOnClickOutside={hideOnClickOutside}
            hide={onHide}
          >
            {typeof children === `function`
              ? (children as Function)({
                  open: dialog.visible,
                  toggleOpen: dialog.toggle,
                  stopAnimation: dialog.unstable_stopAnimation
                })
              : children}
          </Dialog>
        </DialogBackdrop>
      </>
    );
  }
);

Modal.displayName = `Modal`;
