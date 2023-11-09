import { Logo } from '@/src/components/logo';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 w-full mt-auto" data-testid="footer">
      <div className="max-w-[85rem] mx-auto w-full px-4 py-8 sm:px-6 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Logo testId="footer-logo" />
          </div>

          <p
            className="mt-4 text-center text-sm text-gray-400 lg:mt-0 lg:text-right"
            data-testid="footer-copyright"
          >
            Copyright &copy; {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
