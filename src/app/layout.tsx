import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Product Details Page</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
