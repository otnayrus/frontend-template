import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("path: /", () => {
  it("renders health check status", () => {
    render(<Home />)

    const content = screen.getByText(/The website is working fine/i)
    expect(content).toBeInTheDocument()
  })
})
