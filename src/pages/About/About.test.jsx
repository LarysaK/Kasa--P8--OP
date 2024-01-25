import React from 'react';
import { render } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals';
import About from './About';
import '@testing-library/jest-dom';

describe('About Component', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('renders Banner component with correct props', () => {
    const { getByAltText } = render(<About />);
    const bannerImage = getByAltText('Illustration d\'une montagne');
    expect(bannerImage).toBeInTheDocument();
  });

  it('renders all Collapse components with correct titles and contents', () => {
    const { getByText } = render(<About />);

    // Testez chaque composant de "Collaps"
    expect(getByText('Fiabilité')).toBeInTheDocument();
   
    expect(getByText('Respect')).toBeInTheDocument();
   
    expect(getByText('Service')).toBeInTheDocument();
  
    expect(getByText('Sécurité')).toBeInTheDocument();
    
  });
});