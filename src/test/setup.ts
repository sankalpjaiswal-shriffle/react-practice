import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

beforeEach(() => {
  cleanup();
  vi.clearAllMocks();
});
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
