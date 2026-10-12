import type { ReactNode } from "react"

type ButtonProps = {
    content: ReactNode
    onClick: () => void
}

export const Button = (props: ButtonProps) => {

    return (
        <button onClick={props.onClick}>
            {props.content}
        </button>
    )
}