import Card from "@/components/card/Card";
import Hero from "@/components/hero/Hero";
import BaseLayout from "@/components/layouts/base/BaseLayout";
import { data } from "@/fake-data";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Hero />
        <section id="featured" className="my-16">
          <article>
            <h1 className="text-gamma font-medium text-xl">Most Picked</h1>
            <div className="grid md:grid-cols-3 gap-x-3 gap-y-3 mt-5">
              {data.slice(0, 5).map((el) => (
                <Card
                  key={el.id}
                  title={el.title}
                  location="Jakarta, Indonesia"
                  label="per night"
                  labelStrong={el.price}
                  height={el.id === 1 ? "md:h-[97.5%] h-[215px]" : ""}
                  cardCustomSyle={el.id === 1 ? "md:row-span-3 object-fit" : ""}
                  imageCustomStyle={el.id === 1 ? "object-cover" : ""}
                  imageSrc={el.image.thumbnail}
                />
              ))}
            </div>
          </article>
        </section>
        <section className="mb-16">
          <article>
            <h1 className="text-gamma font-medium text-xl">
              Houses with beauty backyard
            </h1>
            <ScrollingCarousel className="mt-5">
              {data.slice(6, 13).map((el) => (
                <Card
                  key={el.id}
                  title={el.title}
                  location="Jakarta, Indonesia"
                  label={el.id === 3 || el.id === 6 ? "Choice" : ""}
                  labelStrong="Popular"
                  imageSrc={el.image.thumbnail}
                  width="w-[263px]"
                  height="h-[180px]"
                />
              ))}
            </ScrollingCarousel>
          </article>
        </section>
        <section className="mb-16">
          <article>
            <h1 className="text-gamma font-medium text-xl">
              Hotels with large living room
            </h1>
            <ScrollingCarousel className="mt-5">
              {data.slice(5, 13).map((el) => (
                <Card
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
          </article>
        </section>
        <section>
          <article>
            <h1 className="text-gamma font-medium text-xl">
              Apartments with kitchen set
            </h1>
            <ScrollingCarousel className="mt-5">
              {data.slice(0, 8).map((el) => (
                <Card
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
          </article>
        </section>
      </BaseLayout>
    </>
  );
}
