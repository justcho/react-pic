import React from "react";
import { obvserve } from "mobx-react";
import { useStores } from "../stores";

const Component = obvserve(() => {
  const { AuthStore } = useStores();
  return (
    <>
      <h1>Login:{AuthStore.value.username}</h1>
    </>
  );
});

export default Component;
