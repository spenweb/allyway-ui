import faker from "faker";

const makeMissingPeopleSearchResults = () => {
  let searchResults = [];

  for (var x = 0; x < 20; x++) {
    searchResults.push({
      name: faker.name.findName(),
      place: `${faker.address.city()}, ${faker.address.state()}, ${
        faker.address.country()
      }`,
      time: faker.date.past(),
      image: faker.image.avatar()
    });
  }
  return searchResults;
};

export { makeMissingPeopleSearchResults };
