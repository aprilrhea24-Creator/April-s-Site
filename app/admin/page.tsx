import { getAdminData } from "@/lib/data";
import { requireAdmin } from "@/lib/auth";
import { AdminClientPage } from "./client-page";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await requireAdmin();
  const data = await getAdminData();
  const cateringMenuItems = data.cateringMenus.map((menu) => ({
    id: menu.id,
    category: menu.category,
    title: menu.title,
    description: menu.description,
    image: menu.image,
    pricePerPerson: Number(menu.pricePerPerson).toFixed(2),
    minimumGuestCount: menu.minimumGuestCount,
    serviceHours: menu.serviceHours,
    active: menu.active
  }));

  return <AdminClientPage data={data} cateringMenuItems={cateringMenuItems} />;
}
