import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DealSafe - Stop losing money on forgotten vouchers',
  description: 'Never lose money on expired gift cards again. DealSafe is your personal voucher assistant that ensures you\'ll never waste another krone. Built in Denmark, for Danish users.',
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

