import useSWR from "swr";

import MixForm from "@/components/MixForm";

export default function AboutPage() {
  const { mutate } = useSWR("/api/mixes");

  async function handleSubmit(formData) {
    // event.preventDefault();

    // const formData = new FormData(event.target);
    // const mixData = Object.fromEntries(formData);

    const response = await fetch("/api/mixes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <MixForm onSubmit={handleSubmit} value="" />
    </>
  );
}
