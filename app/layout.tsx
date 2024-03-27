import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";
// metadata는 page, layout파일에서 병합 가능
export const metadata: Metadata = {
  title: {
    template: "%s | Next movies",
    default: "Next movies",
  },
  description: "Next js movie website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
