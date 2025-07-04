import { render, screen, fireEvent } from '@testing-library/react';
import MicButton from './MicButton';

describe('MicButton', () => {
  test('renders the button and handles click', () => {
    render(<MicButton />);
    
    const button = screen.getByRole('button', { name: /start speaking/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    // If your browser supports SpeechRecognition, we would verify `isListening`
    // For now, just confirm that click doesn't crash
  });
});
