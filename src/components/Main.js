import TextBox from "./TextBox";
import SkillList from "./SkillList";

export default function Main() {
  return (
    <main>
      <TextBox fontSize={38} width={40}>
        Hiya, I'm Finn. I'm a recently graduated full-stack developer based in
        Edinburgh.
      </TextBox>
      <SkillList />
    </main>
  );
}
