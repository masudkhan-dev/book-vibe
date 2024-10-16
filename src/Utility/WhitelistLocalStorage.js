const setWhitelist = (id) => {
  const exist = getWhitelist();

  if (!exist.includes(id)) {
    localStorage.setItem("whitelist", JSON.stringify([...exist, id]));
  }
};

const getWhitelist = () => {
  return JSON.parse(localStorage.getItem("whitelist")) || [];
};

export { getWhitelist, setWhitelist };
