import { FC } from "react"

type DarkModeButtonComponentProps = {
    toggle: () => void;
}

export const DarkModeButtonComponent: FC<DarkModeButtonComponentProps> = ({ toggle }) => {
    return (
        <button style={{ width: '40px', backgroundColor: 'red', height: '40px', alignSelf: 'center' }} onClick={() => toggle()} />
    )
}