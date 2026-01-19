
export const fetchItems = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();
  return data;
};

export const fetchItemById = async (id) => {
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();
  return data;
};
