import educationData from "../data/educationData";

const Education = () => {
  return (
    <div className="-mt-1 pl-0 pr-3 flex justify-center flex-col items-center">
      <div className="flex items-center pr-4">
        <div className="w-3 h-3 rounded-full bg-orange-400" />
        <div className="w-44 border-[1px] border-slate-500 rounded-t-full" />
        <h2 className="text-xl tracking-widest font-bold mb-4 p-2 px-4 border-[1px] border-slate-500 rounded-full">
          EDUCATION
        </h2>
        <div className="w-44 border-[1px] border-slate-500 rounded-t-full" />
        <div className="h-3 w-3 rounded-full bg-orange-400" />
      </div>

      <div className="grid grid-cols-2">
        {educationData.map((data, index) => (
          <div className="flex" key={index}>
            <div className="w-full mt-1 bg-neutral-800 shadow-md rounded-lg p-3 mr-5 border-2 border-gray-800 mb-6">
              <div className="flex items-center">
                <img
                  src={data.image}
                  alt={data.institution}
                  className="h-20 -mt-20 mr-6"
                />
                <div className="flexbox">
                  <div className="h-18">
                    <a href={data.link}>
                      <h3 className="text-lg mb-1 font-semibold hover:underline">
                        {data.institution}
                      </h3>
                    </a>
                    <p className="text-gray-200 text-sm">
                      <span className="text-orange-300">
                        Years of Attendance:
                      </span>{" "}
                      {data.yearsOfAttendance}
                    </p>
                    {/* <p className="text-gray-200">
                    <span className="text-amber-300">GPA:</span> {data.gpa}
                  </p> */}
                    {data.majors && (
                      <p className="text-gray-200 text-sm">
                        <span className="text-orange-300">Majors:</span>{" "}
                        {data.majors.join(", ")}
                      </p>
                    )}
                    {data.major && (
                      <p className="text-gray-200 text-sm">
                        <span className="text-orange-300 text-sm">Major:</span>{" "}
                        {data.major}
                      </p>
                    )}
                  </div>
                  <p className="text-gray-300 mt-2 text-xs italic font-sans">
                    "{data.description}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
