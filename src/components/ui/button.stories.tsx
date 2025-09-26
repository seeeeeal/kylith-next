import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "icon"],
    },
    shape: {
      control: { type: "select" },
      options: ["default", "round"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "ghost", "link"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12 }}>
      {(
        [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ] as const
      ).map((v) => (
        <div
          key={v}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <strong style={{ width: 110 }}>{v}</strong>
          {(["sm", "default", "lg"] as const).map((s) => (
            <Button
              key={`${v}-${s}`}
              variant={v}
              size={s}
            >{`${v} / ${s}`}</Button>
          ))}
          <Button variant={v} size="icon" aria-label={`${v} icon`}>
            ★
          </Button>
        </div>
      ))}
    </div>
  ),
};
