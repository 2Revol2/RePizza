import { Header } from "@/widgets/Header";
import { ConfigProvider } from "antd";
import { config } from "../providers/AntdConfig";
import { TanstackProvider } from "../providers/TanstackProvider";
import "@ant-design/v5-patch-for-react-19";

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
        <ConfigProvider theme={config}>
          <Header />
          <main className="main">
            {children}
            {modal}
          </main>
        </ConfigProvider>
      </TanstackProvider>
    </>
  );
}
