import { gamingImage, pcImage, laptopImage } from "../imageList";

function FooterNews({ title, subtitle, contents, imgSrc }) {
  return (
    <article className="flex space-x-6">
      <img src={imgSrc} width={110} alt="" />
      <div className="flex flex-col justify-between">
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
    <footer className="my-16 space-y-7">
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
