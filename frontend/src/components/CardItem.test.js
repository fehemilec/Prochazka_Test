import React from "react";
import CardItem from "./CardItem";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

test('Renders CardItem without crashing', () => { 
    const div = document.createElement('div');
    render(<CardItem></CardItem>, div);
 });

 test('Renders CardItem with props without crashing', () => { 
    const div = document.createElement('div');
     render(<CardItem src={'images/1.jpg'}
     text={'Žaluzie'}
     text1={'Horizontální, vertikální, ISOdesign, venkovní, dřevěné a atypické'}
     label={'Služba'}></CardItem>, div);
  });
