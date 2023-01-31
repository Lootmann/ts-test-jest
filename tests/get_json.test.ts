import {
  findOneById,
  findOneByName,
  findManyByName,
  findOneByAttr,
  findManyByAttr,
} from "../src/get_json";

test("findOneById return userId: 1", () => {
  const res = findOneById(1);
  expect(res).toStrictEqual({ userId: 1, name: "hogex", attr: 1 });
});

test("findOneById return userId: 2", () => {
  expect(findOneById(2)).toStrictEqual({ userId: 2, name: "hagey", attr: 1 });
});

test("findOneById return {}", () => {
  const res = findOneById(100);
  expect(res).toStrictEqual({});
});

describe("Test find by name", () => {
  test("findOneByName return userId:1 ", () => {
    expect(findOneByName("hagey")).toStrictEqual({
      userId: 2,
      name: "hagey",
      attr: 1,
    });
  });

  test("findMany can find all users", () => {
    expect(findManyByName("h")).toStrictEqual([
      { userId: 1, name: "hogex", attr: 1 },
      { userId: 2, name: "hagey", attr: 1 },
      { userId: 3, name: "higex", attr: 3 },
    ]);
  });

  test("findMany can find some users", () => {
    expect(findManyByName("x")).toStrictEqual([
      { userId: 1, name: "hogex", attr: 1 },
      { userId: 3, name: "higex", attr: 3 },
    ]);
  });

  test("findMany can't find any users", () => {
    expect(findManyByName("mogera")).toStrictEqual([]);
  });
});

describe("Test findOneByAttr", () => {
  test("findOneByAttr can find one user", () => {
    expect(findOneByAttr(1)).toStrictEqual({
      userId: 1,
      name: "hogex",
      attr: 1,
    });
  });

  test("findOneByAttr can't find any users", () => {
    expect(findOneByAttr(10)).toStrictEqual({});
  });
});

describe("Test findManyByAttr", () => {
  test("findManyByAttr", () => {
    expect(findManyByAttr(1)).toStrictEqual([
      { userId: 1, name: "hogex", attr: 1 },
      { userId: 2, name: "hagey", attr: 1 },
    ]);
  });

  test("findManyByAttr", () => {
    expect(findManyByAttr(10)).toStrictEqual([]);
  });
});
