import "./globals.css"

export const metadata = {
  title: "ArifMenu",
  description: "Your comprehensive payment solution for all your financial needs.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
