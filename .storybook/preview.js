import { Suspense } from 'react';
import '../styles/globals.css';
import * as NextImage from 'next/image';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withi18n = (Story, context) => {
  return (
    <Suspense fallback={'Loading translations...'}>
      <I18nextProvider i18n={i18n}>
        <Story {...context} />
      </I18nextProvider>
    </Suspense>
  );
};

export const decorators = [withi18n];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
