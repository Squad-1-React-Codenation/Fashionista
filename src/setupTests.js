import "@testing-library/jest-dom/extend-expect";
import "./config/i18n/i18n";

import "react-i18next";

jest.mock("react-i18next", () => ({
  ...jest.requireActual("react-i18next"),
  useTranslation: () => ({ t: (s) => s }),
}));
