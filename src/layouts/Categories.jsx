import React from "react";
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical >
        <Menu.Item name="Home" />
        <Menu.Item name="Garden" />
        <Menu.Item name="Ourdoor" />
      </Menu>
    </div>
  );
}
