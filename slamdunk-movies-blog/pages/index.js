import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Latest from "../components/latest";
import Link from "next/link";
import Script from "next/script";
import layoutStyles from "../components/layout.module.css";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="google-analytics-container">
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-82XEENDSWT"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-82XEENDSWT');`}
        </Script>
      </div>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${layoutStyles.section}`}
      >
        <h2 className={`${utilStyles.headingLg} ${utilStyles.sectionHeader}`}>
          Recent Stories
        </h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title, index }) => ( */}
          {allPostsData.map(({ id, date, title, genre, thumbnail }, index) => {
            return (
              <Latest
                id={id}
                date={date}
                title={title}
                index={index}
                genre={genre}
                thumbnail={thumbnail}
                key={index}
              />
            );
          })}
        </ul>
        <Link href={"/stories"}>More Stories →</Link>
      </section>
    </Layout>
  );
};

export default Home;
