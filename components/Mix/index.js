import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import MixForm from "@/components/MixForm/index";
import Link from "next/link";
import styles from "@/styles/mix.module.css";
import Image from "next/image";

export default function Mix() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/mixes/${slug}`);

  async function handleEdit(formData) {
    const response = await fetch(`/api/mixes/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      mutate();
      setIsEditMode(false); // Exit edit mode after successful update
    }
  }

  async function handleDelete() {
    const response = await fetch(`/api/mixes/${slug}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) return null;

  return (
    <>
      <small>ID: {slug}</small>
      <h1>{data.title}</h1>
      <h1>{data.description}</h1>
      <h1>{data.country}</h1>
      <h1>{data.tags}</h1>
      <Image
        className={styles.mixContainer}
        src={data.imageURL}
        alt={`Image for ${data.title}`}
        width={312}
        height={205}
      />

      <div>
        <button
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          <span role="img" aria-label="A pencil">
            ✏️
          </span>
        </button>
        <button onClick={handleDelete} disabled={isEditMode}>
          <span role="img" aria-label="A cross indicating deletion">
            ❌
          </span>
        </button>
      </div>

      {isEditMode && (
        <MixForm onSubmit={handleEdit} value={data} isEditMode={true} />
      )}

      <Link href="/">Back to all</Link>
    </>
  );
}
