import faker from "faker";
const generateNanoid = require("nanoid/non-secure/generate");

const makeMissingPeopleSearchResultsFunc = () => {
  let searchResults: { [s: string]: any; } = {};
  let id = "";

  for (var x = 0; x < 20; x++) {
    id = generateNanoid("-_abcdefABCDEF", 16);
    searchResults[id] = {
      id,
      name: faker.name.findName(),
      place: `${faker.address.city()}, ${faker.address.state()}, ${
        faker.address.country()
      }`,
      time: faker.date.past(),
      image: faker.image.avatar()
    };
  }
  return searchResults;
};

const makeMissingPeopleSearchResults = makeMissingPeopleSearchResultsFunc();

export { makeMissingPeopleSearchResults };
