import { volumes } from "../lib/data.js";
import Link from "next/link";

export default function Volumes() {
  return (
    <ul>
      {volumes.map((volume) => (
        <li key={volume.slug} id={volume.slug}>
          <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
        </li>
      ))}
    </ul>
  );
}
