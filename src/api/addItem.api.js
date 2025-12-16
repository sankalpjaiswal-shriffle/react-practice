const addItem = async (item) => {
  const res = await fetch("https://dummyjson.com/c/c8f7-53e2-4081-8534", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await res.json();
  return data;
};

export default addItem;
