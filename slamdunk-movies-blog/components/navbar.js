import Link from "next/link";
import sdmovies from "../public/sdmovies.svg";
import Image from "next/image";
import navbarStyles from "../styles/navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css"
import { usePathname } from "next/navigation";

const Navbar = () => {
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
        <ul className={navbarStyles.navList}>
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
