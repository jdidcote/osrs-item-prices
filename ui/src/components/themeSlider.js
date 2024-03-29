import { useColorMode } from "@chakra-ui/react";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

function ThemeSlider() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel mb="0">
        {colorMode === "light" ? "Light" : "Dark"} theme
      </FormLabel>
      <Switch onChange={toggleColorMode} />
    </FormControl>
  );
}

export default ThemeSlider;
