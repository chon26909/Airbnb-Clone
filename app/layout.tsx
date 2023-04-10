import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./components/providers/ToasterProvider";
import "./globals.css";

export const metadata = {
    title: "Airbnb",
    description: "Airbnb Clone"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ClientOnly>
                    <ToasterProvider />
                    <RegisterModal />
                    <Navbar />
                </ClientOnly>

                {children}
            </body>
        </html>
    );
}
