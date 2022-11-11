import '../styles/globals.css'
import { AnalyticsWrapper } from './analytics';

export default function RootLayout({ children }) {
  return (
    <html lang='nl'>
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
