import { createButton } from './Button';

export function renderApp(container: HTMLElement) {
  container.innerHTML = /* html */ `
    Buttons:<br>
    ${createButton('small')}<br>
    ${createButton('large')}
  `;
}
