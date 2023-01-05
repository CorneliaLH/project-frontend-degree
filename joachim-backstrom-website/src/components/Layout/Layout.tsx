import { Outlet } from "react-router-dom";
import "./sass/layout.css";

export function Layout() {

    return <>
    <header className="header">
        <section>
            <h1>Joachim Bäckström</h1>
        </section>
    </header>
    <main className="main">
    <Outlet></Outlet>

    </main>
    <footer>
        <section>
            footer
        </section>
    </footer>

    </>
}