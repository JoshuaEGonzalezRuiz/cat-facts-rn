import React from "react";
import { Appbar } from "react-native-paper"; // Importing the Appbar component to build a screen header

// Props definition for the ScreenHeader component
interface Props {
  title: string; // Title to be displayed in the header
}

// Functional component to render a simple screen header with a title
export const ScreenHeader: React.FC<Props> = ({ title }) => (
  <Appbar.Header>
    <Appbar.Content title={title} />
  </Appbar.Header>
);
