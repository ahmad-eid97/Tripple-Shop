import Link from 'next/link';
import { useRouter } from 'next/router';

import AnimatedIcons from './../../UIs/AnimatedIcons/AnimatedIcons';

import * as animationData from "../../../public/animated/addCart.json";

import cls from './mobileBar.module.scss';

const MobileBar = () => {
  const router = useRouter();

  return (
    <div className={cls.mobileBar}>
      <div className={cls.wrapper}>
        <Link
          href="/"
          className={cls.icon}
        >
          <div className={router.pathname === "/" ? cls.active : ""}>
            <i className="fa-regular fa-house-user"></i>
            <span>Home</span>
          </div>
        </Link>
        <Link
          href="/categories"
          className={cls.icon}
        >
          <div className={router.pathname === "/categories" ? cls.active : ""}>
            <i className="fa-regular fa-list"></i>
            <span>Categories</span>
          </div>
        </Link>
        <Link
          href="/cart"
          className={cls.icon}
        >
          <div className={router.pathname === "/cart" ? cls.active : ""}>
            <AnimatedIcons animationData={animationData} />
            <span>Cart</span>
          </div>
        </Link>
        <Link
          href="/notifications"
          className={cls.icon}
        >
          <div className={router.pathname === "/notifications" ? cls.active : ""}>
            <i className="fa-regular fa-bell"></i>
            <span>Notifications</span>
          </div>
        </Link>
        <Link
          href="/account"
          className={cls.icon}
        >
          <div className={router.pathname === "/account" ? cls.active : ""}>
            <i className="fa-regular fa-user"></i>
            <span>Account</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileBar;