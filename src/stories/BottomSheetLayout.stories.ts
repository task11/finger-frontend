import type { Meta, StoryObj } from "@storybook/react";

import BottomSheetLayout from "@/components/atoms/BottomSheetLayout/BottomSheetLayout";

const meta = {
  title: "Atoms/BottomSheetLayout",
  component: BottomSheetLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheetLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
  },
};
