import { AppProvider } from "@/context/AppContext"

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
