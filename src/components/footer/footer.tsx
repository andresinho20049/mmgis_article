import { MeetTeamsComponent } from "../cards/meet-team";


export default function FooterComponent() {
    return (
        <footer
            className={`bg-neutral-700`}
        >
            <MeetTeamsComponent />

            {/* <!--Copyright section--> */}
            <div
                className="w-full p-4 text-center text-secondary">
                © 2023 Copyright:
                <a className="text-whitehite" href="https://tailwind-elements.com/">EMIT for the future!</a>
            </div>
        </footer>
    )
}