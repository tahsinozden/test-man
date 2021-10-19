import React, {useEffect, useState} from "react";
import {Menu} from "antd";

interface StatusMenuProps {
    statuses: string[],
    onClick: (e: any) => void
}

const StatusMenu: React.FC<StatusMenuProps> = ({statuses, onClick}: StatusMenuProps) => {
    const [newStatuses, setNewStatuses] = useState<string[]>([]);

    useEffect(() => {
        setNewStatuses(statuses);
    }, [statuses]);

    return (
        <>
            <Menu onClick={e => onClick(e)}>
                {
                    newStatuses.map(el => <Menu.Item key={el}> {el} </Menu.Item>)
                }
            </Menu>
        </>
    );
}

export default StatusMenu;