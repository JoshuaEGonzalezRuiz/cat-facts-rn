export const isValidTheme = (
  theme: string
): theme is "light" | "dark" | "system" => {
  return ["light", "dark", "system"].includes(theme);
};
