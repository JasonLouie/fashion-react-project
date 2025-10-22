import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
    return (
        <>
            <Header title="Sartre's List" subtitle="Better-Dressed People" />
            <main>
                <Article date="11/12/20" title="On the Street in Brooklyn" src="/images/blog-image-1.jpg" alt="A woman in a red dress walking next to a blue brick wall." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni officiis quidem minus! Libero iure, laudantium ducimus omnis totam autem! Accusantium accusamus excepturi, quas, nobis quos molestiae obcaecati vitae harum quisquam est fugiat adipisci dicta laboriosam tempore? Quam totam esse aperiam est repudiandae quia quibusdam ad eaque dignissimos odio, maxime voluptate officia, voluptatum corporis quae laudantium, quos magnam eveniet commodi. Doloribus nisi corporis dicta sapiente non? Similique maxime reiciendis velit voluptatibus deserunt dignissimos aspernatur distinctio id minus, quos in quia perspiciatis labore hic veniam. Ipsam veniam excepturi reiciendis earum necessitatibus perferendis ratione ea minima repellat accusamus, optio sint harum voluptatem."/>
                <Article date="11/12/20" title="Vintage in Vogue" src="/images/blog-image-2.jpg" alt="Three fashionable adults staring at different locations." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat hic quaerat laudantium quos magnam, eveniet ipsam quisquam aperiam odio sequi deleniti magni incidunt nobis obcaecati, eos quidem voluptatum. Dolorum quaerat tempore explicabo saepe tenetur voluptatum quas debitis cupiditate voluptas alias culpa, eveniet exercitationem enim consequuntur nesciunt optio rem reiciendis vero nihil ipsam fugit maxime voluptatem! Maiores, est aperiam tenetur ex nam aut nesciunt ea labore consequuntur eum laboriosam obcaecati totam quod tempore ad quam maxime exercitationem dolorum rem fuga consectetur nisi facilis placeat? Nesciunt facilis alias eum dolorem suscipit doloremque itaque est ipsa saepe delectus, ipsum optio aut quis."/>
            </main>
            <Footer />
        </>
    )
}