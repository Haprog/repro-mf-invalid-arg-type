export type Size = 'small' | 'large';

export function createButton(size: Size = 'small') {
  if (size === 'large') {
    return /* html */ `<button style="font-size: 1.2rem">Large Button</button>`;
  }
  return /* html */ `<button>Small Button</button>`;
}
