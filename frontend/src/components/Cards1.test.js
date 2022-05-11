import React from "react";
import Cards1 from "./Cards1";
import { render } from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom';

test("Renders Cards1 without crashing", () => {
    const div = document.createElement('div');
    render(<Router><Cards1></Cards1></Router>, div);
});