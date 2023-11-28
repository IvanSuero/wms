import { UilEstate, UilClipboardAlt, UilPackage, UilChart, UilMapMarker, UilArrowCircleRight } from '@iconscout/react-unicons'
import { UilUsdSquare, UilMoneyWithdrawal } from '@iconscout/react-unicons'

export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilPackage,
      heading: 'Products'
    },
    {
      icon: UilClipboardAlt,
      heading: "Transactions",
    },
    {
      icon: UilMapMarker,
      heading: "Locations",
    },
    {
      icon: UilArrowCircleRight,
      heading: 'Actions'
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },
  ];

  export const cardsData = [
    {
      title: "Occupancy",
      color: {
        backGround: "#7C1F8A",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "70%",
      png: UilUsdSquare,
    },
    {
      title: "Transactions",
      color: {
        backGround: "red",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
    },
    {
      title: "Products",
      color: {
        backGround:"#FF7D08",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "752",
      png: UilClipboardAlt,
    },
    {
      title: "Reports",
      color: {
        backGround:"#0000F7",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "22",
      png: UilClipboardAlt,
    }
  ];