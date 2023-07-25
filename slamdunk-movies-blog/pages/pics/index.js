import { usePathname } from "next/navigation";
import { getImageData, getSortedImageData } from "../../lib/images";
import Image from "next/image";

export const getStaticProps = async () => {
  const allImageData = getSortedImageData();

  return {
    props: {
      allImageData,
    },
  };
};

const Page = ({ allImageData }) => {
  console.log(allImageData);
  const pathname = usePathname();
  return (
    <div>
      this is page {pathname}
      <ul>
        {allImageData.map(({ id }) => {
          return (
            <li>
              <Image src={`/images/${id}`} width={64} height={64} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
