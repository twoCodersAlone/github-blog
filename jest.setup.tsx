import '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({ usePathname: jest.fn(() => '/') }));
