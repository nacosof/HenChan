import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div style={{ padding: 20 }}>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </div>
); 