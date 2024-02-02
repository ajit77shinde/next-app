import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="lucide:layout-dashboard" width="24" height="24" />,
  },
  {
    title: 'KPI Dashboad',
    path: '/kpi-dashboard',
    icon: <Icon icon="lucide:bar-chart-3" width="24" height="24" />,
  },
  {
    title: 'Global Search',
    path: '/global-search',
    icon: <Icon icon="lucide:search" width="24" height="24" />,
  },
  {
    title: 'Customer Report',
    path: '/customer-report',
    icon: <Icon icon="lucide:notebook-tabs" width="24" height="24" />,
  },
  {
    title: 'Report',
    path: '/report',
    icon: <Icon icon="lucide:notebook-text" width="24" height="24" />,
  },
  {
    title: 'My Visit',
    path: '/my-visit',
    icon: <Icon icon="lucide:notepad-text" width="24" height="24" />,
  },
  {
    title: 'Lead',
    path: '/lead',
    icon: <Icon icon="lucide:contact" width="24" height="24" />,
  },
  {
    title: 'Opportunity',
    path: '/opportunity',
    icon: <Icon icon="lucide:lightbulb" width="24" height="24" />,
  },
  {
    title: 'Accounts',
    path: '/accounts',
    icon: <Icon icon="lucide:contact-2" width="24" height="24" />,
  },
  // {
  //   title: 'Projects',
  //   path: '/projects',
  //   icon: <Icon icon="lucide:folder" width="24" height="24" />,
  //   subMenu: true,
  //   subMenuItems: [
  //     { title: 'All', path: '/projects' },
  //     { title: 'Web Design', path: '/projects/web-design' },
  //     { title: 'Graphic Design', path: '/projects/graphic-design' },
  //   ],
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <Icon icon="lucide:mail" width="24" height="24" />,
  // },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    subMenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];