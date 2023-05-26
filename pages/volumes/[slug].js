import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const book = volumes.find((volume) => volume.slug === slug);
  console.log(volumes.indexOf(book));
  return (
    <>
      <Link href="/volumes"> All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {book.books.map((book) => (
          <li key={book.title}>
            {book.ordinal}&nbsp; {book.title}
          </li>
        ))}
      </ul>
      <Image src={book.cover} alt={book.slug} width={140} height={230}></Image>
      <button>
        <Link
          href={
            volumes.indexOf(book) === 0
              ? "#"
              : `/volumes/${volumes[volumes.indexOf(book) - 1].slug}`
          }
        >
          Previous
        </Link>
      </button>
      <button>
        <Link
          href={
            volumes.indexOf(book) === volumes.length - 1
              ? "#"
              : `/volumes/${volumes[volumes.indexOf(book) + 1].slug}`
          }
        >
          Next
        </Link>
      </button>
    </>
  );
}
