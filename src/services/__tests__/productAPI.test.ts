import { productAPI } from "../productAPI";
import { mockedProducts } from "../__mocks__/productAPI";

describe("The product API", () => {
  describe("When called", () => {
    it("Should return the json received from the fetch", async () => {
      const fetchMock = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve([mockedProducts[0]]),
        })
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (global.fetch as any) = fetchMock;

      const products = await productAPI();

      expect(fetchMock).toBeCalled();
      expect(products[0]).toEqual(mockedProducts[0]);
    });
  });

  describe("When the request failed", () => {
    it("Should return a empty array", async () => {
      const fetchMock = jest.fn(() => Promise.reject());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (global.fetch as any) = fetchMock;

      const products = await productAPI();

      expect(fetchMock).toBeCalled();
      expect(products.length).toEqual(0);
    });
  });
});
