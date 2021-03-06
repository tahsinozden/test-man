import renderer from "react-test-renderer";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import StatusDropdown from "./StatusDropdown";
import "../../jestGlobalMocks"
import testManagerApi from "../../api/TestManagerApi";

describe("StatusDropDown component", () => {

    beforeEach(() => {
        testManagerApi.getAllStatuses = jest.fn();
        testManagerApi.getAllStatuses.mockResolvedValueOnce(
            [
                "Passed",
                "Failed",
                "Undefined"
            ]
        );
    })

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

    it('renders status color correctly when "Passed" is chosen', async () => {
        // given

        // when, then
        render(<StatusDropdown currentStatus={"Passed"} onStatusSelect={() => {
        }}/>);
        const button = await screen.findByTestId("current-status-button");
        expect(button).toHaveTextContent("Passed");
    });
});

