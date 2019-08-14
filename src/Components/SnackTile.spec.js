import React from 'react';
import { render } from '@testing-library/react';
import SnackTile from './SnackTile';
import { jsxEmptyExpression, isTSAnyKeyword } from '@babel/types';

const renderer = () => render(<SnackTile />);

describe('Button', () => {
    beforeEach(() => {
        jest.restAllMocks();
    });

    it()
})