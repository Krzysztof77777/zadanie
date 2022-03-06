import React from "react"

import { MainContext } from "./src/context/MainContext";

import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => (
  <MainContext>
    <Layout>
      {element}
    </Layout>
  </MainContext>
)