import Description from "./Description";
import data from "./data";

const DescriptionContainer = () => {
  return (
    <div className='flex justify-around pt-24'>
      <Description title='Declarative' text={data[0]} />
      <Description title='Component Based' text={data[1]} />
      <Description title='Learn Once, Write Anywhere' text={data[2]} />
    </div>
  );
};

export default DescriptionContainer;
