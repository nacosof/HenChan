import { useState } from 'react';

export function useExample() {
  const [value, setValue] = useState<string>('Hello from hook!');
  return { value, setValue };
} 