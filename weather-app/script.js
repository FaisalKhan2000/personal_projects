fetch(
  `https://api.weatherbit.io/v2.0/forecast/hourly?city=Mumbai,NC&key=71477b49cf9743cfa981dbd6790f3184&hours=48`
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
