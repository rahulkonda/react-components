// Dialog.tsx
import React from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';

import '../styles/Dialog.css'; // Import the CSS file for styling

interface DialogProps {
  title: string | JSX.Element;
  children: JSX.Element;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, children, onClose }) => {
  return createPortal(
    <FocusTrap>
      <div className="dialog">
        <div className="dialog-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="dialog-content">{children}</div>
      </div>
    </FocusTrap>,
    document.getElementById('dialog-root')!
  );
};

export default Dialog;
