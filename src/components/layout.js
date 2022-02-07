import React from "react"
import { Main } from "../styled/Main"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Main>
          {children}
        </Main>
      </div>
    </>
  )
}