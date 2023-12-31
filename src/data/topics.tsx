import { Icons } from '../components/icons';

export interface TopicsItem {
  title: string;
  href: string;
  description: string;
  icon: JSX.Element;
}

export const topics: TopicsItem[] = [
  {
    title: 'Angular',
    href: '/angular',
    description: 'Angular description',
    icon: <Icons.Angular />,
  },
  {
    title: 'React',
    href: '/react',
    description: 'React description',
    icon: <Icons.React />,
  },
  {
    title: 'Node',
    href: '/node',
    description: 'Node description',
    icon: <Icons.Node />,
  },
  {
    title: 'Java',
    href: '/java',
    description: 'Java description',
    icon: <Icons.Java />,
  },
  {
    title: 'Spring',
    href: '/spring',
    description: 'Spring description',
    icon: <Icons.Spring />,
  },
  {
    title: 'Python',
    href: '/python',
    description: 'Python description',
    icon: <Icons.Python />,
  },
];
