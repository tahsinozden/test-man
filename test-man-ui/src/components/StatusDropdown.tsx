import React, {useEffect, useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import TestStatus from "../models/TestStatus";
import TestManagerApi from "../api/TestManagerApi";

interface StatusDropDownProps {
    currentStatus: string;
    onStatusSelect: (newStatus: string) => void;
}

const StatusDropdown: React.FC<StatusDropDownProps> = ({currentStatus, onStatusSelect}: StatusDropDownProps) => {
    const [statuses, setStatuses] = useState<string[]>([]);
    const statusDropdownItems: any = [];
    const [selected, setSelected] = useState(TestStatus.Undefined.toString());
    const testManagerApi = new TestManagerApi();

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
            {/*FIXME: based on the status string, the size changes*/}
            <DropdownButton
                id="dropdown-item-button"
                title={selected}
                variant="secondary"
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