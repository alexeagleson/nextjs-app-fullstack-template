import { fireEvent, render, screen, act } from '@testing-library/react';
import React from 'react';
import SearchFeature from './SearchFeature';

jest.mock('next-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  useTranslation: () => ({ t: (s: string) => s }),
}));

const mockFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(undefined),
  })
);

// @ts-ignore
global.fetch = mockFetch;

it('submits a search request when button clicked', async () => {
  render(<SearchFeature />);
  expect(mockFetch).not.toHaveBeenCalled();

  act(() => {
    const submitButton = screen.getByText(/google_search/i);
    expect(submitButton).toBeTruthy();
    fireEvent.click(submitButton);
  });

  expect(mockFetch).toHaveBeenCalled();
});
