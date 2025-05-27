import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-purple-600 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow text-purple-600 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// This is the root layout for a Next.js application.
// It includes a navigation bar at the top, a main content area, and a footer at the bottom.
// The layout uses Tailwind CSS for styling and ensures the main content is centered and responsive.
// The `children` prop allows for dynamic content to be rendered within the main area.
// The `max-w-5xl` class limits the width of the main content area to a maximum of 5xl, ensuring a consistent layout across different screen sizes.
// The `flex-grow` class allows the main content area to expand and fill the available space between the navbar and footer.
// The `min-h-screen` class ensures that the body takes at least the full height of the viewport, preventing the footer from overlapping with the main content on short pages.
// The `mx-auto` class centers the main content area horizontally within the viewport.    