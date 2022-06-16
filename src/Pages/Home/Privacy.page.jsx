import { LINK_ROUTES } from "../../assets/js/LINK_ROUTES"

export function Privacy() {
    return (

        <>

        <section class="privacy templatemo-container section-shadow-bottom">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <h1 className="text-center section-title"> Privacy </h1>
						<h2> What information do we collect?</h2>
                        <p class="justify-text ">We may collect the personal and non-personal information of the applicants and the team members. We store information about their skills, experiences, and education. This information is used to help us proceed with applications. We might have stored any of the following information if shared with us during the application process and any form of communication using our email.</p>
						<p class="justify-text ">Information: Name, Phone number, Email, Location, Education, Experience.</p>
						
						<h2>How do we use the stored information?</h2>
						<ul class="ml-5">
                            <li>To help us proceed with the application process and match the skill sets and experience desired for the position.</li>
                            <li>Communicate about any changes, announcements and opportunities.</li>
                            <li>To keep a record of persons who have worked or are working in our teams.</li>
							<li>We don’t share any information with any third party or sponsors for marketing or other purposes.</li>
                        </ul>
						<h2>How do I get my information deleted?</h2>
						<p class="text-left ">We respect our applicants' privacy. If you don’t want us to keep your information anymore, you could email us at <a href={LINK_ROUTES.mail_A_TAG} title="mail" target="new">mystery@megalodon2202.com</a>, we will delete your stored information. Exceptions may apply if you are a current member of our team, as we might have to maintain the records for the purposes of continuation of the duties in the most effective way.</p>
						<h2>How do you keep my information secure?</h2>
						<p class="text-left ">We are using industry-proven secured services (e.g. databases, cloud) to keep your information secured. We have taken security measures to make sure your information stays safe and secure.</p>			
						<h2>Could the privacy policy be changed?</h2>
						<p class="text-left ">In case, there are some changes to the privacy policy, we will contact you via email to let you know about the changes.</p>
						<h2>I want to contact you about my privacy concerns.</h2>
						<p class="text-left ">Please email us at <a href={LINK_ROUTES.mail_A_TAG} title="mail" target="new">mystery@megalodon2202.com</a>, for any concerns about privacy, we will try our best to reach back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
        </section>

        </>

    );
}