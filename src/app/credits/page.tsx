import Link from "next/link";
import { PHILOSOPHERS } from "@/lib/philosophers";

export default function CreditsPage() {
  return (
    <main className="credits-page">
      <Link className="text-link" href="/">
        Back to the map
      </Link>
      <h1>Credits and Asset Notes</h1>
      <p>
        Philosopher portraits use Wikimedia Commons Special:FilePath links where possible. Some files may
        require attribution or replacement before a public release depending on final selected images and
        licenses. Generated art prompts are limited to parchment, map, scroll, and abstract UI assets.
      </p>
      <ul>
        {PHILOSOPHERS.map((philosopher) => (
          <li key={philosopher.id}>
            <strong>{philosopher.name}</strong>:{" "}
            <a href={philosopher.portraitUrl} rel="noreferrer" target="_blank">
              source image
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
