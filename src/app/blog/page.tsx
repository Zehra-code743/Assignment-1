import Image from "next/image";
import Link from "next/link";

type IData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const data: IData[] = [
  {
    id: 1,
    title: "The Art of Perfume",
    description: "Explore the intricate world of fragrance creation.",
    imageUrl: "/luxury1.png",
  },
  {
    id: 2,
    title: "Top 10 Perfumes of 2023",
    description: "Discover the most popular scents of this year.",
    imageUrl: "/luxury2.png",
  },
  {
    id: 3,
    title: "Choosing Your Signature Scent",
    description: "Learn how to select the perfect fragrance for you.",
    imageUrl: "/luxury3.png",
  },
  {
    id: 4,
    title: "The History of Perfume",
    description: "Dive into the rich history of perfume-making.",
    imageUrl: "/luxury4.png",
  },
  {
    id: 5,
    title: "Perfume Tips and Tricks",
    description: "Essential tips to make your fragrance last longer.",
    imageUrl: "/luxury5.png",
  },
  {
    id: 6,
    title: "The Science of Smell",
    description: "Understanding how fragrance affects our emotions.",
    imageUrl: "/luxury6.png",
  },
];

export default function Blogs() {
  return (
    <div className="parentContainer">
      {data.map((idata) => (
        <div key={idata.id} className="childContainer bounce-right">
          <div className="imageContainer bounce-right">
            <Image src={idata.imageUrl} alt={idata.title} width={0} height={0} className="blogImage" />
          </div>
          <h1 className="title">{idata.title}</h1>
          <p className="description">{idata.description}</p>
          <Link href={`/blogs/${idata.id}`}>
            <button className="readMore">Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
