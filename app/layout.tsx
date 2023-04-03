import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";
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
                    <Modal isOpen onClose={() => {}} onSubmit={() => {}} secondaryAction={() => {}} />
                    <Navbar />
                </ClientOnly>

                <div>{children}</div>
            </body>
        </html>
    );
}
