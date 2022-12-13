import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   // const linkElement = screen.getByText(/learn react/i);
// //   expect('Hello').toBeInTheDocument();
// // });



describe('With React Testing Library', () => {
    it('Shows "Hello world!"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        // expect(getByText('Hello World!')).not.toBeNull();
    });
});
