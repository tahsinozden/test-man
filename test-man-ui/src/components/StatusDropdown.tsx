import React, {useEffect, useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import TestStatus from "../models/TestStatus";
import TestManagerApi from "../api/TestManagerApi";
import "./StatusDropDown.css"

interface StatusDropDownProps {
    currentStatus: string;
    onStatusSelect: (newStatus: string) => void;
}

const StatusDropdown: React.FC<StatusDropDownProps> = ({currentStatus, onStatusSelect}: StatusDropDownProps) => {
    const [statuses, setStatuses] = useState<string[]>([]);
    const statusDropdownItems: any = [];
    const [selected, setSelected] = useState(TestStatus.Undefined.toString());
    const testManagerApi = new TestManagerApi();
    const colorByStatus = new Map([
            [TestStatus.Undefined.toString(), "secondary"],
            [TestStatus.Passed.toString(), "success"],
            [TestStatus.Failed.toString(), "danger"]
        ]
    );

    useEffect(() => {
        testManagerApi.getAllStatuses().then(data => setStatuses(data));
    }, []);

    useEffect(() => {
        for (let status of statuses) {
            statusDropdownItems.push(
                <Dropdown.Item as="label" eventKey={status} key={status}>{status}</Dropdown.Item>
            );
        }
    });

    useEffect(() => {
        setSelected(currentStatus);
    }, [currentStatus]);

    return (
        <>
            <DropdownButton
                id="dropdown-item-button"
                title={selected}
                variant={colorByStatus.get(selected)}
                onSelect={(selectedValue) => {
                    if (selectedValue) {
                        onStatusSelect(selectedValue);
                        setSelected(selectedValue);
                    }
                }}
            >
                {statusDropdownItems}
            </DropdownButton>
        </>
    );
}

export default StatusDropdown;