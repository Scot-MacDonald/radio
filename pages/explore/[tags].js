// pages/explore/[tags].js
import { useRouter } from "next/router";
import useSWR from "swr";
import MixList from "@/components/MixList"; // Update the path based on your project structure

export default function ExploreTags() {
  const router = useRouter();
  const { tags } = router.query;

  const { data, error } = useSWR(`/api/mixes?tags=${tags}`);

  if (error) return <div>Error loading mixes</div>;
  if (!data) return <div>Loading mixes...</div>;

  return <MixList mixes={data} />;
}
