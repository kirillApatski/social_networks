import React, {ChangeEvent, FC, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {
                !editMode
                    ? <div onDoubleClick={activateEditMode}><span>{props.status || "No status"}</span></div>

                    : <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                             value={status}/>
            }
        </div>
    )
}


export default ProfileStatus
