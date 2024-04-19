"use client"
import { Layout, Spin } from "antd"
import { useEffect, useState } from "react"
const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
}

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
}

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
}

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
}

const layoutStyle = {
  minHeight: "100vh",
  overflow: "hidden",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isContentRendered, setIsContentRendered] = useState(false)

  useEffect(() => {
    const handleContentRendered = () => setIsContentRendered(true)
    handleContentRendered()
  }, [])

  return isContentRendered ? (
    <Layout style={layoutStyle}>
      <Sider style={siderStyle}>Sider</Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Spin tip="Loading..." size="large" />
    </div>
  )
}
