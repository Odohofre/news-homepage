import { desktopWeb3Image, mobileWeb3Image } from "../imageList";

export default function Main() {
  return (
    <main className="mt-3 mb-16">
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
      <section className="mt-5">
        <h1 className="text-neutral-blue-700 text-5xl font-bold">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="text-neutral-blue-300 mt-5 text-base">
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
