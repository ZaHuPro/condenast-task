const doAPICall = (page = 1, query = undefined) => {
  let url = `http://localhost:5000/api/articles?page=${page}`;

  if (query && query !== "") {
    const formQuery = query
      .split(" ")
      .filter((e) => e !== "")
      .join(" OR ");
    url = `${url}&quesry=${escape(formQuery)}`;
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

export default doAPICall;
