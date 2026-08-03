import "./globals.css";

export const metadata = {
  title: "WiseCharm — L'art des mots, la finesse du charme",
  description: "Générez des messages percutants et entretenez une alchimie authentique.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[#0B0C10] text-[#F4F5F7] antialiased">
        {children}
      </body>
    </html>
  );
}
