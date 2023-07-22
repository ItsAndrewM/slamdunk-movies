import Link from "next/link";
import sdmovies from "../public/sdmovies.svg";
import Image from "next/image";
import navbarStyles from "../styles/navbar.module.css";
import utilStyles from "../styles/utils.module.css";

const Navbar = () => {
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
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/stories"}>Stories</Link>
          </li>
          <li>
            <Link href={"/stories/movies"}>Movies</Link>
          </li>
          <li>
            <Link href={"/stories/movies"}>Comics</Link>
          </li>
          <li>
            <Link href={"/stories/movies"}>TV Shows</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
