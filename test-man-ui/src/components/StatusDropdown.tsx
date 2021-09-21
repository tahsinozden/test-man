import React, {useEffect} from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

interface StatusDropDownProps {
    currentStatus: string;
    onStatusSelect: (newStatus: string) => void;
}

const StatusDropdown: React.FC<StatusDropDownProps> = ({currentStatus, onStatusSelect}: StatusDropDownProps) => {
    const statuses = ["Passed", "Failed"];
    const statusDropdownItems: any = [];

    useEffect(() => {
        for (let status of statuses) {
            statusDropdownItems.push(
                <Dropdown.Item as="label" eventKey={status} key={status}>{status}</Dropdown.Item>
            );
        }
    }, []);

    return (
        <>
            {/*FIXME: based on the status string, the size changes*/}
            <DropdownButton
                id="dropdown-item-button"
                title={currentStatus}
                variant="secondary"
                onSelect={(selectedValue) => {
                    if (selectedValue) {
                        onStatusSelect(selectedValue);
                    }
                }}
            >
                {statusDropdownItems}
            </DropdownButton>
        </>
    );
}

export default StatusDropdown;