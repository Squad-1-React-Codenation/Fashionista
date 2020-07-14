import "@testing-library/jest-dom/extend-expect";
import "./config/i18n/i18n";

import "react-i18next";

jest.mock("react-i18next", () => ({
  ...jest.requireActual("react-i18next"),
  // This returns the same string, not using translation, for the sake of simplicity on our tests
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  useTranslation: () => ({ t: (s) => s }),
}));
