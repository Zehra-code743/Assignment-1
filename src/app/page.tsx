import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen mt-20">
      <div className="contaner">
        <div className="intro">
          <p>
            Perfume is a liquid that gives people, things, and rooms a good
            smell. It is made of oils which give off scent to the surrounding
            air. The odoriferous compounds that make up a perfume can be
            manufactured synthetically or extracted from plant or animal
            sources.
          </p>
        </div>
        <div className="profilePic">
          <Image src={"/image10.png"} alt="profile" height={400} width={400} />
        </div>
      </div>
    </div>
  );
}
