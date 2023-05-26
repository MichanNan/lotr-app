import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement(array) {
    console.log(array[Math.floor(Math.random() * array.length)]);
    const ramdon = array[Math.floor(Math.random() * array.length)];
    router.push(`/volumes/${ramdon.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={() => getRandomElement(volumes)}>Random Volume</button>
    </>
  );
}
