import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "../components/common/Button";

describe("Button", () => {
  it("Call onclick when click", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button label="Click me" onClick={handleClick} />
    );

    fireEvent.click(getByText("Click me"));
    expect(handleClick).toBeCalledTimes(1);
  });
});
