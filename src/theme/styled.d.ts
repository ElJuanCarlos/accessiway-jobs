import {} from "styled-components";
import { StyleClosetTheme } from "./theme";

declare module "styled-components" {
  export type DefaultTheme = StyleClosetTheme;
}
