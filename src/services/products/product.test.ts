/* eslint-disable @typescript-eslint/camelcase */
import { mockedProducts } from "./__mocks__/";
import { rest } from "msw";
import { setupServer } from "msw/node";

import ProductAPI, { parseProduct } from ".";

const server = setupServer(
  rest.get(/\/catalog$/, (_, res, ctx) => {
    return res(ctx.json(mockedProducts));
  })
);

describe("The parseProduct function", () => {
  it("Should return the price as number of cents", () => {
    const mockedProduct = mockedProducts[0];

    mockedProduct.regular_price = "R$ 199,90";
    expect(parseProduct(mockedProduct).regularPrice).toBe(19990);

    mockedProduct.regular_price = "R$ 19,59";
    expect(parseProduct(mockedProduct).regularPrice).toBe(1959);
  });

  it("Should transform installments in quantity and price in cents", () => {
    const mockedProduct = mockedProducts[0];

    mockedProduct.installments = "3x R$ 99,93";
    expect(parseProduct(mockedProduct).installments.price).toBe(9993);
    expect(parseProduct(mockedProduct).installments.quantity).toBe(3);

    mockedProduct.installments = "2x R$ 79,59";
    expect(parseProduct(mockedProduct).installments.price).toBe(7959);
    expect(parseProduct(mockedProduct).installments.quantity).toBe(2);
  });
});

describe("The productAPI", () => {
  let productAPI: ProductAPI;

  beforeEach(() => {
    server.listen();
    productAPI = new ProductAPI();
  });

  afterEach(() => server.resetHandlers());

  describe("When getCatalog request succeeds", () => {
    it("Should return a list of products", async () => {
      const response = await productAPI.getCatalog();

      expect(response).toEqual(mockedProducts.map((p) => parseProduct(p)));
    });
  });

  describe("The get product", () => {
    it("Should return a search filtered by the style", async () => {
      let query;
      server.use(
        rest.get(/\/catalog$/, (req, res, ctx) => {
          query = req.url.search;
          return res(ctx.json(mockedProducts));
        })
      );
      const response = await productAPI.getProduct("20002570");

      expect(query).toBe("?search=20002570");

      expect(response.product).toBeTruthy();
      expect(response.additionalColors?.length).toBe(1);
    });
  });

  describe("The searchProduct method", () => {
    it("Should request with the search parameter", async () => {
      let query;
      server.use(
        rest.get(/\/catalog$/, (req, res, ctx) => {
          query = req.url.search;
          return res(ctx.json(mockedProducts));
        })
      );
      await productAPI.searchProduct("test");

      expect(query).toBe("?search=test");
    });
  });
});
