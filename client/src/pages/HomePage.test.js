import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('HomePage Component', () => {
    test('renders the homepage with correct elements', () => {
        render(<HomePage />);

        const headingElement = screen.getByText(/Welcome to My Movie App/i);
        expect(headingElement).toBeInTheDocument();

        const textElement = screen.getByText(/Discover your favorite movies!/i);
        expect(textElement).toBeInTheDocument();

        // const c1Images = [
        //     'https://picsum.photos/id/1006/1200/200',
        //     'https://picsum.photos/id/1018/1200/200',
        //     'https://picsum.photos/id/1012/1200/200',
        //     'https://picsum.photos/id/1001/1200/200'
        // ];
        
        console.log(screen)
        expect(screen).toBeInTheDocument('https://picsum.photos/id/1001/1200/200');
        // expect(c1Images).toContainEqual('https://picsum.photos/id/1001/1200/200');
    });
});