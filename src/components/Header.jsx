import Nav from "./Nav";

export default function Header(props) {
    return (
        <header>
            <h1 id="title" className="heading">{props.title || "No Title"}</h1>
            <h2 className="subheading">{props.subtitle || "No Subtitle"}</h2>
            <Nav />
        </header>
    );
}