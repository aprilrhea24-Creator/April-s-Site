"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type AdminCateringMenuItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string | null;
  pricePerPerson: string;
  minimumGuestCount: number;
  serviceHours: number;
  active: boolean;
};

type AdminCateringMenuManagerProps = {
  items: AdminCateringMenuItem[];
};

const categories = ["Appetizers", "Seafood Boil", "Pasta & More", "Protein", "Sides", "Dessert"];

export function AdminCateringMenuManager({ items }: AdminCateringMenuManagerProps) {
  const router = useRouter();
  const [activeId, setActiveId] = useState(items[0]?.id ?? "new");
  const [message, setMessage] = useState<string | null>(null);

  // This state ensures the form is re-mounted to flush defaultValues when activeId changes
  const [formKey, setFormKey] = useState(0);

  const activeItem = items.find((item) => item.id === activeId) ?? {
    id: "new",
    category: "Appetizers",
    title: "",
    description: "",
    image: "",
    pricePerPerson: "0",
    minimumGuestCount: 1,
    serviceHours: 3,
    active: true
  };

  useEffect(() => {
    setFormKey((prev) => prev + 1);
  }, [activeId]);

  async function seedDefaults() {
    setMessage("Loading default menu...");
    const response = await fetch("/api/admin/catering-menus/seed-defaults", { method: "POST" });
    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error ?? "Unable to load defaults.");
      return;
    }

    setMessage("Default menu loaded.");
    router.refresh();
  }

  async function saveItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("Saving menu item...");
    const formData = new FormData(event.currentTarget);
    const method = activeId === "new" ? "POST" : "PATCH";
    const endpoint = activeId === "new" ? "/api/admin/catering-menus" : `/api/admin/catering-menus/${activeId}`;

    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: String(formData.get("category")),
        title: String(formData.get("title")),
        description: String(formData.get("description")),
        image: formData.get("image") ? String(formData.get("image")) : null,
        pricePerPerson: Number(formData.get("pricePerPerson")),
        minimumGuestCount: Number(formData.get("minimumGuestCount")),
        serviceHours: Number(formData.get("serviceHours")),
        active: formData.get("active") === "on"
      })
    });
    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error ?? "Unable to save menu item.");
      return;
    }

    setMessage("Menu item saved.");
    if (activeId === "new" && result.cateringMenu) {
       setActiveId(result.cateringMenu.id);
    }
    router.refresh();
  }

  async function deleteItem() {
    if (activeId === "new") {
        setActiveId(items[0]?.id ?? "new");
        return;
    }
    if (!confirm(`Remove ${activeItem.title} from the public menu?`)) {
      return;
    }

    setMessage("Deleting menu item...");
    const response = await fetch(`/api/admin/catering-menus/${activeId}`, { method: "DELETE" });
    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error ?? "Unable to delete menu item.");
      return;
    }

    setMessage("Menu item deleted.");
    setActiveId("new");
    router.refresh();
  }

  // Group items by category
  const groupedItems = categories.reduce((acc, cat) => {
    acc[cat] = items.filter(item => item.category === cat);
    return acc;
  }, {} as Record<string, AdminCateringMenuItem[]>);


  return (
    <section className="rounded-[2rem] border border-white/10 bg-black p-6 text-white shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ff2631]">Public Catering Menu</p>
          <h2 className="mt-3 text-3xl font-black uppercase italic">Edit what customers see</h2>
          <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-white/55">
            Add dishes with ingredient notes, update categories, hide items temporarily, or remove dishes from the live catering page.
          </p>
        </div>
        <button
          type="button"
          onClick={seedDefaults}
          className="rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]"
        >
          Load Default Menu
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-h-[800px] space-y-6 overflow-y-auto pr-2">
          {categories.map((category) => {
            const categoryItems = groupedItems[category] || [];
            return (
              <div key={category} className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h3 className="text-xl font-black uppercase italic text-white">{category}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveId("new");
                      setMessage(null);
                    }}
                    className="text-xs font-black uppercase tracking-[0.1em] text-[#ff2631] hover:text-white transition"
                  >
                    + Add New Item
                  </button>
                </div>
                {categoryItems.length === 0 ? (
                  <p className="text-sm font-semibold text-white/40 italic px-2">No items in this category.</p>
                ) : (
                  <div className="space-y-2">
                    {categoryItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        className={`w-full rounded-[1.25rem] border p-4 text-left transition ${
                          item.id === activeId
                            ? "border-[#f00612]/60 bg-[#f00612]/10"
                            : "border-white/10 bg-white/[0.04] hover:border-white/25"
                        }`}
                      >
                        <p className="font-black uppercase italic text-white">{item.title}</p>
                        <p className="mt-1 text-xs font-semibold text-white/45">{item.active ? "Visible" : "Hidden"}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <form key={formKey} onSubmit={saveItem} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 h-fit sticky top-4">
            <h3 className="text-xl font-black uppercase italic text-white mb-4">
              {activeId === "new" ? "Create New Dish" : "Edit Dish"}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/55">
                Category
                <select name="category" defaultValue={activeItem.category} className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none">
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
                </select>
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/55">
                Dish title
                <input name="title" defaultValue={activeItem.title} className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none" required />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/55">
                Image path (e.g. /fried-rice.jpg)
                <input name="image" defaultValue={activeItem.image || ""} className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/55 md:col-span-2">
                Ingredients / customer notes
                <textarea name="description" defaultValue={activeItem.description} className="min-h-32 rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm leading-6 text-white outline-none" required />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/55">
                Price per person
                <input name="pricePerPerson" type="number" step="0.01" defaultValue={activeItem.pricePerPerson} className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none" required />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/55">
                Minimum guests
                <input name="minimumGuestCount" type="number" defaultValue={activeItem.minimumGuestCount} className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none" required />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/55">
                Service hours
                <input name="serviceHours" type="number" defaultValue={activeItem.serviceHours} className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none" required />
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-white/70">
                <input name="active" type="checkbox" defaultChecked={activeItem.active} className="h-4 w-4 accent-[#f00612]" />
                Visible on site
            </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#f00612] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff2631]">
                {activeId === "new" ? "Add Item" : "Save Changes"}
            </button>
            {activeId !== "new" && (
                <button type="button" onClick={deleteItem} className="rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]">
                Delete Item
                </button>
            )}
            </div>
        </form>
      </div>

      {message ? <p className="mt-5 text-sm font-semibold text-white/55">{message}</p> : null}
    </section>
  );
}
