import renderer from "react-test-renderer";
import StatusDropdown from "./StatusDropdown";

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
