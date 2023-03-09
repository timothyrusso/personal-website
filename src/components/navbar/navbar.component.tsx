import { TitleComponent } from "../title/title.component"
import { DarkModeButtonComponent } from "../dark-mode-button/dark-mode-button.component"
import { FC } from "react"

type NavbarComponentProps = {
    toggle: () => void;
}

export const NavbarComponent: FC<NavbarComponentProps> = ({ toggle }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TitleComponent />
            <DarkModeButtonComponent toggle={toggle} />
        </div>
    )
}