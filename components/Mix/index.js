import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import MixForm from "@/components/MixForm/index";
import Link from "next/link";

export default function Mix() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/mixes/${id}`);

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const mixData = Object.fromEntries(formData);

    const response = await fetch(`/api/mixes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mixData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDelete() {
    const response = await fetch(`/api/mixes/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) return;

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.mix} </h1>
      <h1>{data.description}</h1>
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
        <MixForm onSubmit={handleEdit} value={data.mix} isEditMode={true} />
      )}
      <Link href="/">Back to all</Link>
    </>
  );
}
