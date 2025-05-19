type Skill = {
  name: string;
  logo: string;
}

const ItemSkill = ({ skill }: { skill: Skill }) => {
  return (
    <div>
      <img src={skill.logo} alt={skill.name} />
      <p>{skill.name}</p>
    </div>
  )
}

export default ItemSkill;