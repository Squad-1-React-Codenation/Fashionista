/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLang } from "./i18n";

describe("The getLang", () => {
  beforeEach(() => {
    Object.defineProperty(window, "navigator", {
      writable: true,
      value: { languages: [] },
    });
  });

  describe("When the user doesnt have a supported language", () => {
    it("Should fallback to english", () => {
      (window as any).navigator.languages.push("ru", "fr");
      expect(getLang()).toBe("en");
    });
  });

  describe("When the user have a supported language", () => {
    it("Should use it respecting the order of precedence", () => {
      (window as any).navigator.languages.push("ru", "pt-br", "en-us");
      expect(getLang()).toBe("pt-BR");
    });
  });

  describe("When the locale doesnt match but the language match", () => {
    it("Should return that language", () => {
      (window as any).navigator.languages.push("es-mx", "pt", "en-us");
      expect(getLang()).toBe("es");
    });
  });
});
