import { gamingImage, pcImage, laptopImage } from "../imageList";

function FooterNews({ title, subtitle, contents, imgSrc }) {
  return (
    <article className="flex space-x-6 md:col-span-1">
      <div className="shrink-0">
        <img src={imgSrc} width={100} height={127} alt="" />
      </div>

      <div className="flex flex-col justify-between md:space-y-2 h-full">
        <h2 className="font-bold text-4xl">{title}</h2>
        <h3 className="text-lg font-extrabold text-neutral-blue-700">
          {subtitle}
        </h3>
        <p className="text-neutral-blue-300">{contents}</p>
      </div>
    </article>
  );
}

export default function Footer() {
  return (
    <footer className="my-16 md:my-10 space-y-7 md:space-y-0 col-span-3 row-span-1 md:grid md:grid-rows-1 md:grid-cols-3 md:gap-8">
      <FooterNews
        title="01"
        imgSrc={pcImage}
        subtitle="Reviving Retro PCs"
        contents="What happens when old PCs are given modern upgrades?"
      />
      <FooterNews
        title="02"
        imgSrc={laptopImage}
        subtitle="Top 10 Laptops of 2022"
        contents="Our best picks for various needs and budgets."
      />
      <FooterNews
        title="03"
        imgSrc={gamingImage}
        subtitle="The Growth of Gaming"
        contents="How the pandemic has sparked fresh opportunities."
      />
    </footer>
  );
}
