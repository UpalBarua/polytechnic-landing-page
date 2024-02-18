import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/noticeboard");
  }, [router]);

  return null;
}

AdminPage.getLayout = function getLayout(page: React.ReactElement) {
  return page;
};
