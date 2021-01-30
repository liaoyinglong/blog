import faker from "faker";
import { of } from "rxjs";
import _ from "lodash";
export class Item {
  id = faker.random.uuid();
  name = faker.name.findName();
  age = faker.random.number(100);
  email = faker.internet.email();

  shouldRandom() {
    return faker.random.number(1) === 1;
  }

  random() {
    if (this.shouldRandom()) {
      this.age = faker.random.number(100);
    }
    if (this.shouldRandom()) {
      this.email = faker.internet.email();
    }
  }
}

function genItems() {
  return _.range(0, 10).map(() => {
    return new Item();
  });
}
