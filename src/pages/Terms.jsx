import React from "react";

const Terms = () => {
  return (
    <section className=" text-[white] flex flex-col items-center py-24 md:mt-0 px-6 gap-10 md:items-start text-left md:px-32 md:gap-4 md:pt-48">
      <div className="font-allotrix-font-secondary w-full text-center mt-16 md:mt-0">
        <h1 className="font-bold text-3xl md:text-4xl md:mb-10 px-2">
          Legal Terms and Conditions
        </h1>
      </div>
      <div className="md:w-[750px] mx-auto font-allotrix-font-secondary flex flex-col gap-6">
        <ol className="flex flex-col gap-4 list-decimal pl-4">
          <li className="ml-4">
            General Conduct
            <ul className="list-disc">
              <li className="ml-4">
                1.1 All participants (hereinafter referred to as "Delegates")
                are required to maintain a high standard of conduct and decorum
                at all times during the Madras MUN Conference (hereinafter
                referred to as "Conference").
              </li>
              <li className="ml-4">
                1.2 Delegates must exhibit respect towards fellow delegates,
                hotel staff, and all property within the hotel premises.
              </li>
            </ul>
          </li>
          <li className="ml-4">
            Hotel Accommodation
            <ul className="list-disc">
              <li className="ml-4">
                2.1 Delegates must comply with all rules and regulations set
                forth by the hotel.
              </li>
              <li className="ml-4">
                2.2 Delegates are responsible for maintaining cleanliness and
                order in their assigned rooms. Any damage to hotel property will
                result in financial liability for the responsible delegate(s).
              </li>
            </ul>
          </li>
          <li className="ml-4">
            Prohibition of Alcohol and Substance Use
            <ul className="list-disc">
              <li className="ml-4">
                3.1 The possession, consumption, or distribution of alcohol,
                drugs, or any illegal substances is strictly prohibited.
              </li>
              <li className="ml-4">
                3.2 Violations of this policy will result in immediate expulsion
                from the Conference, and notification of the delegate’s
                parents/guardians and educational institution.
              </li>
            </ul>
          </li>
          <li className="ml-4">
            Curfew
            <ul className="list-disc">
              <li className="ml-4">
                4.1 Delegates must be in their assigned rooms by 10:00 PM each
                night.
              </li>
              <li className="ml-4">
                4.2 Any form of disturbance, including loud noises, is
                prohibited after the curfew time.
              </li>
            </ul>
          </li>
          <li className="ml-4">
             Attendance and Participation
            <ul className="list-disc">
              <li className="ml-4">
                5.1 Delegates are required to attend all scheduled sessions and
                events.
              </li>
              <li className="ml-4">
                5.2 Punctuality is mandatory; late arrivals may be denied entry
                to sessions.
              </li>
            </ul>
          </li>
          <li className="ml-4">
            Identification
            <ul className="list-disc">
              <li className="ml-4">
                6.1 Delegates must wear their official Conference ID Cards at
                all times within the hotel and conference venues.
              </li>
              <li className="ml-4">
                6.2 Lost ID cards must be reported immediately and may be
                subject to a replacement fee.
              </li>
            </ul>
          </li>
          <li className="ml-4">
            User Conduct:
            <ul className="list-disc">
              <li className="ml-4">
                You agree to not engage in any activity that interferes with or
                disrupts the Services or the servers and networks connected to
                the Services.
              </li>
            </ul>
          </li>
         
          <li className="ml-4">
          Emergency Procedures
            <ul className="list-disc">
              <li className="ml-4">
              7.1 Delegates must familiarize themselves with the hotel's
                emergency exits and procedures.
              </li>
              <li className="ml-4">
              7.2 In the event of an emergency, Delegates must follow the
                instructions of hotel staff and Conference organizers.
              </li>
            </ul>
          </li>
          <li className="ml-4">
             Room Assignments
            <ul className="list-disc">
              <li className="ml-4">
                8.1 Room changes are not permitted without prior approval from
                Conference organizers.
              </li>
              <li className="ml-4">
                8.2 Mixed-gender rooming is prohibited unless explicitly
                authorized by the organizers and with parental consent.
              </li>
            </ul>
          </li>
          <li className="ml-4">
            Liability
            <ul className="list-disc">
              <li className="ml-4">
                9.1 The Conference organizers are not liable for any lost or
                stolen personal belongings.
              </li>
              <li className="ml-4">
                9.2 Delegates are advised to keep their valuables secure at all
                times.
              </li>
            </ul>
          </li>
          <li className="ml-4">
             Responsibility for Damages
            <ul className="list-disc">
              <li className="ml-4">
                10.1 Delegates are fully responsible for any damage or breakage
                of items within the hotel premises.
              </li>
              <li className="ml-4">
                10.2 Neither the hotel nor the Madras MUN organizers will be
                held liable for any such damages.
              </li>
            </ul>
          </li>
          <li className="ml-4">
             Parental Notification
            <ul className="list-disc">
              <li className="ml-4">
                11.1 As all Delegates are minors, any issues or violations of
                these terms and conditions will result in immediate notification
                of the delegate’s parents/guardians.
              </li>
              <li className="ml-4">
                11.2 Parents/guardians will be contacted in cases of misconduct,
                rule violations, or emergencies.
              </li>
            </ul>
          </li>
          <li className="ml-4">
             Disciplinary Actions
            <ul className="list-disc">
              <li className="ml-4">
                12.1 Any violation of these terms and conditions will be
                reviewed by the Conference disciplinary committee.
              </li>
              <li className="ml-4">
                12.2 Consequences of violations may include, but are not limited
                to, warnings, expulsion from the Conference, and notification of
                the delegate’s educational institution and parents/guardians.
              </li>
            </ul>
            </li>
            <li className="ml-4">

             Agreement
            <ul className="list-disc">
              <li className="ml-4">
                13.1 By attending the Madras MUN Conference, Delegates
                acknowledge and agree to comply with these terms and conditions.
              </li>
              <li className="ml-4">
                13.2 Non-compliance with these terms and conditions may result
                in disciplinary action as outlined herein.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Terms;
