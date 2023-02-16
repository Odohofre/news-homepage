function News({ title, content }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-off-white">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default function Aside() {
  return (
    <aside className="bg-neutral-blue-700 px-6 py-6 text-justify">
      <h2 className="text-3xl text-primary-soft-orange font-bold mb-6">New</h2>
      <div className="space-y-8">
        <News
          title="Hydrogen VS Electric Cars"
          content="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <div className="w-full h-[0.5px] bg-neutral-blue-300"></div>
        <News
          title="The Downsides of AI Artistry"
          content="What are the possible adverse effects of on-demand AI image generation?"
        />
        <div className="w-full h-[0.5px] bg-neutral-blue-300"></div>
        <News
          title="Is VC Funding Drying Up?"
          content="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </div>
    </aside>
  );
}
