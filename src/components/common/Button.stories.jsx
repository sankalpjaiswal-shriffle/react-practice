import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    size: "md",
  },
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export const Small = {
  args: {
    children: "Small Button",
    size: "sm",
    onClick: () => alert("Small Button Clicked"),
  },
};

export const Medium = {
  args: {
    children: "Medium Button",
    size: "md",
    onClick: () => alert("Medium Button Clicked"),
  },
};

export const Large = {
  args: {
    children: "Large Button",
    size: "lg",
    onClick: () => alert("Large Button Clicked"),
  },
};

export const Disabled = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
