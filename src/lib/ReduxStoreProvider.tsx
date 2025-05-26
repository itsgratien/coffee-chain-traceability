"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, type AppStore } from "@/redux/Store";

type Props = {
  children: React.ReactNode;
};
export const ReduxStoreProvider = ({ children }: Props) => {
  const storeRef = React.useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
export default ReduxStoreProvider;
