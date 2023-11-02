export interface NavbarItem {
  name: string;
  href: string;
}

export const navbarItems: NavbarItem[] = [
  { name: 'Home', href: '/' },
  { name: 'React', href: '/react' },
  { name: 'Java', href: '/java' },
  { name: 'Node', href: '/node' },
];
