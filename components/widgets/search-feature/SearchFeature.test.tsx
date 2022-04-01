import { fireEvent, render, screen, act } from '@testing-library/react';
import SearchFeature from './SearchFeature';

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
    const submitButton = screen.getByText(/google search/i);
    expect(submitButton).toBeTruthy();
    fireEvent.click(submitButton);
  });

  expect(mockFetch).toHaveBeenCalled();
});
