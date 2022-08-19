import { useRouter } from "next/dist/client/router";

export default function Docs() {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return <div>Docs Home Page</div>;
}
