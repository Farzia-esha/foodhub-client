
export const fetchItems = async () => {
  const res = await fetch(`https://project-server-two-delta.vercel.app/items`);
  const data = await res.json();
  return data;
};

export const fetchItemById = async (id) => {
  const res = await fetch(`https://project-server-two-delta.vercel.app/items/${id}`);
  const data = await res.json();
  return data;
};
