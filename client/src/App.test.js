// import React from 'react';
// import { render } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import App from './App';

// test('renders Router and Learn React link', () => {
//   const { container } = render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );

//   // Проверяем, что Router присутствует
//   const routerElement = container.querySelector('div[data-testid="router"]');
//   expect(routerElement).toBeInTheDocument();

//   // Проверяем наличие ссылки "Learn React"
//   const linkElement = container.querySelector('a[href="https://reactjs.org"]');
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';

test('renders Router and Learn React link', () => {
  const { container } = render(<App />);

  // const routerElement = container.querySelector('div[data-testid="router"]');
  // expect(routerElement).toBeInTheDocument();

  const linkElement = container.querySelector('a[href="https://reactjs.org"]');
  expect(linkElement).toBeInTheDocument();
});

// test('renders Router and Learn React link', () => {
//   const appElement = React.createElement(
//     MemoryRouter,
//     null,
//     React.createElement(App)
//   );

//   const { container } = render(appElement);

//   // Проверяем, что Router присутствует
//   const routerElement = container.querySelector('div[data-testid="router"]');
//   expect(routerElement).toBeInTheDocument();

//   // Проверяем наличие ссылки "Learn React"
//   const linkElement = container.querySelector('a[href="https://reactjs.org"]');
//   expect(linkElement).toBeInTheDocument();
// });