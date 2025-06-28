  import { ReactNode } from "react"; 


type RootLayoutProps = {
  children: ReactNode;
};


export default function RootLayout({ children }: RootLayoutProps) {
  return(
    <div className="max-w-9xl mx-auto px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
      {children}
    </div>
  );
}