const CommonButton = (
    props: {
        value?: string,
        onclick?: () => void,
        disabled?: boolean,
        customStyle?: string
    }) => {

    return (
        <input type={"button"} className={"common_button common_button--dark " + props.customStyle} value={props.value ?? "button"} onClick={props.onclick} disabled={props.disabled} />
    )
}

export default CommonButton;