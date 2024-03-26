import { Metadata } from "next";
// metadata는 page, layout파일에서 병합 가능
export const metadata: Metadata = {
  title: "about-us",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>about-us layout</h2>
      {children}
    </>
  );
}
