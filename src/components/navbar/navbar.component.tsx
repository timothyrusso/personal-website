import { TitleComponent } from "../title/title.component"

export const NavbarComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TitleComponent />
            <div style={{ width: '40px', backgroundColor: 'red', height: '40px', alignSelf: 'center' }} />
        </div>
    )
}