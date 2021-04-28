import React from 'react';
import Disclaimer from '../components/Disclaimer';
import Footnote from '../components/Footnote'
import Sidebar from '../components/Sidebar';
import ActionSteps from "../images/actionsteps.jpg";
import NationalSuicideHotline from "../images/national-suicide-lifeline.png";
import CrisisTextLine from "../images/crisis_text_line.png";
import VeteranCrisisLine from "../images/veteranscrisisline.gif";

export default function SuicidePrevention() {
  return (
    <div>
      <div>
        <h1 className="page-header">Breaking the silence of Mental Health</h1>
        <div className="page-wrapper">
          <Sidebar />
          <div className="page-container">

            <h3>Suicide Prevention</h3>
            <p>
              Suicide is a major public health concern. Over 48,000 people died by suicide in the United States in 2018; it is the 10th leading cause of death overall. Suicide is complicated and tragic, but it is often preventable. Knowing the warning signs for suicide and how to get help can help save lives.
            </p>
            <h4>If You Know Someone in Crisis</h4>
            <p>
              Call the <a href="https://suicidepreventionlifeline.org/" target="blank">National Suicide Prevention Lifeline (Lifeline)</a> at <strong>1-800-273-TALK (8255),</strong> or text the Crisis Text Line (<strong>text HELLO to 741741</strong>). Both services are free and available 24 hours a day, seven days a week. The deaf and hard of hearing can contact the Lifeline via TTY at 1-800-799-4889. All calls are confidential. Contact social media outlets directly if you are concerned about a friend’s social media updates or dial 911 in an emergency. Learn more on the Lifeline’s website or the <a href="https://www.crisistextline.org/" target="blank">Crisis Text Line’s website</a>.
            </p>
            <p>
              The <a href="https://www.veteranscrisisline.net/" target="blank">Veterans Crisis Line</a> connects Service members and Veterans in crisis, as well as their family members and friends, with qualified, caring Department of Veteran’s Affairs (VA) responders through a confidential toll-free hotline, online chat, or text messaging service. Dial 1-800-273-8255 and Press 1 to talk to someone or send a text message to 838255 to connect with a VA responder. You can also start a confidential online chat session at <a href="https://www.veteranscrisisline.net/get-help/chat" target="blank">veteranscrisisline.net/get-help/chat</a>.
            </p>
            <p>
              <div className="image-container">
                <a href="https://suicidepreventionlifeline.org/" target="blank"><img src={NationalSuicideHotline} alt="National Suicide Hotline" className="imgage" /></a>
                <a href="https://www.crisistextline.org/" target="blank"><img src={CrisisTextLine} alt="Crisis Text Line" className="imgage" /></a>
                <a href="https://www.veteranscrisisline.net/" target="blank"><img src={VeteranCrisisLine} alt="Veterans Crisis Line" className="imgage" /></a>
              </div>
            </p>
            <h4>Signs and Symptoms</h4>
            <p>
              The behaviors listed below may be signs that someone is thinking about suicide.
            </p>
            <ul>
              <li>Talking about wanting to die or wanting to kill themselves</li>
              <li>Talking about feeling empty, hopeless, or having no reason to live</li>
              <li>Making a plan or looking for a way to kill themselves, such as searching for lethal methods online, stockpiling pills, or buying a gun</li>
              <li>Talking about great guilt or shame</li>
              <li>Talking about feeling trapped or feeling that there are no solutions</li>
              <li>Feeling unbearable pain (emotional pain or physical pain)</li>
              <li>Talking about being a burden to others</li>
              <li>Using alcohol or drugs more often</li>
              <li>Acting anxious or agitated</li>
              <li>Withdrawing from family and friends</li>
              <li>Changing eating and/or sleeping habits</li>
              <li>Showing rage or talking about seeking revenge</li>
              <li>Taking great risks that could lead to death, such as driving extremely fast</li>
              <li>Talking or thinking about death often</li>
              <li>Displaying extreme mood swings, suddenly changing from very sad to very calm or happy</li>
              <li>Giving away important possessions</li>
              <li>Saying goodbye to friends and family</li>
              <li>Putting affairs in order, making a will</li>
            </ul>
            <p>
              If these warning signs apply to you or someone you know, get help as soon as possible, particularly if the behavior is new or has increased recently.
            </p>
            <p>
              <h6>Here are five steps you can take to #BeThe1To help someone in emotional pain:</h6>
              <img src={ActionSteps} alt="5 steps to help"/>
            </p>
            <ol>
              <li>
                <strong>ASK:</strong> “Are you thinking about killing yourself?” It’s not an easy question, but studies show that asking at-risk individuals if they are suicidal does not increase suicides or suicidal thoughts.
              </li>
              <li>
                <strong>KEEP THEM SAFE:</strong> Reducing a suicidal person’s access to highly lethal items or places is an important part of suicide prevention. While this is not always easy, asking if the at-risk person has a plan and removing or disabling the lethal means can make a difference.
              </li>
              <li>
                <strong>BE THERE:</strong> Listen carefully and learn what the individual is thinking and feeling. Research suggests acknowledging and talking about suicide may reduce rather than increase suicidal thoughts.
              </li>
              <li>
                <strong>HELP THEM CONNECT:</strong> Save the National Suicide Prevention Lifeline’s <strong>(1-800-273-TALK (8255))</strong> and the Crisis Text Line’s number <strong>(741741)</strong> in your phone, so it’s there when you need it. You can also help make a connection with a trusted individual like a family member, friend, spiritual advisor, or mental health professional.
              </li>
              <li>
                <strong>STAY CONNECTED:</strong> Staying in touch after a crisis or after being discharged from care can make a difference. Studies have shown the number of suicide deaths goes down when someone follows up with the at-risk person.
              </li>
            </ol>
            <h4>Risk Factors</h4>
            <p>
              Suicide does not discriminate. People of all genders, ages, and ethnicities can be at risk. Suicidal behavior is complex, and there is no single cause. Many different factors contribute to someone making a suicide attempt. But people most at risk tend to share specific characteristics. The main risk factors for suicide are:
            </p>
            <ul>
              <li>Depression, other mental disorders, or substance abuse disorder</li>
              <li>Certain medical conditions</li>
              <li>Chronic pain</li>
              <li>A prior suicide attempt</li>
              <li>Family history of a mental disorder or substance abuse</li>
              <li>Family history of suicide</li>
              <li>Family violence, including physical or sexual abuse</li>
              <li>Having guns or other firearms in the home</li>
              <li>Having recently been released from prison or jail</li>
              <li>Being exposed to others' suicidal behavior, such as that of family members, peers, or celebrities</li>
            </ul>
            <p>
              Many people have some of these risk factors but do not attempt suicide. It is important to note that suicide is not a normal response to stress. <strong>Suicidal thoughts or actions are a sign of extreme distress, not a harmless bid for attention, and should not be ignored.</strong>
            </p>
            <p>
              Often, family and friends are the first to recognize the <a href="https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide/index.shtml" target="blank">warning signs of suicide</a> and can be the first step toward helping an at-risk individual find treatment with someone who specializes in diagnosing and treating mental health conditions. See the resources on NIMH’s <a href="https://www.nimh.nih.gov/health/find-help/index.shtml" target="blank">Find Help for Mental Illnesses</a> page if you're not sure where to start.
            </p>
            <p>
              Suicide is complex. Treatments and therapies for people with suicidal thoughts or actions will vary with age, gender, physical and mental well-being, and with individual experiences. NIMH has focused research on identifying people at risk for suicide and identifying effective interventions.
            </p>
            <h6>Identifying People at Risk for Suicide</h6>
            <ul>
              <li>
                <strong>Universal Screening:</strong> Research has shown that a three-question screening tool helps emergency room personnel identify adults at risk for suicide. Researchers found that screening all patients – regardless of the reason for their emergency room visit – doubled the number of patients identified as being at risk for suicide. The researchers estimated that suicide-risk screening tools could identify more than three million additional adults at risk for suicide each year.
              </li>
              <li>
                <strong>Predicting Suicide Risk Using Electronic Health Records:</strong> Researchers from NIMH partnered with the VA and others to develop computer programs that could <a href="https://www.va.gov/opa/pressrel/pressrelease.cfm?id=2878" target="blank">help predict suicide risk among veterans receiving VA health care</a>. Other healthcare systems are beginning to use data from electronic health records to help identify people with suicide risk as well.
              </li>
            </ul>
            <h4>Treatments and Therapies</h4>
            <h5>Brief Interventions</h5>
            <ul>
              <li>
                <strong>Safety Planning:</strong> Personalized safety planning has been shown to help reduce suicidal thoughts and actions. Patients work with a caregiver to develop a plan that describes ways to limit access to lethal means such as firearms, pills, or poisons. The plan also lists coping strategies and people and resources that can help in a crisis.
              </li>
              <li>
                <strong>Follow-up phone calls</strong> Research has shown that when at-risk patients receive further screening, a Safety Plan intervention, and a series of supportive phone calls, their risk of suicide goes down.
              </li>
            </ul>
            <h5>Psychotherapies</h5>
            <p>
              Multiple types of psychosocial interventions have been found to help individuals who have attempted suicide (see below). These types of interventions may prevent someone from making another attempt.
            </p>
            <ul>
              <li>
                <strong>Cognitive Behavioral Therapy (CBT)</strong> can help people learn new ways of dealing with stressful experiences through training. CBT helps individuals recognize their thought patterns and consider alternative actions when thoughts of suicide arise.
              </li>
              <li>
                <strong>Dialectical Behavior Therapy (DBT)</strong> has been shown to reduce suicidal behavior in adolescents. DBT has also been shown to reduce the rate of suicide in adults with borderline personality disorder, a mental illness characterized by an ongoing pattern of varying moods, self-image, and behavior that often results in impulsive actions and problems in relationships. A therapist trained in DBT helps a person recognize when his or her feelings or actions are disruptive or unhealthy, and teaches the skills needed to deal better with upsetting situations.
              </li>
            </ul>
            <p>
              <a href="https://www.nimh.nih.gov/health/find-help/index.shtml" target="blank">NIMH’s Find Help for Mental Illnesses</a> page can help you locate a mental health provider in your area. Here are <a href="https://www.nimh.nih.gov/health/publications/tips-for-talking-with-your-health-care-provider/index.shtml" target="blank"><strong>tips</strong></a> to help prepare and guide you on how to talk to your health care provider about your mental health and get the most of your doctor’s visit.
            </p>
            <h5>Medications</h5>
            <p>
              Some individuals at risk for suicide might benefit from medication. Doctors and patients can work together to find the best medication or medication combination, as well as the right dose. Because many individuals at risk for suicide often have a mental illness and substance use problems, individuals might benefit from medication along with psychosocial intervention.
            </p>
            <p>
              <a href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/information-clozapine" target="blank">Clozapine</a> is an antipsychotic medication used primarily to treat individuals with schizophrenia. To date, it is the only medication with a specific U.S. Food and Drug Administration (FDA) indication for reducing the risk of recurrent suicidal behavior in patients with schizophrenia or schizoaffective disorder.
            </p>
            <p>
              If you are prescribed a medication, be sure y
            </p>
            <ul>
              <li>Talk with your doctor or a pharmacist to make sure you understand the risks and benefits of the medications you're taking.</li>
              <li>Do not stop taking a medication without talking to your doctor first. Suddenly stopping a medication may lead to "rebound" or worsening of symptoms. Other uncomfortable or potentially dangerous withdrawal effects also are possible.</li>
              <li>Report any concerns about side effects to your doctor right away. You may need a change in the dose or a different medication.</li>
              <li>Report serious side effects to the <a href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program" target="blank">FDA MedWatch Adverse Event Reporting program</a> online or by phone at 1-800-332-1088. You or your doctor may send a report</li>
            </ul>
            <p>
              Other medications have been used to treat suicidal thoughts and behaviors, but more research is needed to show the benefit of these options. For basic information about these medications, you can visit the <a href="https://www.nimh.nih.gov/health/topics/mental-health-medications/index.shtml" target="blank">NIMH Mental Health Medications</a> webpage. For the most up-to-date information on medications, side effects, and warnings, visit the <a href="https://www.fda.gov/" target="blank">FDA</a> website.
            </p>
            <h5>Collaborative Care</h5>
            <p>
              <a href="https://www.nimh.nih.gov/archive/news/2016/adding-better-mental-health-care-to-primary-care.shtml" target="blank">Collaborative Care</a> has been shown to be an effective way to treat depression and reduce suicidal thoughts. A team-based Collaborative Care program adds two new types of services to usual primary care: behavioral health care management and consultations with a mental health specialist.
            </p>
            <p>
              The behavioral health care manager becomes part of the patient’s treatment team and helps the primary care provider evaluate the patient’s mental health. If the patient receives a diagnosis of a mental health disorder and wants treatment, the care manager, primary care provider, and patient work together to develop a treatment plan. This plan may include medication, psychotherapy, or other appropriate options.
            </p>
            <p>
              Later, the care manager reaches out to see if the patient likes the plan, is following the plan, and if the plan is working or if changes are needed to improve management of the patient’s disorders. The care manager and the primary care provider also regularly review the patient’s status and care plan with a mental health specialist, like a psychiatrist or psychiatric nurse, to be sure the patient is getting the best treatment options and improving.
            </p>
            <h5>Ongoing Research</h5>
            <p>
              To know who is most at risk and to prevent suicide, scientists need to understand the role of long-term factors (such as childhood experiences) as well as more immediate factors like mental health and recent life events. Researchers also are looking at how genes can either increase risk or make someone more resilient to loss and hardships.
            </p>


            <Footnote />
            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  )
}
