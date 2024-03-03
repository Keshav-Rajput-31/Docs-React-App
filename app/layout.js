
import "./globals.css";

export const metadata = {
  title: "Docs Mini App"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}
