import React from 'react';
import { render } from '@testing-library/react';
import {SnackTile} from './SnackTile';
import {SnackList} from './SnackList';
import results from '../snacks.json'


const defaultProps = {
    key: 'name',
    snacks: results
}

const renderer = () => render(<SnackList />);

    it('renders the list', () => {
        const component = renderer();
        expect(component.queryByTestId('name')).not.toBeNull();
    });
