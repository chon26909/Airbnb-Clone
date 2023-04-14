import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./components/providers/ToasterProvider";
import "./globals.css";

export const metadata = {
    title: "Airbnb",
    description: "Airbnb Clone"
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();

    console.log("current user ", currentUser);

    return (
        <html lang="en">
            <body>
                <ClientOnly>
                    <ToasterProvider />
                    <LoginModal />
                    <RegisterModal />
                    <Navbar currentUser={currentUser} />
                </ClientOnly>

                {children}
            </body>
        </html>
    );
}
