import useSWR from "swr";
import Link from "next/link";
import styles from "@/styles/mixes.module.css";
import Image from "next/image";

export default function MixList() {
  const { data, error } = useSWR("/api/mixes");

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
                src={mix.imageURL} // Use the new imageURL field
                alt={`Image for ${mix.title}`}
                width={320}
                height={200}
              />
            </div>
            <div className={styles.mixHeader}>
              <Link href={`/${mix._id}`}>
                <div className={styles.mixDate}>
                  <div>{mix.date}</div>
                  <div>{mix.country}</div>
                </div>
                <div className={styles.mixTitle}>{mix.title}</div>
              </Link>
            </div>

            <div className={styles.mixTags}>
              {mix.tags && mix.tags.length > 0 && (
                <div>
                  <strong>Tags: </strong>
                  {mix.tags.map((tagItem, index) => (
                    <span key={index}>{tagItem}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
