import React from 'react';
import { render } from '@testing-library/react'
import Display from './Display'

describe('< Display />', () => {
    it('render without crashing', () => {
        render(<Display />);
    })
    it('props are passing', () => {
        const display = render(<Display strikes={2} balls={4} />);
        display.getByText(/Strikes: 2/)
        display.getByText(/Balls: 4/);
    });
    
} )