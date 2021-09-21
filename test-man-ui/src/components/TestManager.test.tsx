import React from "react";
import {render, screen} from "@testing-library/react";
import TestManager from "./TestManager";
import renderer from "react-test-renderer";

it('renders correctly', () => {
    const tree = renderer
        .create(<TestManager/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Test Manager contains correct header", () => {
    render(<TestManager/>);
    const text = screen.getByText("Test Manager");
    expect(text).toBeInTheDocument();
});

test("Test Manager contains all tests", () => {
    render(<TestManager/>);
    const text = screen.getByText("Tests");
    expect(text).toBeInTheDocument();
});