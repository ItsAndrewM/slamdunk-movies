import Layout from "../../../components/layout";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../lib/posts";
import Head from "next/head";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";
import layoutStyles from "../../../components/layout.module.css"
import Link from "next/link";

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={layoutStyles.wrapper}>
        <div className={utilStyles.lightText} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "60%" }}>
          <Date dateString={postData.date} />
          <Link href={`/stories/${postData.genre}`}>
            <small className={utilStyles.lightText} style={{ textTransform: "capitalize" }}>{postData.genre}</small>
          </Link>
          <small className={utilStyles.lightText}>{postData.author}</small>
        </div>
        <div className={layoutStyles.postWrapper} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
