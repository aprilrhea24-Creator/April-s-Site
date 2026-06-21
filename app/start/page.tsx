import { redirect } from "next/navigation";

import { getSession } from "@/lib/auth";

export default async function StartBuildPage() {
  const session = await getSession();

  redirect(session ? "/consultation" : "/register?next=%2Fconsultation");
}
