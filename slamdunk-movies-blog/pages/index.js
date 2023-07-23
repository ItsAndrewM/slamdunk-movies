import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Latest from "../components/latest";
import Link from "next/link";
import Script from "next/script";

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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-82XEENDSWT"></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-82XEENDSWT');`}
        </Script>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This is a sample introduction that I have written and am now finished
          writting with the conclusion of this sentence which is represented by
          a period or "." which I will put here.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Stories</h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title, index }) => ( */}
          {allPostsData.map(({ id, date, title, genre }, index) => {
            return (
              <Latest
                id={id}
                date={date}
                title={title}
                index={index}
                genre={genre}
                key={index}
              />
            );
          })}
        </ul>
        <Link href={"/stories"}>→ More Stories</Link>
      </section>
    </Layout>
  );
};

export default Home;
