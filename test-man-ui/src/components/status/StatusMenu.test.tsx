import StatusMenu from "./StatusMenu";
import {render, screen} from "@testing-library/react";

describe('StatusMenu component', () => {
    it('renders when statuses are passed from props', async () => {
        // given
        const statuses = [
            "Passed",
            "Failed",
            "Undefined"
        ];
        const onClick = jest.fn();

        // when
        render(<StatusMenu statuses={statuses} onClick={onClick}/>);

        // then
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