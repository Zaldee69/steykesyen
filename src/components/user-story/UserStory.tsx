/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../button/Button";

const UserStory = () => {
  return (
    <section className="flex md:flex-row flex-col gap-x-20 gap-y-10 my-20 items-center">
      <div className="max-w-xs">
        <img src="/images/family.svg" className="w-full" alt="family image" />
      </div>
      <div className="flex-1 max-w-lg">
        <h3 className="text-gamma font-medium text-xl mb-10">Happy Family??</h3>
        <Image src="/images/stars.svg" height={140} width={140} alt="stars" />
        <h1 className="text-2xl text-gamma mt-2">
          What a great trip with my family and I should try again next time soon
          ...
        </h1>
        <p className="text-psi font-thin mt-2">Rizaldy, Fullstack Developer</p>
        <Button
          type="primary"
          title="Read Thier Story"
          width="w-fit px-10 mt-8 md:mt-12"
        />
      </div>
    </section>
  );
};

export default UserStory;
