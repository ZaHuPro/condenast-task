const getDataFromAPI = (page = 1, query = undefined) => {
  let url = `${process.env.REACT_APP_API_URL}/api/articles?page=${page}`;
  if (query && query !== "") {
    const formQuery = query
      .split(",")
      .filter((e) => e !== "")
      .map((e) => `'${e}'`)
      .join(" OR ");
    url = `${url}&query=${escape(formQuery)}`;
  }

  return fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then(({ data }) => data || {})
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export default getDataFromAPI;
