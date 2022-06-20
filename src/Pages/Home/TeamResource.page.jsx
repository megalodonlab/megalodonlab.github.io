import { HashLink } from 'react-router-hash-link';
import { LINK_ROUTES } from '../../assets/js/LINK_ROUTES'
import './../../assets/css/Static.min.scss';

export function TeamResource() {

    return (

        <div>
            <div class="header bg-white">
                <p class="section-title text-center">Team Resource</p>
            </div>
            <div class="side-nav-left">
                <p><HashLink to="#welcome">Welcome to the Team</HashLink></p>

                <p><HashLink to="#start">Getting started</HashLink></p>
                <p><HashLink to="#help">Help Desk</HashLink></p>
                <p><HashLink to="#setup">Setup Environment</HashLink></p>
                <p><HashLink to="#teams">Teams</HashLink></p>
                <p><HashLink to="#privacy">Privacy</HashLink></p>
                <p><a href={LINK_ROUTES.INDEX}>Return Website</a></p>
            </div>
            <div class="content">
                <p id="welcome" class="title1">Welcome!</p>
                <p>Welcome to the team!! We want you to know that we are proud to have you on our team. We believe in you and we are with you in everything you do here. Together, let us take this platform to a new level.</p>
                <p id="start" class="title1">Getting Started</p>
                <p>Before start working with our team you must ensure you have all the items listed below.</p>
                <p class="subtitle emphasis">Team Package:</p>
                <ul>
                    <li>A signed letter of appoinment.</li>
                    <li>Authentication ID.</li>
                    <li>Official email account.</li>
                    <li>Personal portfolio access.</li>
                    <li>Project environment access (GitHub/Drive/...). <br /> Note: Please make sure you have an active GitHub account.</li>
                    <li>EMS Login information (Not available yet).</li>
                </ul>
                <p>Note: Please do not use any official resource for personal use.</p>

                <p id="help" class="title1">Help Desk</p>
                <p>You must have a proper understanding of the stacks and technologies we use on our platform. So you must resolve every issue before starting working on your assigned projects. If you face any difficulties regarding installation or access, feel free to contact us via email or Slack channel #help-desk.</p>
                <p>Email us at <a href={LINK_ROUTES.mail_A_TAG}> {LINK_ROUTES.mail_OFFICE} </a> with a subject "Tech Support".</p>
                <p>Or, ask on the Slack channel #help-desk</p>
                <p id="setup" class="title1">Setup Environment</p>
                <p class="subtitle emphasis">Communication:</p>
                <p>Our project development entirely depends on team collaboration and better communication. We only use software that we have tested and has better privacy support and easy access for everyone. As a team member, you must make sure you are comfortable with all technologies we use for communication. </p>
                <p>We use the following applications on our platform. Please make sure you have downloaded and installed both desktop and mobile versions. Find the access link/login information in your welcome email.</p>
                <table>
                    <tr>
                        <th>Application</th>
                        <th>Use Case</th>
                        <th>Login info</th>

                    </tr>
                    <tr>
                        <td>Gmail (Mobile+Browser)</td>
                        <td>Email</td>
                        <td>Provided email</td>

                    </tr>
                    <tr>
                        <td><a href="https://slack.com/" target="new">Slack (Desktop+Phone)</a></td>
                        <td>Chat</td>
                        <td>Provided email</td>

                    </tr>
                    <tr>
                        <td>Google meet (Browser)</td>
                        <td>Video conference</td>
                        <td>Provided email</td>

                    </tr>
                    <tr>
                        <td>Google Calender (Browser)</td>
                        <td>Scheduling application</td>
                        <td>Provided email</td>

                    </tr>
                </table>
                <p class="subtitle emphasis">Shared Storage:</p>
                <p>Each team member will have an assigned folder on our shared drive location. Only use your drive to store your code/work files. Please make sure you have downloaded the desktop application.</p>
                <table>
                    <tr>
                        <th>Application</th>
                        <th>Use Case</th>
                        <th>Login info</th>

                    </tr>
                    <tr>
                        <td><a href="https://www.google.com/intl/en_ca/drive/download/" target="new">Google Drive (Desktop)</a></td>
                        <td>Shared storage</td>
                        <td>Provided email</td>

                    </tr>
                </table>
                <p class="subtitle emphasis">Code Base:</p>
                <p>We generally use three development environments: The GitHub repositories, Linux server and Google drive (for local development and test). Google Drive is the same as above.</p>
                <p>Download the GitHub desktop application and clone your project repository inside your Google Drive folder.</p>
                <table>
                    <tr>
                        <th>Application</th>
                        <th>Use Case</th>
                        <th>Login info</th>

                    </tr>
                    <tr>
                        <td><a href="https://desktop.github.com/" target="new">GitHub Desktop</a></td>
                        <td>Pull/Push project code from local environment (desktop)</td>
                        <td>Personal GitHub account</td>
                    </tr>
                </table>
                <p>Note: Linux server access information is available on slack.</p>
                <p class="subtitle emphasis">IDEs &amp Text Editors:</p>
                <p>Feel free to use any text editors you are comfortable with. however, we recommend the followings: </p>
                <p>Note: Some IDEs are paid and can be accessed using your student benefit. Email us if you need any support.</p>
                <table>
                    <tr>
                        <th>IDE</th>
                        <th>Language</th>
                        <th>Recommended</th>

                    </tr>
                    <tr>
                        <td><a href="https://www.jetbrains.com/idea/" target="new">IntelliJ IDEA - Jet Brains</a></td>
                        <td>Java</td>
                        <td>Recommended</td>

                    </tr>
                    <tr>
                        <td><a href="https://code.visualstudio.com/" target="new">Visual Studio Code - Microsoft</a></td>
                        <td>Java / C++ / C / HTML / CSS / JavaScript / Python</td>
                        <td>Recommended</td>

                    </tr>
                    <tr>
                        <td><a href="https://www.bluej.org/" target="new">BlueJ</a></td>
                        <td>Java</td>
                        <td> </td>

                    </tr>
                    <tr>
                        <td><a href="https://www.jetbrains.com/clion/" target="new">CLion - Jet Brains</a></td>
                        <td>C / C++</td>
                        <td>Recommended</td>

                    </tr>
                    <tr>
                        <td><a href="https://brew.sh/" target="new">Vim</a></td>
                        <td>C / C++</td>
                        <td></td>

                    </tr>
                    <tr>
                        <td><a href="https://www.codeblocks.org/" target="new">Code Blocks</a></td>
                        <td>C / C++</td>
                        <td> </td>

                    </tr>
                    <tr>
                        <td><a href="https://www.jetbrains.com/webstorm/" target="new">Web Storm - Jet Brains</a></td>
                        <td>HTML / CSS / JavaScript</td>
                        <td>Recommended</td>

                    </tr>
                    <tr>
                        <td><a href="https://www.jetbrains.com/webstorm/" target="new">Dreamweaver - Adobe</a></td>
                        <td>HTML / CSS / JavaScript</td>
                        <td></td>

                    </tr>
                    <tr>
                        <td><a href="https://www.jetbrains.com/pycharm/" target="new">PyCharm - Jet Brains</a></td>
                        <td>Python</td>
                        <td>Recommended</td>

                    </tr>
                </table>
                <p id="teams" class="title1">Teams</p>
                <p>This platform runs by a small group of creatives who love to create and experiment with technologies. Our work area involves making prototypes based on our experiments and developing tools and software.</p>
                <p class="subtitle emphasis">Research team:</p>
                <p>This team is focused on experiments and creating prototypes. We find problems and make tools and software to resolve those issues. Some of our work involves automation, machine learning, data analysis and visualization etc.</p>
                <p class="subtitle emphasis">Web Development team:</p>
                <p>This team focuses on internal tools development. Our platform mostly depends on the internet, so it needs proper maintenance. Also, we are moving towards a non-dependent platform plan where we will only use our tools and software for development. All of these tasks are handled by this team.</p>
                <p id="privacy" class="title1">Privacy</p>
                <p>We will not be responsible for all information shared using non-official emails.</p>
                <p>We will not share (public/outside of team) any piece of personal information without proper permission.</p>
                <p>Detailed privacy information can be found on our <a href="https://megalodon2202.com/privacy.html">website (Privacy)</a>.</p>
            </div>
        </div>

    );    


}