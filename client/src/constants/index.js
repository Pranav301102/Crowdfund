import { createCampaign, dashboard, logout, payment, profile, withdraw,home} from '../assets';


export const navlinks = [
  {
    name: 'home',
    imgUrl: home,
    link: '/',
  },
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/dashboard',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'create-coupon',
    imgUrl: payment,
    link: '/create-coupon',
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/coupon',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },

];
