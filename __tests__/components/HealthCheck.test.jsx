import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import HealthCheck from "@/components/HealthCheck"

describe("component health check", () => {
  it("renders health check status", () => {
    render(<HealthCheck />)

    const content = screen.getByText(/The website is working fine/i)
    expect(content).toBeInTheDocument()
  })
})
