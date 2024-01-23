import React from 'react';
import Marquee from 'react-fast-marquee';

const Testimonial = () => {
  const allTestimonial = [
    {
      id: 1,
      name: 'আশিক মাহমুদ',
      position: 'অভিভাবক',
      back: '#FFA9E7',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbOTGGFzdWOAb6R1S5vujgZ4zHoQs16CD4yN3vq6U5g&s',
      review:
        'আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি। ',
    },
    {
      id: 2,
      name: 'আশিক মাহমুদ',
      position: 'অভিভাবক',
      back: '#BB999C',
      image:
        'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
      review:
        'আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি।',
    },
    {
      id: 3,
      name: 'আশিক মাহমুদ',
      position: 'প্রাক্তন ছাত্র',
      back: '#E88D67',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14d9qYL7-1n4oCFQpMPRumEFfPuaGdOPFp3xp_BUb0n_YfXqm2-0tzolDWD4eQW2KUgU&usqp=CAU',
      review:
        'আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি।',
    },
    {
      id: 4,
      name: 'আশিক মাহমুদ',
      position: 'অভিভাবক',
      back: '#E88D67',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14d9qYL7-1n4oCFQpMPRumEFfPuaGdOPFp3xp_BUb0n_YfXqm2-0tzolDWD4eQW2KUgU&usqp=CAU',
      review:
        'আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি।',
    },
    {
      id: 5,
      name: 'আশিক মাহমুদ',
      position: 'প্রাক্তন ছাত্র',
      back: '#E88D67',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14d9qYL7-1n4oCFQpMPRumEFfPuaGdOPFp3xp_BUb0n_YfXqm2-0tzolDWD4eQW2KUgU&usqp=CAU',
      review:
        'আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি।',
    },
    {
      id: 6,
      name: 'আশিক মাহমুদ',
      position: 'প্রাক্তন ছাত্র',
      back: '#E88D67',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14d9qYL7-1n4oCFQpMPRumEFfPuaGdOPFp3xp_BUb0n_YfXqm2-0tzolDWD4eQW2KUgU&usqp=CAU',
      review:
        'আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি। ',
    },
  ];
  return (
    <section>
      <h1 className="pt-6 pb-6 text-2xl font-bold text-center text-orange-500">
        আমাদের প্রাক্তন ছাত্র এবং দের মতামত
      </h1>
      <div>
        <Marquee>
          {allTestimonial?.map((testimonial) => (
            <div key={testimonial?.id} testimonial={testimonial}>
              <div className="flex flex-col mx-2 my-4 max-w-sm shadow-lg">
                <div className="px-4 py-8 rounded-t-lg sm:px-8 md:px-12">
                  <p className="relative px-6 py-1 text-lg italic text-center">
                    {testimonial?.review}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center p-8 rounded-b-lg">
                  <img
                    src={testimonial?.image}
                    alt=""
                    className="-mt-16 mb-2 w-16 h-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />
                  <p className="text-xl font-semibold">{testimonial?.name}</p>
                  <p className="text-sm uppercase">{testimonial?.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonial;
