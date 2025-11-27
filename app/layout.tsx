import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DealSafe',
  description: 'DealSafe - Store your vouchers and gift cards safely',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

