import React from 'react'

const BackButton = (props) => {
    return (
        <button type="button" class="btn btn-info" onClick={props.back} >{`<   Back`}</button>
    )
}
export default BackButton;


