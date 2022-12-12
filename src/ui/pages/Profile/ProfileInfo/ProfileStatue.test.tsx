import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import {updateStatus} from "../../../../bll/redax/profileReducer";

describe('ProfileStatus component',  () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"incubator"} updateStatus={updateStatus}/>)
        const instance = component.root
        expect(instance.props.status).toBe('incubator')
    })
});