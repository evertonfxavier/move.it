import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonProps {
  disabled?: boolean;
  w?: string;
  h?: string;
  color?: string;
  bgColor: string;
  hover?: string;
  fontSize?: string;
  click?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  disabled,
  w,
  h,
  color,
  bgColor,
  hover,
  fontSize,
  click,
}) => {
  return (
    <Button
      isDisabled={disabled}
      onClick={click}
      w={w}
      h={h}
      alignItems="center"
      justifyContent="center"
      borderLeftRadius="10px"
      borderRightRadius="0"
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
      fontWeight="600"
      transition=".2s"
      _hover={{ bgColor: `${hover}` }}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
