import { LINK_ROUTES } from "../../assets/js/LINK_ROUTES"

export function Verify() {

    return (
        <>
            <section className="verify templatemo-container section-shadow-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="text-left gray-text">Welcome to the profile verification &amp; reference portal.</p>
                            <p className="text-left gray-text">If you are a potential employer for one of our team members and want to verify the person's validity at the Project Megalodon Lab, insert the authentication ID mentioned in the appointment letter. This portal helps you to know the person's validity, last assigned position and duration of work at our lab.</p>
                            <p className="text-left gray-text">If you are a present member or alumni and need a reference letter from us, then email us at <a href={LINK_ROUTES.mail_A_TAG} target="new">mystery@megalodon2202.com</a> with a subject "Reference Letter" and mention your Authentication ID in the body.</p>
                            <p><br/></p>
                            <p className="text-left gray-text"><strong>Enter the Authentication ID</strong></p> 
                            <form id="form" action="#" method="post" className="tm-contact-form">
                                <div className="tm-contact-form">
                                    <div className="form-group">
                                        <input required="" type="text" id="user-input" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group" id="button">
                                        <button type="button" id="button" className="text-uppercase btn-blue-gradient btn-submit">Confirm</button>
                                    </div>
                                </div>
                            </form>
                            
                            <error className="noresults2"></error>


                <table className="table" cellpadding="10">
                <thead>
                    <tr>
                    <th scope="col">Authentication ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Start</th>
                    <th scope="col">End</th>
                    <th scope="col">Profile</th>

                    </tr>
                </thead>
            <tbody>
                    </tbody>
                    
                            </table>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}