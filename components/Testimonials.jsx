import React from 'react';

const Tesimonials = () => {
  const data = [
    {
      id: 1,
      name: "Zhibo Zhang",
      title: "Senior Software Engineering Manager @ IBM",
      desc:
        "Richard is a brilliant and gifted software developer who joined my team as a backend developer intern. During his internship, he has not only shown his great technical skills, but also has brought a lot of positive energies to the team. He is a fast learner, a challenge seeker, very proactive, self-motivated, and goal-oriented. Richard was able to contribute to a new feature after three weeks of joining the team, this is very impressive. When he approached the implementation of the new feature, he also thoroughly investigated the related code areas and fixed bugs as discovered. When investigation tasks are assigned to him, Richard can come up with PoCs and great presentations in a timely manner, and share the knowledge with the rest of the team. Overall, Richard is a great developer to work with and I wish him all the best in his future!",
    },
    {
      id: 2,
      name: "Robin Grosman",
      title: "Principal Software Engineer @ Huawei",
      desc: "Richard has always worked hard on the assignment he was given and has learned very quickly. He always verified his work and it was gone with good quality. He takes general feedback very well and immediately applies it. Over the workterm I saw many of his technical as well as soft skills grow signficantly.\n\n\n\n\n\n\n\n\n\n\n"
    },
    {
      id: 3,
      name: "Gordon Wong",
      title: "IT Architect @ CAE",
      desc:
        "Richard was very receptive to comments and has exhibited a passion to learn new technologies. He has also shown that he is willing to go far and beyond to get something done. Being someone in his first work term, Richard has exceeded all the expectations.\n\n\n\n\n\n\n\n\n\n\n\n",
    },
  ];


  return (
    <div id='testimonials' className='w-full testimonials'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4 tracking-widest uppercase text-[#5651e5]'>
          Testimonials
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {data.map((d) => (
            <div key={d.id} className="relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group" style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
              <p style={{
                width: '100%',
                padding: '0 50px',
                color: 'black',
                fontStyle: '2rem',
                lineHeight: '24px',
                fontSize: '20px',
                textAlign: 'justify',
                paddingTop: '2rem'
              }}>{d.desc}</p>

              <div className='buttom' style={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
                marginTop: '10px'
              }}>
                <h3 style={{
                  fontSize: '25px'
                }}>{d.name}</h3>
                <h4 style={{
                  color: '#797373',
                  fontSize: '20px', marginBottom: '1.5rem'
                }}>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tesimonials;
