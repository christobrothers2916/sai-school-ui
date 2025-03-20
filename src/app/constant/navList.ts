import { NavItems } from '../interfaces/@type';

export const navList: NavItems[] = [
  {
    name: 'Home',
    route: '/home',
    subItems: [],
  },
  {
    name: 'About US',
    route: '/about',
    subItems: [],
  },
  {
    name: 'Our Programmes',
    route: '/programs',
    subItems: [],
  },
  {
    name: 'News & Events',
    route: '',
    subItems: [
      {
        name: 'News',
        route: '/news',
      },
      {
        name: 'Events',
        route: '/events',
      },
    ],
  },
  {
    name: 'Admissions',
    route: '',
    subItems: [
      {
        name: 'Admission Process',
        route: '/admission/admissionProcess',
      },
      {
        name: 'Admission Form',
        route: '/admission',
      },
    ],
  },
  {
    name: 'Gallery',
    route: '/gallery',
    subItems: [],
  },
  {
    name: 'Contact Us',
    route: '/contact',
    subItems: [],
  },
];
