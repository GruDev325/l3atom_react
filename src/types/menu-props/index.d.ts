interface MenuProps {
  activator: React.ReactNode;
  open?: boolean;
  full?: boolean;
  maxHeight?: number | string;
  contentClass?: string;
  align?: "auto" | "left" | "right";
  children?: React.ReactNode;
}
