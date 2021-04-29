import React from 'react';
import Sidebar from '../components/Sidebar';
import NationalSuicideHotline from "../images/national-suicide-lifeline.png";
import CrisisTextLine from "../images/crisis_text_line.png";
import VeteranCrisisLine from "../images/veteranscrisisline.gif";
import AmericanFlag from "../images/american_flag.jpeg";

export default function VeteranLinks() {
  return (
    <div>
      <div>
        <h1 className="page-header">Breaking the silence of Mental Health</h1>
        <div className="page-wrapper">
          <Sidebar />
          <div className="page-container">
            <h4>Veteran Help Links</h4>
            <h5>If You Know Someone in Crisis</h5>
            <p>
              Call the <a href="https://suicidepreventionlifeline.org/" target="blank">National Suicide Prevention Lifeline (Lifeline)</a> at <strong>1-800-273-TALK (8255),</strong> or text the Crisis Text Line (<strong>text HELLO to 741741</strong>). Both services are free and available 24 hours a day, seven days a week. The deaf and hard of hearing can contact the Lifeline via TTY at 1-800-799-4889. All calls are confidential. Contact social media outlets directly if you are concerned about a friend’s social media updates or dial 911 in an emergency. Learn more on the Lifeline’s website or the <a href="https://www.crisistextline.org/" target="blank">Crisis Text Line’s website</a>.
            </p>
            <p>
              <div className="image-container">
                <a href="https://suicidepreventionlifeline.org/" target="blank"><img src={NationalSuicideHotline} alt="National Suicide Hotline" className="imgage" /></a>
                <a href="https://www.crisistextline.org/" target="blank"><img src={CrisisTextLine} alt="Crisis Text Line" className="imgage" /></a>
                <a href="https://www.veteranscrisisline.net/" target="blank"><img src={VeteranCrisisLine} alt="Veterans Crisis Line" className="imgage" /></a>
              </div>
            </p>
            <p>
              Below are various links veterans can use to seek help and get information for services available to them.
            </p>
            <p>
              <a href="https://www.va.gov/health-care/health-needs-conditions/mental-health/" target="blank">U.S.Department of Veteran Affairs Mental Health Services</a> website will give you resources to get you the help you need.              
            </p>
            <p>
              <strong>If you're already using VA medical services,</strong> ask your primary care provider to help you make an appointment with a VA mental health provider.
            </p>
            <p>
              <strong>If you're not already using VA medical services,</strong> contact your nearest VA medical center or Vet Center to talk about your needs.
            </p>
            <p>
              <a href="https://www.va.gov/find-locations/?zoomLevel=4&page=1&facilityType=health" target="blank">Find your nearest VA Medical Center or Veteran Care</a>
            </p>
            <h6>Not sure what kind of help you need</h6>
            <p>
              You can call 877-222-8387 to find the right resources for your needs.  If you have hearing loss, call TTY: 800-877-8339.<br/>
              Hours of operation are Monday through Friday, 8:00 am to 8:00 pm ET.
            </p>
            <h5>Online Resources</h5>
            <p>
              <strong>The Veteran Training online self-help portal for overcoming everyday challenges:</strong> You can use this portal’s tools to help manage your anger, develop parenting and problem-solving skills, and more. The tools are based on proven mental health practices that have successfully helped other Veterans and families. The portal is free, and you don’t have to sign in or provide any personal information to use the tools.
            </p>
            <p>
              <a href="https://www.veterantraining.va.gov/" target="blank">Visit the Veteran Training portal</a>
            </p>
            <p>
              <strong>Smartphone apps for Veterans:</strong> The VA and the Department of Defense (DoD) have partnered up to create free smartphone applications you can use to help manage your physical and mental health.  These include apps to help you deal with stress, quit smoking, and more.<br/>            
              <a href="https://ncgwg.org/wp-content/uploads/2018/04/Resources_-Apps-for-Veterans.pdf" target="blank">Apps for Veterans (PDF)</a>
            </p>
            <h5>Other Resources</h5>
            <h6>Speak to a fellow Veteran who's been through this before</h6>
            <p>
              The <strong>BeThere</strong> peer assistance program, in partnership with Military OneSource, offers support to service members (including National Guard soldiers and Reservists), their families, and transitioning Veterans up to 365 days after separation or retirement. Through this program, you can talk privately with peer coaches who are Veterans, service members, or military spouses.
            </p>
            <p>  
              To talk with a peer coach, call Military OneSource’s free, confidential peer support services at <strong>800-342-9647</strong>. This service is available 24 hours a day, 365 days a year.
            </p>
            <h6>Connect with other Veterans, families, and local services.</h6>
            <p>The Make the Connection website connects millions of Veterans, and their family members and friends, to local VA and community mental health resources. Visit the site to access these referral resources and hear Veteran testimonials of strength and recovery.</p>
            <p>
              <a href="https://www.maketheconnection.net/" target="blank">Make the Connection website</a>
            </p>
            <h5>Common questions Veterans have when seeking mental health services</h5>
            <br/>
            <p>
              <strong>Will using mental health services at the VA put my career at risk?</strong>
            </p>
            <p> 
              Being diagnosed with a mental health condition or seeking mental health care doesn’t automatically put work-related credentials, such as security clearances, at risk. Most employers recognize that healthy employees who get help when they need it are more productive and effective in their jobs than those who aren’t performing at their best because they’re not feeling well.
            </p>
            <p>
              <strong>Do I need to be enrolled in VA health care to access mental health care?</strong>
            </p>
            <p>
              No. If you don’t qualify for VA health care, you may still be able to get certain health care services, like care for needs linked to military sexual trauma.
            </p>
            <p>
              Call the general VA hotline at 800-827-1000 to find out what your care options may be. Hours of Operation: Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.
            </p>
            <p>
              Depending on your needs and situation, you can also:
            </p>
            <ul>
              <li>Get free private counseling, alcohol and drug assessment, and other support for combat Veterans and families at one of our 300 community Vet Centers.<br /> <a href="https://www.va.gov/find-locations/?facilityType=vet_center" target="blank">Find a Vet Center near you</a></li>
              <li>Contact the National Call Center for Homeless Veterans at <strong>877-424-3838</strong> for help 24 hours a day, 7 days a week. A trained VA counselor will offer information about VA homelessness programs, health care, and other services in your area. The call is free and confidential.</li>
              <li>Call or visit your local VA Community Resource and Referral Center. Even if you don’t qualify for VA health care, our staff can help you find non-VA resources you may qualify for in your community.<br /><a href="https://www.va.gov/HOMELESS/Crrc.asp" target="blank">Find your local Community Resource and Referral Center</a></li>
            </ul>
            <p>
              Or you can apply for VA health care to access more services:
            </p>
            <p>
              <a href="https://www.va.gov/health-care/eligibility/" target="blank">Find out if you're eligible for VA health care</a><br/>
              <a href="https://www.va.gov/health-care/how-to-apply/" target="blank">Learn how to apply for health care benefits</a>
            </p>
            <p>
              <strong>I'm in the National Guard or Reserves. Am I eligible to use VA mental health services?</strong>
            </p>
            <p>
              To learn more about whether you’re eligible for services, call your nearest VA medical center.<br/>
              <a href="https://www.va.gov/find-locations/?zoomLevel=4&page=1&facilityType=health" target="blank">Find your nearest VA medical center</a>
            </p>
            <p>
              Or call <strong>877-222-8387</strong> to find the right resource for your needs. If you have hearing loss, call TTY: <strong>800-877-8339</strong>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
            </p>
            <p>
              <strong>How long will it take for me to start getting help once I contact the VA?</strong>
            </p>
            <p>
              You’ll start receiving help the day you reach out to them. They offer same-day services to make sure we can either address your mental health needs or schedule the right follow-up care right away. The specific care you receive will depend on how urgent your needs are and the level of treatment you’re looking for.
            </p>
            <p>
              Same-day services may include care such as:
            </p>
            <ul>
              <li>Meeting face-to-face with a VA health care provider (including walk-in appointments at a clinic or urgent care center)</li>
              <li>Having a telehealth or video care appointment with a VA provider</li>
              <li>Talking by phone with a VA nurse who can offer medical advice (called “nurse triage”)</li>
              <li>Communicating with a VA provider through Secure Messaging</li>
              <li>Scheduling a future appointment</li>
              <li>Getting a prescription filled</li>
            </ul>
            <p>
              <strong>What mental health problems does the VA treat?</strong>
            </p>
            <p>
              The VA treats a range of mental health problems including: 
            </p>  
            <ul>
              <li>Post traumatic stress disorder (PTSD)</li>
              <li>Depression</li>
              <li>Thoughts of suicide</li>
              <li>Issues related to military sexual trauma (MST)</li>
              <li>Substance use problems</li>
              <li>Bipolar disorder</li>
              <li>Schizophrenia</li>
            </ul>
            <p>
              The VA also treats anxiety-related conditions like:
            </p>
            <ul>
              <li>Generalized anxiety disorder</li>
              <li>Panic disorder</li>
              <li>Social anxiety</li>
              <li>Specific phobias</li>
            </ul>
            <p>
              <strong>Does the VA offer mental health resources for family, friends and caregivers of Veterans?</strong>
            </p>
            <p>
              Yes. In addition to online resources, caregiver support coordinators at your nearest VA medical center and a caregiver peer support mentoring program can help connect caregivers to one another for support and learning.
            </p>
            <p>To get support as a caregiver:</p>
            <ul>
              <li><a href="https://www.caregiver.va.gov/" target="">Find a local caregiver support coordinator</a></li>
              <li>Or call the Caregiver Support Line <strong>855-260-3274</strong>, Monday through Friday, 8:00 a.m. to 10:00 p.m. ET, and Saturday, 8:00 a.m. to 5:00 p.m. ET</li>
            </ul>
            <p>
              You can also contact <strong>Coaching into Care</strong> program to speak directly with a licensed psychologist or social worker, free of charge. They can provide information about mental health and VA services, as well as tips for how to begin the conversation about treatment with a loved one.
            </p>
            <p>To reach a licensed psychologist or social worker:</p>
            <ul>
              <li><a href="https://www.mirecc.va.gov/coaching/" target="blank">Contact Coaching into Care online</a></li>
              <li>Or call <strong>888-823-7458</strong>, Monday through Friday, 8:00 a.m. to 8:00 p.m. ET</li>
            </ul>
            <h5>Resources and support outside the VA</h5>
            <p>
              <a href="https://www.militaryonesource.mil/health-wellness/mental-health/" target="blank">Military OneSource</a><br/>
              This free service provides expert support to connect military personnel and their families with the best available resources to fit their needs. For support, visit the Military OneSource website or call <strong>800-342-9647</strong> anytime, day or night.
            </p>
            <p>
              <a href="https://suicidepreventionlifeline.org/" target="blank">The National Suicide Prevention Lifeline</a><br/>
              This 24/7, 365-day-a-year emergency mental health hotline offers support for people experiencing a mental health crisis.<br/>
              To reach the hotline: <a href="https://suicidepreventionlifeline.org/chat/" target="blank">Start an online chat</a> or call <strong>800-273-8255.</strong>
            </p>
            <p>
              <a href="https://afsp.org/" target="blank">The American Foundation for Suicide Prevention</a><br />
              The foundation provides mental health resources for people struggling with thoughts of suicide. They also offer supportive educational tools for concerned family, friends and peers.
            </p>
            <p>
              <a href="https://www.samhsa.gov/" target="blank">The Substance Abuse and Mental Health Services Administration (SAMHSA)</a><br />
              SAMHSA offers free, confidential help with treatment referral and information services for individuals and families facing mental health and/or substance use disorders. Support is available 24/7, 365-days-a-year, in both English and Spanish.
            </p>
            <p>
              <a href="https://www.nami.org/findsupport" target="blank">The National alliance on Mental Illness (NAMI)</a><br />
              NAMI builds better lives for millions of Americans affected by mental illness by providing education programs for families and individuals living with mental health problems.
            </p>
            <p>
              <a href="https://www.jedfoundation.org/" target="blank">The Jed Foundation</a><br />
              The foundation works closely with teenagers and young adults who may be experiencing mental stress or may be at risk for suicide during times of change.
            </p>
            <p>
              <a href="https://www.mhanational.org/" target="blank">Mental Health America</a><br/>
              This organization advocates for policies that promote mental health and the rights of people living with mental health problems. They also provide education and connections to mental health resources.
            </p>
            <div className="veteran-footer">
              <strong>We at ConvoCare would like to thank all active duty and veteran military members and their family for their sacrifices for our freedom. Thank you for your service.</strong>
              <img src={AmericanFlag} alt="American Flag" className="american-flag-img"/>
            </div> 
            <br/>        
          </div>
        </div>
      </div>      
    </div>
  )
}
