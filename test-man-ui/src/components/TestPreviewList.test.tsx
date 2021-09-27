import renderer from "react-test-renderer";
import TestPreviewList from "./TestPreviewList";
import TestDetail from "../models/TestDetail";
import "../jestGlobalMocks"

it('renders correctly when there are no tests', () => {
    const tree = renderer
        .create(<TestPreviewList onTestDataChange={() => {
        }} testDetails={[]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when there are some tests', () => {
    const testDetails = [
        new TestDetail(1, "name1", "Passed", ""),
        new TestDetail(2, "name2", "Failed", ""),
    ];
    const tree = renderer
        .create(<TestPreviewList onTestDataChange={() => {
        }} testDetails={testDetails}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});