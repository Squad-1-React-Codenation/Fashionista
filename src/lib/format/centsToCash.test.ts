import centsToCash from "./centsToCash";

describe("The centsToCash function", () => {
  it("Should return values formmated", () => {
    expect(centsToCash(1990)).toBe("R$ 19,90");
    expect(centsToCash(4990)).toBe("R$ 49,90");
    expect(centsToCash(190)).toBe("R$ 1,90");
  });

  it("Should format values if there are just cents, with a trailing zero", () => {
    expect(centsToCash(99)).toBe("R$ 0,99");
    expect(centsToCash(50)).toBe("R$ 0,50");
    expect(centsToCash(1)).toBe("R$ 0,01");
  });

  it("Should add dot to thousand cash values", () => {
    expect(centsToCash(120000)).toBe("R$ 1.200,00");
    expect(centsToCash(12752995)).toBe("R$ 127.529,95");
    expect(centsToCash(1057097582)).toBe("R$ 10.570.975,82");
  });
});
