import { FC, PropsWithChildren, useEffect, useRef } from 'react';

export interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  backdropClose?: boolean;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ visible, onClose, backdropClose = true, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (visible) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [visible]);

  useEffect(() => {
    const handleClose = (ev: Event) => {
      if (!backdropClose) {
        ev.preventDefault();
        return;
      }
      onCloseRef.current?.();
    };
    const handleEsc = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape' && !backdropClose) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    };
    const dialog = dialogRef.current;
    dialog?.addEventListener('close', handleClose);
    document.addEventListener('keydown', handleEsc);
    return () => {
      dialog?.removeEventListener('close', handleClose);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [backdropClose]);

  return (
    <dialog ref={dialogRef} className="modal mx-auto">
      <div className="modal-box w-[360px] h-[600px] p-0">{children}</div>
      {backdropClose && (
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      )}
    </dialog>
  );
};

export default Modal;
