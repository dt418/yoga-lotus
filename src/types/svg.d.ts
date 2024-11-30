declare module "*.svg?react" {
  import type * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;

  export default ReactComponent;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
