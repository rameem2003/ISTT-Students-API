fetch("https://istt-students-api.vercel.app/api/v1/students/451638")
  .then((res) => res.json())
  .then((data) => console.log(data));

[
  {
    _id: "663ce98df4d34a73941df99d",
    studentNameBangla: "মাহমুদ হাসান রামীম",
    studentNameEnglish: "Mahmood Hassan Rameem",
    status: true,
    department: "computer",
    diplomaBoardRoll: "451638",
    diplomaBoardReg: "1502020501",
    studentImage:
      "https://rameem2003.github.io/oursite/img/gallery/MAHMOOD%20HASSAN%20RAMEEM%201.jpg",
    fathersName: "এ এন এম মুদাচ্ছির হোসেন",
    mothersName: "নিঝুম আক্তার",
    session: "2019-20",
    bloodGroup: "A+",
    sscGroup: "বিজ্ঞান",
    sscResult: "4.67",
    dob: "04-11-2003",
    email: "rameem2019@gmail.com",
    __v: 0,
  },
  {
    _id: "663ceaf8f4d34a73941df9a2",
    studentNameBangla: "ফাহমিদা ইয়াসমিন",
    studentNameEnglish: "Fahmida Yeasmin",
    status: true,
    department: "computer",
    diplomaBoardRoll: "451628",
    diplomaBoardReg: "1502020514",
    studentImage:
      "https://rameem2003.github.io/oursite/img/gallery/fahmida.jpg",
    fathersName: "মহাম্মদ আলা উদ্দিন",
    mothersName: "নাজমা ইয়াসমিন",
    session: "2019-20",
    bloodGroup: "A+",
    sscGroup: "মানবিক",
    sscResult: "4.31",
    dob: "05-05-1998",
    email: "fahmidayeasmin.me@gmail.com",
    __v: 0,
  },
];
