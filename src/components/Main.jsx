import { desktopWeb3Image, mobileWeb3Image } from "../imageList";

export default function Main() {
  return (
    <main className="mt-3 md:m-0 mb-16 col-span-2 row-span-2">
      <section>
        <picture>
          <img
            src={mobileWeb3Image}
            width={343}
            height={300}
            className="md:hidden"
            alt="lego bricks"
          />
          <img
            src={desktopWeb3Image}
            // width={}
            // height={}
            className="hidden md:block"
            alt="lego bricks"
          />
        </picture>
      </section>
      <section className="mt-5 md:mt-8 md:grid md:grid-rows-1 md:grid-cols-2 md:gap-8">
        <h1 className="text-neutral-blue-700 text-4xl md:text-6xl font-bold md:row-span-1 md:col-span-1">
          The Bright Future of Web 3.0?
        </h1>
        <div className="md:">
          <p className="text-neutral-blue-300 mt-5 md:mt-0 text-base font-bold">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button
            className="bg-primary-soft-red text-base text-off-white font-bold px-10 py-3 tracking-[.15em] mt-7"
            type="submit"
          >
            READ MORE
          </button>
        </div>
      </section>
    </main>
  );
}
