export default function Article(props) {
    return (
        <article>
            <h2 className="subheading date">{props.date || "No Date"}</h2>
            <h1 className="heading">{props.title || "No Title"}</h1>
            <img src={props.src || "/images/image-not-found.jpg"} alt={props.alt || "No alt text provided"} />
                <p className="text">{props.text || "No Text"}</p>
                <div className="more">
                    <a href="" className="read-more">Continues ...</a>
                </div>
        </article>
    );
}