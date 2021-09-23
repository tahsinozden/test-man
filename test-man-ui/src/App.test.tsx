import React from 'react';
import renderer from "react-test-renderer";
import App from "./App";

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () {
        },
        removeListener: function () {
        }
    };
};

it('renders correctly', () => {
    const tree = renderer
        .create(<App/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});