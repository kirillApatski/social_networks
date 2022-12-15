import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {TextStyled} from "../../../components/Text/TextStyled";
import Input from "../../../components/Input/Input";
import {Wrapper} from "../../../styles/Wrapper";

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
                    ? <Wrapper onDoubleClick={activateEditMode}><TextStyled>Status: {props.status || "No status"}</TextStyled></Wrapper>

                    : <Input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                             value={status}/>
            }
        </div>
    )
}


export default ProfileStatus
