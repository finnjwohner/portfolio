const skills = [
  "HTML + CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "C#",
  "React",
  "Express.js",
  "SQL",
  "Git",
  "Jest",
  "Docker",
  "Sass",
];

const colours = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
];

export default function SkillList() {
  return (
    <div className="skill-list">
      <p>I have a few core skills, click on some to see how I've used them;</p>
      <ul>
        {skills.map((skill, i) => (
          <li
            key={skill}
            style={{ backgroundColor: `${colours.at(i % colours.length)}` }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
