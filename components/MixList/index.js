// MixList.js
import useSWR from "swr";
import Link from "next/link";
import { useSelectedTrack } from "@/context/SelectedTrackContext";
import styles from "@/styles/mixes.module.css";
import Image from "next/image";

export default function MixList() {
  const { data, error } = useSWR("/api/mixes");
  const { setSelectedTrack } = useSelectedTrack();

  const handlePlayClick = (trackUrl) => {
    setSelectedTrack(trackUrl);
  };

  if (error) {
    return <h1>Error loading mixes</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className={styles.mixes}>
      {data.map((mix) => (
        <li className={styles.mix} key={mix._id}>
          <div className={styles.mixContent}>
            <div className={styles.imageContainer}>
              <Image
                src={mix.imageURL}
                alt={`Image for ${mix.title}`}
                width={312}
                height={205}
              />
              {/* Centered play button */}
              <div
                className={styles.playButton}
                onClick={() => handlePlayClick(mix.url)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>

            <div className={styles.mixHeader}>
              <Link href={`/${mix._id}`}>
                <div className={styles.mixDate}>
                  <div>{new Date(mix.date).toLocaleDateString()}</div>
                  <div>{mix.country}</div>
                </div>
                <div className={styles.mixTitle}>{mix.title}</div>
              </Link>
            </div>

            <div className={styles.mixTags}>
              <div>
                {mix.tags
                  .flatMap((tagItem) => tagItem.split(","))
                  .map((tag, index) => (
                    <span className={styles.mixTag} key={index}>
                      {tag.trim()}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
