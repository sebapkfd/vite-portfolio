type TechItem = {
  value: string;
  label: string;
}

const Tool = ({ item }: { item: TechItem }) => {
  return (
    <div className='tool'>
      <img src={item.value} alt='' />
      <p>{item.label}</p>
    </div>
  )
}

export default Tool;