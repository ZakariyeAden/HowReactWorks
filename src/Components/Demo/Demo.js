import React from "react";
import MyParagraph from "./MyParagraph";

function DemoOutput(props) {
  console.log('DemoOutPut Running');
  return <MyParagraph>{props.show ? 'This is new!': ''}</MyParagraph>;
}

export default React.memo(DemoOutput);
