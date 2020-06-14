import React from "react";
import {Button} from 'antd'

export default class AntdButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br/>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </div>
    );
  }
}