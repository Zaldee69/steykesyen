import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import IconGroup from "@/components/icon-group/IconGroup";
import BaseLayout from "@/components/layouts/base/BaseLayout";
import UserStory from "@/components/user-story/UserStory";
import { data } from "@/fake-data";
import { rupiahFormat } from "@/utility/rupiahFormat";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TCustomInput extends Omit<ReactDatePickerProps, "onChange"> {
  onClick?(): void;
  onChange?(): void;
}

type TFacility = {
  bathRoom: string;
  bedroom: string;
  diningRoom: string;
  livingRoom: string;
  television: string;
  unitReady: string;
  wifi: string;
};

type TDestination = {
  id: number;
  about: string;
  facility: TFacility;
  image: {
    thumbnail: string;
    detailImage: string[];
  };
  label: string;
  location: string;
  price: string;
  rentalTotal: number;
  title: string;
};

type Props = {
  details: TDestination;
};

const Index = (props: Props) => {
  const date = new Date();
  const nexDate = new Date(date);
  const [nightAmount, setNightAmount] = useState<number>(1);
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState<any>(
    nexDate.setDate(date.getDate() + 1)
  );
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(
    (
      { value, onClick }: TCustomInput,
      ref: React.LegacyRef<HTMLButtonElement> | undefined
    ) => (
      <div className="flex mt-1">
        <div className=" bg-gamma flex justify-center items-center relative w-12 rounded h-9">
          <Image
            className="absolute"
            width={20}
            height={20}
            src="/images/calendar.svg"
            alt="Calendar Icon"
          />
        </div>
        <button
          className="bg-omega py-[8px] w-full text-sm rounded"
          onClick={onClick}
          ref={ref}
        >
          {value}
        </button>
      </div>
    )
  );

  return (
    <BaseLayout>
      <section className="mt-10">
        <article className="flex gap-10 items-center">
          <div className="text-psi hidden md:flex text-sm gap-3">
            <Link href="/">
              <p className="font-thin">Home</p>
            </Link>
            /<p className="text-gamma">House Details</p>
          </div>
          <div className="flex-1 text-center md:mr-48">
            <h1 className="text-4xl font-semibold text-gamma">
              {props.details.title}
            </h1>
            <p className="text-psi font-thin text-sm mt-3">
              Jakarta, Indonesia
            </p>
          </div>
        </article>
        <div className="grid sm:grid-cols-2 gap-3 mt-8">
          {props.details.image.detailImage.map((el, id) => (
            <Card
              isLink={false}
              key={id}
              height={id === 1 ? "md:h-[97.5%] h-[215px]" : ""}
              cardCustomSyle={id === 1 ? "md:row-span-3 object-fit" : ""}
              imageCustomStyle={"object-cover"}
              imageSrc={el}
              width="auto"
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 justify-between mt-10">
          <div>
            <article className="flex-1 max-w-2xl">
              <h3 className="text-gamma font-semibold ">About the place</h3>
              <p className="text-psi text-sm font-thin ">
                {props.details.about}
              </p>
            </article>
            <div className="grid grid-rows-2 grid-flow-col mt-10 gap-3">
              <IconGroup
                image="bathroom"
                amount={props.details.facility.bathRoom}
                title="bathroom"
              />
              <IconGroup
                image="bedroom"
                amount={props.details.facility.bedroom}
                title="bedroom"
              />
              <IconGroup
                image="diningroom"
                amount={props.details.facility.diningRoom}
                title="dining groom"
              />
              <IconGroup
                image="tv"
                amount={props.details.facility.television}
                title="tv"
              />
              <IconGroup
                image="wifi"
                amount={props.details.facility.wifi}
                title="mbp/s"
              />
              <IconGroup
                image="kulkas"
                amount={props.details.facility.diningRoom}
                title="refrigator"
              />
              <IconGroup
                image="livingroom"
                amount={props.details.facility.livingRoom}
                title="living room"
              />
              <IconGroup
                image="ac"
                amount={props.details.facility.diningRoom}
                title="Air Conditioner"
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="md:px-16 w-full px-10 py-10 border rounded-lg">
              <h3 className="text-gamma font-semibold ">Start Booking</h3>
              <p className="text-2xl text-psi font-thin mt-5">
                <span className="text-success font-medium">
                  {rupiahFormat(Number(props.details.price))}
                </span>{" "}
                per night
              </p>
              <p className="text-sm text-gamma mt-2">How long you will stay?</p>
              <div className="flex w-full relative items-center mt-1">
                <button
                  onClick={() =>
                    setNightAmount(
                      nightAmount <= 1 ? nightAmount : nightAmount - 1
                    )
                  }
                  className="bg-error absolute left-0 text-white w-10 rounded font-bold h-9"
                >
                  -
                </button>
                <p className="w-full text-center text-sm bg-omega py-[8px] ">
                  {nightAmount} nights
                </p>
                <button
                  onClick={() =>
                    setNightAmount(
                      nightAmount >= 10 ? nightAmount : nightAmount + 1
                    )
                  }
                  className="bg-success absolute right-0 text-white w-10 rounded font-bold h-9"
                >
                  +
                </button>
              </div>
              <p className="text-sm text-gamma mt-3">Pick a Date</p>
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                selectsRange
                dateFormat="d MMMM"
                className="focus:outline-none"
                customInput={<CustomInput />}
              />
              <p className="text-sm font-thin ">
                you will pay{" "}
                <span className="text-gamma font-semibold">
                  {rupiahFormat(Number(props.details.price) * nightAmount)}{" "}
                </span>
                per{" "}
                <span className="text-gamma font-semibold">
                  {nightAmount} nights
                </span>
              </p>
              <Link className="mt-10" href="">
                <Button
                  title="Continue to Book"
                  type="primary"
                  customStyle="mt-8 "
                  isFullsize
                />
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-gamma font-medium text-xl mt-10">
          Treasure to Choose
        </h1>
        <ScrollingCarousel className="mt-5">
          {data.slice(0, 8).map((el) => (
            <Card
              isLink
              id={el.id}
              key={el.id}
              title={el.title}
              location="Jakarta, Indonesia"
              label={el.id === 1 || el.id === 8 ? "Choice" : ""}
              labelStrong="Popular"
              imageSrc={el.image.thumbnail}
              width="w-[263px]"
              height="h-[180px]"
            />
          ))}
        </ScrollingCarousel>
        <UserStory />
      </section>
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((el) => {
    return {
      params: { id: `${el.id}` },
    };
  });

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const datas = data.filter((el) => el.id === Number(id));

  console.log(id);
  return {
    props: { details: datas[0] },
  };
};

export default Index;
