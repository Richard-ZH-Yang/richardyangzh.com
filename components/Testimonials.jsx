import React from 'react';
// import '../styles/testimonials.css';

const Tesimonials = () => {
 const data = [
  {
   id: 1,
   name: "Gordon Wong",
   title: "Senior Software Developer @ CAE",
   img:
    "",
   icon: "",
   desc:
    "Richard was very receptive to comments and has exhibited a passion to learn new technologies. He has also shown that he is willing to go far and beyond to get something done.",
  },
  {
   id: 2,
   name: "Zhibo Zhang",
   title: "Senior Software Engineering Manager @ IBM",
   img:
    "",
   icon: "",
   desc:
    "Richard is a brilliant and gifted software developer who joined my team as a backend developer intern. During his internship, he has not only shown his great technical skills, but also has brought a lot of positive energies to the team. He is a fast learner, a challenge seeker, very proactive, self-motivated, and goal-oriented. Richard was able to contribute to a new feature after three weeks of joining the team, this is very impressive. When he approached the implementation of the new feature, he also thoroughly investigated the related code areas and fixed bugs as discovered. When investigation tasks are assigned to him, Richard can come up with PoCs and great presentations in a timely manner, and share the knowledge with the rest of the team. Overall, Richard is a great developer to work with and I wish him all the best in his future!",
  },
 ];


 return (
   <div id='testimonials' className='w-full testimonials'>
   <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <h2 className='py-4 tracking-widest uppercase text-[#5651e5]'>
     Testimonials
    </h2>
    <div className='container'>
     {data.map((d) => (
      <div className="card">
       {/* <div className="top">
        <img
         className="user"
         src={d.img}
         alt=""
        />
        <img className="right" src={d.icon} alt="" />
       </div> */}
       <div className="center">
        {d.desc}
       </div>
       <div className="bottom">
        <h3>{d.name}</h3>
        <h4>{d.title}</h4>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default Tesimonials;
