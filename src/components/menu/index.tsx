import { useState } from "react";

import "./style.scss";

type Props = {
  activator: React.ReactNode;
} & React.PropsWithChildren;

export const Menu: React.FC<Props> = ({ activator, children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="menu"
      onMouseEnter={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <div className="activator">{activator}</div>
      <div className={`menu-container${open ? " active" : ""}`}>{children}</div>
    </div>
  );
};
