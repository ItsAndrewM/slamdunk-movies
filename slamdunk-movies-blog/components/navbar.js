import Link from "next/link";
import sdmovies from "../public/sdmovies.svg";
import Image from "next/image";
import navbarStyles from "../styles/navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css"
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked")
    setShow(!show);
  }

  const pathname = usePathname();
  return (
    <header className={navbarStyles.navbarWrapper}>
      <Link href={"/"}>
        <Image
          src={sdmovies}
          height={70}
          className={utilStyles.borderCircle}
          alt="Slam Dunk Movies Logo"
        />
      </Link>
      <div className={navbarStyles.container}>
        <button onClick={handleClick} className={navbarStyles.hamburger}>
          <HiMenu size={40} />
        </button>
        <h1 className={navbarStyles.title}>Slam Dunk Movies</h1>
        <ul className={!show ? `${navbarStyles.navList}` : `${navbarStyles.navList} ${navbarStyles.show} ${navbarStyles.visuallyShow}`}>
          <li className={navbarStyles.listItem}>
            <Link href={"/"} className={pathname == "/" ? layoutStyles.active : layoutStyles.link}>Home</Link>
          </li>
          <li>
            <Link href={"/stories"} className={pathname == "/stories" ? layoutStyles.active : layoutStyles.link}>Stories</Link>
          </li>
          <li>
            <Link href={"/stories/movies"} className={pathname == "/stories/movies" ? layoutStyles.active : layoutStyles.link}>Movies</Link>
          </li>
          <li>
            <Link href={"/stories/comics"} className={pathname == "/stories/comics" ? layoutStyles.active : layoutStyles.link}>Comics</Link>
          </li>
          <li>
            <Link href={"/stories/tv-shows"} className={pathname == "/stories/tv-shows" ? layoutStyles.active : layoutStyles.link}>TV Shows</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
