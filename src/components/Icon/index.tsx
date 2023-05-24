// Note: this file was generated by 'npm run generate' do not modify it manually
// tslint:disable
import * as React from "react";
import { Text, TextProps, TextStyle } from "react-native";
export const GlyphMap = {
  calendar_today: 21834,
  keyboard_double_arrow_up: 21835,
};

export type GlyphMapType = keyof typeof GlyphMap;

export interface IconProps extends TextProps {
  name: GlyphMapType;
  size?: number;
  color?: string;
}

export default class Icon extends React.PureComponent<IconProps> {
  render() {
    const {
      name,
      style,
      children,
      size = 14,
      color = "black",
      ...props
    } = this.props;
    const styleOverrides: TextStyle = {
      fontFamily: "MyFont",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: size,
      color,
    };
    let glyph = name ? GlyphMap[name] || "?" : "";
    if (typeof glyph === "number") {
      glyph = String.fromCharCode(glyph);
    }
    return (
      <Text {...props} style={[styleOverrides, style]}>
        {glyph}
        {children}
      </Text>
    );
  }
}
