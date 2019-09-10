const getCatFactApi = () =>
  fetch("/cat-facts.json", {
    mehtod: "GET"
  })
    .then(response => response.json())
    .then(
      facts => facts.all[Math.round(Math.random() * facts.all.length)].text
    );

export const getCatFact = () => async dispatch => {
  const payload = await getCatFactApi();

  dispatch({
    type: "data:catFact",
    payload
  });
};
