import renderer, {act} from "react-test-renderer";
import TestPreviewList from "./TestPreviewList";
import TestDetail from "../models/TestDetail";
import {render, screen} from "@testing-library/react";
import "../jestGlobalMocks"

describe("TestPreviewList component", () => {
    it('renders correctly when there are no tests', async () => {
        // given

        // when
        let component;
        await act(async () => {
            component = renderer.create(<TestPreviewList onTestDataChange={() => {
            }} testDetails={[]}/>)
        })
        // then
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders correctly when there are some tests', async () => {
        // given
        const testDetails = [
            new TestDetail(1, "name1", "Passed", ""),
            new TestDetail(2, "name2", "Failed", ""),
        ];
        // when
        let component;
        // wait for useEffect to be executed
        await act(async () => {
            component = renderer
                .create(<TestPreviewList onTestDataChange={() => {
                }} testDetails={testDetails}/>);
        });
        // then
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('shows test list correctly when there are some tests', () => {
        // given
        const testDetails = [
            new TestDetail(1, "name1", "Passed", ""),
            new TestDetail(2, "name2", "Failed", ""),
        ];

        // when
        render(<TestPreviewList onTestDataChange={() => {
        }} testDetails={testDetails}/>);

        // then
        let listItem = screen.getByText("name1");
        expect(listItem).toBeInTheDocument();

        listItem = screen.getByText("name2");
        expect(listItem).toBeInTheDocument();
    });
})
