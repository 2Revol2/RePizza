import { Header } from "@/widgets/Header";
import { TanstackProvider } from "../providers/TanstackProvider";
import "@ant-design/v5-patch-for-react-19";
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <TanstackProvider>
        <Header />
        <main className="main">
          {children}
          {modal}
          <Toaster />
        </main>
      </TanstackProvider>
    </>
  );
}
