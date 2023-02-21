import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HomePage from "../components/Home/App";

const HomeStory = {
  title: "Home-Page",
} as ComponentMeta<typeof HomePage>;

export default HomeStory;

const Template: ComponentStory<typeof HomePage> = () => <HomePage></HomePage>;
export const homepage = Template.bind({});
