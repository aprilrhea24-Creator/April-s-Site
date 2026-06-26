import { redirect } from "next/navigation";

export default function EnterprisePreviewRedirectLayout() {
  redirect("/preview/secure-console");
}
