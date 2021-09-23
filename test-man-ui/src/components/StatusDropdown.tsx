import React, {ReactElement, useEffect, useState} from "react";
import TestStatus from "../models/TestStatus";
import TestManagerApi from "../api/TestManagerApi";
import "./StatusDropDown.css"
import {Button, Dropdown, Menu} from "antd";
import {DownOutlined} from "@ant-design/icons";

interface StatusDropDownProps {
    currentStatus: string;
    onStatusSelect: (newStatus: string) => void;
}

const StatusDropdown: React.FC<StatusDropDownProps> = ({currentStatus, onStatusSelect}: StatusDropDownProps) => {
    const [statuses, setStatuses] = useState<string[]>([]);
    const [selected, setSelected] = useState(TestStatus.Undefined.toString());
    const testManagerApi = new TestManagerApi();
    const colorByStatus = new Map([
            [TestStatus.Undefined.toString(), "grey"],
            [TestStatus.Passed.toString(), "green"],
            [TestStatus.Failed.toString(), "red"]
        ]
    );
    const [statusMenu, setStatusMenu] = useState<ReactElement>((<></>));

    useEffect(() => {
        testManagerApi.getAllStatuses().then(data => setStatuses(data));
    }, []);

    useEffect(() => {
        setStatusMenu((
            <Menu onClick={handleMenuClick}>
                {
                    statuses.map(el => <Menu.Item key={el}> {el} </Menu.Item>)
                }
            </Menu>));

    }, [statuses]);

    useEffect(() => {
        setSelected(currentStatus);
    }, [currentStatus]);

    const handleMenuClick = (e: any) => {
        onStatusSelect(e.key);
        setSelected(e.key);
    }

    return (
        <>
            <Dropdown overlay={statusMenu}>
                <Button type="primary" style={{background: colorByStatus.get(selected), borderColor: "white"}}>
                    {selected} <DownOutlined/>
                </Button>
            </Dropdown>
        </>
    );
}

export default StatusDropdown;