import TestManagerApi from "../../api/TestManagerApi";
import StatusDropdown from "../StatusDropdown";
import StatusMenu from "./StatusMenu";
import {render, screen} from "@testing-library/react";
import testManagerApi from "../../api/useApi";

describe('StatusMenu component', () => {
    it('renders when statuses are fetched from API', async () => {
        testManagerApi.getAllStatuses = jest.fn();
        testManagerApi.getAllStatuses.mockResolvedValueOnce(
            [
                "Passed",
                "Failed",
                "Undefined"
            ]
        );

        render(<StatusMenu />);

        const listItemElements = await screen.findAllByRole('menuitem');
        expect(listItemElements).toHaveLength(3);

        const passed = await screen.findByText('Passed');
        expect(passed).toBeInTheDocument();

        const failed = await screen.findByText('Failed');
        expect(failed).toBeInTheDocument();

        const undefined = await screen.findByText('Undefined');
        expect(undefined).toBeInTheDocument();
    });
});