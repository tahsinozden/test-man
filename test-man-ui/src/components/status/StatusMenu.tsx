import React, {ReactElement, useEffect, useState} from "react";
import TestStatus from "../../models/TestStatus";
import {Menu} from "antd";
import testManagerApi from "../../api/TestManagerApi";

const StatusMenu: React.FC = () => {
    const [newStatuses, setNewStatuses] = useState<string[]>([]);
    const [statusMenu, setStatusMenu] = useState<ReactElement>((<></>));
    const colorByStatus = new Map([
            [TestStatus.Undefined.toString(), "grey"],
            [TestStatus.Passed.toString(), "green"],
            [TestStatus.Failed.toString(), "red"]
        ]
    );

    useEffect(() => {
        testManagerApi.getAllStatuses().then(data => {
            setNewStatuses(data);
        });
    }, []);

    useEffect(() => {
        setStatusMenu((
            <Menu>
                {
                    newStatuses.map(el => <Menu.Item key={el}> {el} </Menu.Item>)
                }
            </Menu>));

    }, [newStatuses]);

    return (
        <>
            {statusMenu}
        </>
    );
}

export default StatusMenu;