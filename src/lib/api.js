export const API_BASE = "http://localhost:5000";

export async function fetchItems() {
  const res = await fetch(`${API_BASE}/items`);
  return res.json();
}

export async function fetchItemById(id) {
  const res = await fetch(`${API_BASE}/items/${id}`);
  return res.json();
}
