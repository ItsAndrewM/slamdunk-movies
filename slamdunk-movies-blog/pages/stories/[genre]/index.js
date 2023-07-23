import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getAllPostIds, getSortedPostsData } from "../../../lib/posts";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

const Genre = ({ allPostsData }) => {
  const pathname = usePathname();
  const split = pathname.split("/")[pathname.split("/").length - 1];

  const filtered = allPostsData.filter((posts) => {
    return posts.genre === split;
  });

  console.log(filtered);

  return <div>This is a page for {pathname}</div>;
};

export default Genre;

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
