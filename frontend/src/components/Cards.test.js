import React from "react";
import Cards from "./Cards";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

test("Renders Cards without crashing", () => {
    const div = document.createElement('div');
    render(<Cards></Cards>, div);
});