import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'List Employees',
    icon: 'home',
    link: '/employees'
  },

  {
    label: 'Nouveau Employee',
    icon: 'home',
    link: '/ajouter_employee'
  },


];
