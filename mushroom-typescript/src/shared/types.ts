export enum SelectedPage {
  Home = "home",
  About = "abouts",
  OurBoxes = "ourboxes",
  ContactUs = "contactus",
}

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}