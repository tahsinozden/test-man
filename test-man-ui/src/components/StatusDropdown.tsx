import React, {useEffect, useState} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import TestStatus from "../models/TestStatus";

interface StatusDropDownProps {
    currentStatus: string;
    onStatusSelect: (newStatus: string) => void;
}

const StatusDropdown: React.FC<StatusDropDownProps> = ({currentStatus, onStatusSelect}: StatusDropDownProps) => {
    const statuses = ["Passed", "Failed", TestStatus.Undefined.toString()];
    const statusDropdownItems: any = [];
    const [selected, setSelected] = useState(TestStatus.Undefined.toString());

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