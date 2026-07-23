import React from 'react'

import Card from './component/Card'

const App = () => {

const users = [
  {
    id: 1,
    available: true,
    price: "$55/hr",
    image: "https://i.pravatar.cc/150?img=60",
    name: "Wade Wilson",
    role: "UI/UX Designer",
    company: "Epic Coders",
    skills: ["UI", "UX", "Photoshop"],
    extra: "4 days ago",
    description:
      "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him."
  },

  {
    id: 2,
    available: true,
    price: "$32/hr",
    image: "https://i.pravatar.cc/150?img=47",
    name: "Maria Petrescu",
    role: "Mobile Designer",
    company: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    extra: "2 days ago",
    description:
      "Maria is an Android and iOS developer who worked at Apple for 6 years."
  },

  {
    id: 3,
    available: false,
    price: "$42/hr",
    image: "https://i.pravatar.cc/150?img=32",
    name: "Alexandra Morgan",
    role: "Mobile Designer",
    company: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    extra: "12 days ago",
    description:
      "Alexandra is a dedicated developer for mobile platforms and is very good at it."
  },

  {
    id: 4,
    available: true,
    price: "$44/hr",
    image: "https://i.pravatar.cc/150?img=44",
    name: "Jennifer Smith",
    role: "Interactive Designer",
    company: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    extra: "2 days ago",
    description:
      "Jennifer is an interactive designer who is really awesome at what she does."
  },

  {
    id: 5,
    available: true,
    price: "$40/hr",
    image: "https://i.pravatar.cc/150?img=5",
    name: "Svetlana Anyukova",
    role: "Mobile Designer",
    company: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    extra: "20 days ago",
    description:
      "Samantha is an Android and iOS designer with advanced knowledge in coding."
  },

  {
    id: 6,
    available: false,
    price: "$30/hr",
    image: "https://i.pravatar.cc/150?img=14",
    name: "Marko van Kooh",
    role: "UI/UX Designer",
    company: "Visual Madness",
    skills: ["UI", "UX", "Photoshop"],
    extra: "4 days ago",
    description:
      "Marko is a 25 year old web designer with an impressive portfolio behind him."
  },

  {
    id: 7,
    available: false,
    price: "$50/hr",
    image: "https://i.pravatar.cc/150?img=12",
    name: "Pawel Koszentka",
    role: "UX Designer",
    company: "Apple Inc.",
    skills: ["UI", "UX", "Photoshop"],
    extra: "44 days ago",
    description:
      "Pawel is a 32 year old UX designer, with over 10 years of experience in what he does."
  },

  {
    id: 8,
    available: true,
    price: "$32/hr",
    image: "https://i.pravatar.cc/150?img=48",
    name: "Sonia Simionov",
    role: "Mobile Designer",
    company: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    extra: "2 days ago",
    description:
      "Sonia is an Android and iOS developer who worked at Apple for 6 years."
  },

  {
    id: 9,
    available: false,
    price: "$40/hr",
    image: "https://i.pravatar.cc/150?img=15",
    name: "Jonathan Wayne",
    role: "Photographer",
    company: "Epic Coders",
    skills: ["UI", "UX", "Photoshop"],
    extra: "4 days ago",
    description:
      "Jonathan is a 28 year old photographer from London with a real talent for what he does."
  },

  {
    id: 10,
    available: false,
    price: "Free",
    image: "https://i.pravatar.cc/150?img=68",
    name: "Batman",
    role: "Superhero",
    company: "Freelancer",
    skills: ["Tech", "IT", "Martial Arts"],
    extra: "4 days ago",
    description: "I'm Batman!"
  },

  {
    id: 11,
    available: true,
    price: "$39/hr",
    image: "https://i.pravatar.cc/150?img=49",
    name: "Georgiana Suclea",
    role: "Mobile Designer",
    company: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    extra: "2 days ago",
    description:
      "Georgiana is an Android and iOS developer who worked at Apple for 6 years."
  },

  {
    id: 12,
    available: false,
    price: "$45/hr",
    image: "https://i.pravatar.cc/150?img=11",
    name: "Gregory Johnes",
    role: "UI/UX Designer",
    company: "Epic Coders",
    skills: ["UI", "UX", "Photoshop"],
    extra: "4 days ago",
    description:
      "Gregory is a 32 year old UI/UX designer, with an impressive portfolio behind him."
  }
];



  return (
    <div className='parent'>
      
{users.map((user) => (
  <Card
    key={user.id}
      available={user.available}
      price={user.price}
      image={user.image}
      name={user.name}
      role={user.role}
      company={user.company}
      skills={user.skills}
      extra={user.extra}
      description={user.description}

  />
))}

    
    </div>
  )
}

export default App