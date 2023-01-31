const fakeDB = [
  { userId: 1, name: "hogex", attr: 1 },
  { userId: 2, name: "hagey", attr: 1 },
  { userId: 3, name: "higex", attr: 3 },
];

export const findOneById = (userId: number) => {
  for (let item of fakeDB) {
    if (item.userId == userId) return item;
  }
  return {};
};

export const findOneByName = (userName: string) => {
  for (let user of fakeDB) {
    if (user.name == userName) return user;
  }
  return {};
};

export const findManyByName = (userName: string) => {
  const res = [];
  for (let user of fakeDB) {
    if (user.name.indexOf(userName) != -1) {
      res.push(user);
    }
  }

  return res;
};

export const findOneByAttr = (attr: number) => {
  for (let user of fakeDB) {
    if (user.attr == attr) return user;
  }
  return {};
};

export const findManyByAttr = (attr: number) => {
  const res = [];
  for (let user of fakeDB) {
    if (user.attr == attr) {
      res.push(user);
    }
  }
  return res;
};
