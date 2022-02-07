import React from "react"
import { Main } from "../styled/Main"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>

    </>
  )
}