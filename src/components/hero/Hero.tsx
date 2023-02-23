import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import IconGroup from "../icon-group/IconGroup";

const Hero = () => {
  return (
    <div className="md:flex-row flex flex-col-reverse mt-10 md:mt-16 justify-between">
      <div className="flex-1">
        <article>
          <h1 className="text-3xl font-bold text-gamma">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p className="text-psi mt-5 md:mt-12">
            We provide what you need to enjoy your <br /> holiday with family.
            Time to make another <br /> memorable moments.
          </p>
        </article>
        <Link href="#featured">
          <Button
            title="Show Me Now"
            type="primary"
            width="w-fit px-10 mt-8 md:mt-12"
          />
        </Link>
        <div className="flex gap-5 mt-16">
          <IconGroup image="unknown" amount={80.409} title="travelers" />
          <IconGroup image="camera" amount={864} title="treasures" />
          <IconGroup image="location" amount={1.352} title="cities" />
        </div>
      </div>
      <div className="md:flex-1 relative md:h-auto mb-10 h-[300px] ">
        <Image
          style={{ zIndex: -1 }}
          className="object-contain"
          src="/images/banner.svg"
          alt="Banner Image"
          fill
        />
      </div>
    </div>
  );
};

export default Hero;
