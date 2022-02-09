import React from "react"
import { Main } from "../styled/Main"
import Header from "./header"
import * as mainStyle from "../components/main.module.scss"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>

    </>
  )
}