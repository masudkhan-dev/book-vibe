const setRead = (id) => {
  const exist = getRead();

  if (!exist.includes(id)) {
    localStorage.setItem("read", JSON.stringify([...exist, id]));
  }
};

const getRead = () => {
  return JSON.parse(localStorage.getItem("read")) || [];
};

export { getRead, setRead };
