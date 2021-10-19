import React, {useEffect, useState} from "react";
import TestStatus from "../../models/TestStatus";
import testManagerApi from "../../api/TestManagerApi";
import "./StatusDropDown.css"
import {Button, Dropdown} from "antd";
import {DownOutlined} from "@ant-design/icons";
import StatusMenu from "./StatusMenu";

interface StatusDropDownProps {
    currentStatus: string;
    onStatusSelect: (newStatus: string) => void;
}

const StatusDropdown: React.FC<StatusDropDownProps> = ({currentStatus, onStatusSelect}: StatusDropDownProps) => {
    const [statuses, setStatuses] = useState<string[]>([]);
    const [selected, setSelected] = useState(TestStatus.Undefined.toString());
    const colorByStatus = new Map([
            [TestStatus.Undefined.toString(), "grey"],
            [TestStatus.Passed.toString(), "green"],
            [TestStatus.Failed.toString(), "red"]
        ]
    );

    useEffect(() => {
        testManagerApi.getAllStatuses().then(data => setStatuses(data));
    }, []);

    useEffect(() => {
        setSelected(currentStatus);
    }, [currentStatus]);

    const handleMenuClick = (e: any) => {
        onStatusSelect(e.key);
        setSelected(e.key);
    }

    return (
        <>
            <Dropdown overlay={<StatusMenu statuses={statuses} onClick={handleMenuClick}/>}>
                <Button data-testid="current-status-button" type="primary" className="status-button"
                        style={{background: colorByStatus.get(selected)}}>
                    {selected} <DownOutlined/>
                </Button>
            </Dropdown>
        </>
    );
}

export default StatusDropdown;