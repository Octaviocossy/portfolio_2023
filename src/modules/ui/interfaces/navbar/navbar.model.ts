export interface INavItem {
  name: string;
  href: string;
  isCurrent?: boolean;
  icon?: React.ReactNode;
  target?: string;
  disabled?: boolean;
}
