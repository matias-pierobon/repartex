import React from "react"
import { Row, Col, Menu } from "antd"
import logo from "./logo.svg"
import "./Header.css"

const Logo = () => (
  <a id="logo">
    <img src={logo} />
    Repartex
  </a>
)

export const Header = () => (
  <header id="header">
    <Row>
      <Col xxl={4} xl={5} lg={5} md={6}>
        <Logo />
      </Col>
      <Col lg={19} md={18} xl={19} xxl={20}>
        <Menu mode="horizontal">
          <Menu.Item key="mail">Navigation One</Menu.Item>
        </Menu>
      </Col>
    </Row>
  </header>
)
