import React from "react";
import { formatedDate } from "../../utils/formateDate";

 const DoctorAbout = ({name, about, qualifications, experiences}) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para">
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus earum
          officiis ratione necessitatibus id, dicta voluptatum eius beatae ut
          quas. Doloremque minus iure veritatis enim esse veniam tempore ut
          impedit aperiam aut quidem, consequuntur exercitationem perspiciatis
          natus maxime deserunt fugiat? */}
          {about}
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          {qualifications?.map((item, index)=> <li key={index} 
          className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatedDate(item.startingDate)} - {formatedDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {item.degree}
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {item.university}
              </p>
            </div>
          </li>)}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences?.map((item,index)=> <li key={index} className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatedDate(item.startingDate)} - {formatedDate(item.endingDate)}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              {item.position}
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              {item.hospital}
            </p>
          </li>)}


        </ul>
      </div>
    </div>
  );
};
export default DoctorAbout