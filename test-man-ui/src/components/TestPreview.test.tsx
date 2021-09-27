import renderer from "react-test-renderer";
import TestPreview from "./TestPreview";
import TestDetail from "../models/TestDetail";
import "../jestGlobalMocks"

it('renders correctly when there is a test detail', () => {
    const testDetail = new TestDetail(1, "name", "Passed", "");
    const tree = renderer
        .create(<TestPreview onStatusSelect={() => {
        }} testDetail={testDetail}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a test detail with undefined props', () => {
    const testDetail = new TestDetail();
    const tree = renderer
        .create(<TestPreview onStatusSelect={() => {
        }} testDetail={testDetail}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when there is no status present', () => {
    const testDetail = new TestDetail(1, "name", undefined, "");
    const tree = renderer
        .create(<TestPreview onStatusSelect={() => {
        }} testDetail={testDetail}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});