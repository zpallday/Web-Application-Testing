import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import expectExport from 'expect';


describe('Dashboard', () => {
    it('renders without crashing', () => {
    render(<Dashboard />);
    });
    it('strike', () => {
        let clicked = false;
        const { getByText } = render(<Dashboard strike={() => clicked = true} />)
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        expectExport(clicked).toBe(true)
    })
})