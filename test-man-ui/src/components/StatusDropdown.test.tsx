import renderer from "react-test-renderer";
import StatusDropdown from "./StatusDropdown";
import "../jestGlobalMocks"

it('renders correctly when there is a current status', () => {
    const tree = renderer
        .create(<StatusDropdown currentStatus={"Passed"}
                                onStatusSelect={() => {
                                }}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a empty status text', () => {
    const tree = renderer
        .create(<StatusDropdown currentStatus={""}
                                onStatusSelect={() => {
                                }}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a current status "Passed"', () => {
    const tree = renderer
        .create(<StatusDropdown currentStatus={"Passed"}
                                onStatusSelect={() => {
                                }}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a current status "Failed"', () => {
    const tree = renderer
        .create(<StatusDropdown currentStatus={"Failed"}
                                onStatusSelect={() => {
                                }}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a current status "Undefined"', () => {
    const tree = renderer
        .create(<StatusDropdown currentStatus={"Undefined"}
                                onStatusSelect={() => {
                                }}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
