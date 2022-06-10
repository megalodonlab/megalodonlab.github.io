import { HeaderImage } from "../../Components/Header/HeaderImage";

export function About() {
    return (

        <>

        <HeaderImage />

        <br /> <br />
        <div className="container">
            <h1 className="text-center"> About Us  </h1> 
            <br />
            <p className="lead">
                Megalodon 2202 is an open-source development environment focused on solving problems using computational approach. This group was founded in March 2022 with the motive to create a platform for free-thinking and experimentation. It was formed by a small team of ambitious programmers, with a dream of building ground-breaking technology.
                <br /> <br />
                Our platform focuses on building prototypes to industry-standard software in multiple areas e.g. automation, artificial intelligence, cloud & desktop application. All projects are made open-source, so it gets easy to modify and free for everyone. Our research group focuses on making unique technologies & prototypes and the web team is responsible for creating support and toolsets for internal development.
            </p>
            <br />

            <h2>Where is this platform based on?</h2>
            <p className="lead">Megalodon 2202 is a virtual open-source development platform. We do take programmers from all over the world. However, currently, all of our team members are working remotely from Canada.</p>
            <br />

            <h2>Why this is Unique?</h2>
            <p className="lead">
                Open-source is a well-known term in the software industry. This term usually goes with specific software or product. But instead of any specific software, our whole platform is formed as an open-source development environment. It means we follow some standards:
            
                <ul className="ml-5">
                    <li>All of our projects are made open-source.</li>
                    <li>Use, distribution and modification are free of charge and anyone can do so as long as we get proper credit.</li>
                    <li>Individual contribution is permitted (requires permission).</li>
                </ul>

                All these standards are followed in each and every project to promote free and accessible technology to everyone.
            </p>
            <br />

            <h2>What products does it make?</h2>
            <p className="lead">We do research and make technologies focused on helping a wide area. Our most recent project initiatives are based on building toolsets for developers, data analysis software and prototypes of machine learning. But our platform works as an experimental laboratory, so it gets hard to explain all the project ideas at once. Feel free to browse our research and solution section to know more about ongoing and completed projects.</p>
            <br />

            <h2>Can I buy any products?</h2>
            <p className="lead"> All our projects are open-source (in other words, free). But we hold copyright on all of our products. We encourage every consumer to contact us before using it. </p>
            <br />

            <h2>Fun fact: Logo and name</h2>
            <p className="lead"> 
                Megalodon is a species of shark that went extinct around 3.6 million years ago. And the number 2202 is the reverse order of the year when it was formed (2022). The naming convention is inspired by Cicada 3301; an online mystery started in 2012.
                <br /> <br />
                The logo symbolizes a shark with a modern and tech aesthetic on it. This logo was designed by a freelance designer Elena in April 2022.
            </p>


        </div>
        <br /><br />

        </>

    );
}