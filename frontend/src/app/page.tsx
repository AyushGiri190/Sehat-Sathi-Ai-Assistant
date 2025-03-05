import "./globals.css";  
import BlogPost from "@/components/navBar/Blog";
import ContactUs from "@/components/navBar/contactUs";
import HomePage from "@/components/navBar/home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HomePage/>
        <BlogPost/>
        <ContactUs/>
      </body>
    </html>
  );
}
