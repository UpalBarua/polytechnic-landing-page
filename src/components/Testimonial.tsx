import React from "react";

const Testimonial = () => {
  const allTestimonial = [
    {
      id: 1,
      name: "Asim roy",
      batch: "Computer Technology",
      back: "#FFA9E7",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbOTGGFzdWOAb6R1S5vujgZ4zHoQs16CD4yN3vq6U5g&s",
      review:
        "This institute is great for of all .Instructor is very helpful.There explanation is to good.After finishing we are so satisfied . ",
    },
    {
      id: 2,
      name: "Jisan ahmed",
      batch: "Civil Technology",
      back: "#BB999C",
      image:
        "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
      review:
        "This institute is great for of all .Instructor is very helpful.There explanation is to good.After finishing we are so satisfied . ",
    },
    {
      id: 3,
      name: "Samir mahmud",
      batch: "Architecture Technology",
      back: "#E88D67",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14d9qYL7-1n4oCFQpMPRumEFfPuaGdOPFp3xp_BUb0n_YfXqm2-0tzolDWD4eQW2KUgU&usqp=CAU",
      review:
        "This institute is great for of all .Instructor is very helpful.There explanation is to good.After finishing we are so satisfied . ",
    },
  ];
  return (
    <section className="mt-14 w-full lg:w-[1200px] mx-auto">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
        {allTestimonial?.map((testimonial) => (
          <div key={testimonial.id} className="shadow-md shadow-green-500">
            <div className="py-4 px-8 mt-16 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 rounded-full border-2 border-blue-500 dark:border-blue-400"
                  alt="Testimonial avatar"
                  src={testimonial?.image}
                />
              </div>

              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                {testimonial?.batch}
              </h2>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                {testimonial?.review}
              </p>

              <div className="flex justify-start mt-2">
                <a
                  href="#"
                  className="text-lg font-medium text-blue-600 dark:text-blue-300"
                  role="link"
                >
                  {testimonial?.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
