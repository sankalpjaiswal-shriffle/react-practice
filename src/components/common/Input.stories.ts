import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    label: "Name",
    type: "text",
    placeholder: "Enter name...",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password...",
  },
};
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    type: "text",
    placeholder: "Disabled...",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Email",
    type: "email",
    value: "user@example.com",
  },
};
