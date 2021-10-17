import renderer from "react-test-renderer";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import StatusDropdown from "./StatusDropdown";
import "../../jestGlobalMocks"
import testManagerApi from "../../api/TestManagerApi";

describe("StatusDropDown component", () => {

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

    it('shows available status from API when user clicks on status', async () => {
        // given
        testManagerApi.getAllStatuses = jest.fn();
        testManagerApi.getAllStatuses.mockResolvedValueOnce(
            [
                "Passed",
                "Failed",
                "Undefined"
            ]
        );
        render(<StatusDropdown currentStatus={"Failed"} onStatusSelect={() => {
        }}/>);

        // when
        userEvent.click(screen.getByText("Failed"))

        // then
        const menuItems = await screen.findAllByRole("menuitem");
        expect(menuItems).toHaveLength(3);

        expect(menuItems[0]).toHaveTextContent("Passed");
        expect(menuItems[1]).toHaveTextContent("Failed");
        expect(menuItems[2]).toHaveTextContent("Undefined");
    });

    xit('renders statuses correctly from API when user clicks on status', async () => {
        // given
        testManagerApi.getAllStatuses = jest.fn();
        testManagerApi.getAllStatuses.mockResolvedValueOnce(
            [
                "Passed",
                "Failed",
                "Undefined"
            ]
        );
        const component = renderer.create(<StatusDropdown currentStatus={"Failed"} onStatusSelect={() => {
        }}/>);
        const tree = component.toJSON();

        // when
        userEvent.click(component.root.findByText("Failed"))

        // then
        expect(tree).toMatchSnapshot();
    });
});

